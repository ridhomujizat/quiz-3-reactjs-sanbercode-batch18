import React, { useContext, useEffect } from "react";
import axios from "axios";
import { DaftarFilmContext } from "./DaftarFilmContext";

const DaftarFilmList = () => {
  const [daftarFilm, setDaftarFilm] = useContext(DaftarFilmContext);

  useEffect(() => {
    if (daftarFilm.lists === null) {
      axios
        .get(`http://backendexample.sanbercloud.com/api/movies`)
        .then((res) => {
          setDaftarFilm({
            ...daftarFilm,
            lists: res.data.map((el) => {
              return {
                id: el.id,
                title: el.title,
                description: el.description,
                year: el.year,
                duration: el.duration,
                genre: el.genre,
                rating: el.rating,
                image_url: el.image_url,
              };
            }),
          });
        });
    }
  }, [daftarFilm, setDaftarFilm]);

  const handleDelete = (event) => {
    let idDataFilm = parseInt(event.target.value);

    let newLists = daftarFilm.lists.filter((el) => el.id !== idDataFilm);

    axios
      .delete(`http://backendexample.sanbercloud.com/api/movies/${idDataFilm}`)
      .then((res) => {
        console.log(res);
        alert("Data Dihapus");
      });

    setDaftarFilm({ ...daftarFilm, lists: [...newLists] });
  };

  const handelEdit = (event) => {
    let idDataFilm = parseInt(event.target.value);

    setDaftarFilm({
      ...daftarFilm,
      selectedId: idDataFilm,
      statusForm: "changeToEdit",
    });
    console.log(idDataFilm);
  };

  return (
    <>
      <h1>DaftarFilm</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Year</th>
            <th>Duration</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {daftarFilm.lists !== null &&
            daftarFilm.lists.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td className="ellipsis">{item.description}</td>
                  <td>{item.year}</td>
                  <td>{item.duration}</td>
                  <td>{item.genre}</td>
                  <td>{item.rating}</td>
                  <td>
                    <button onClick={handelEdit} value={item.id}>
                      Edit
                    </button>
                    <button onClick={handleDelete} value={item.id}>
                      Delete
                    </button>{" "}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default DaftarFilmList;

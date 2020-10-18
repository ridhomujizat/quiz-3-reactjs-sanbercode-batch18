import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { DaftarFilmContext } from "./DaftarFilmContext";

const DaftarFilmFrom = () => {
  let inputFilm = {
    title: "",
    description: "",
    year: 2020,
    duration: 120,
    genre: "",
    rating: 0,
    image_url: "",
  };
  const [daftarFilm, setDaftarFilm] = useContext(DaftarFilmContext);
  const [input, setInput] = useState(inputFilm);

  useEffect(() => {
    if (daftarFilm.statusForm === "changeToEdit") {
      let dataFilm = daftarFilm.lists.find(
        (el) => el.id === daftarFilm.selectedId
      );
      setInput({
        id: dataFilm.id,
        title: dataFilm.title,
        description: dataFilm.description,
        year: dataFilm.year,
        duration: dataFilm.duration,
        genre: dataFilm.genre,
        rating: dataFilm.rating,
        image_url: dataFilm.image_url,
      });
      setDaftarFilm({ ...daftarFilm, statusForm: "edit" });
    }
  }, [daftarFilm, setDaftarFilm]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (daftarFilm.statusForm === "create") {
      axios
        .post(`http://backendexample.sanbercloud.com/api/movies`, {
          id: input.id,
          title: input.title,
          description: input.description,
          year: input.year,
          duration: input.duration,
          genre: input.genre,
          rating: input.rating,
          image_url: input.image_url,
        })
        .then((res) => {
          setDaftarFilm({
            statusForm: "create",
            selectedId: 0,
            lists: [
              ...daftarFilm.lists,
              {
                id: res.data.id,
                title: input.title,
                description: input.description,
                year: input.year,
                duration: input.duration,
                genre: input.genre,
                rating: input.rating,
                image_url: input.image_url,
              },
            ],
          });
          alert("data ditambah");
        });
    } else if (daftarFilm.statusForm === "edit") {
      console.log(daftarFilm.selectedId);
      axios
        .put(
          `http://backendexample.sanbercloud.com/api/movies/${daftarFilm.selectedId}`,
          input
        )
        .then(() => {
          let dataFilm = daftarFilm.lists.find(
            (el) => el.id === daftarFilm.selectedId
          );
          dataFilm.id = input.id;
          dataFilm.title = input.title;
          dataFilm.description = input.description;
          dataFilm.year = input.year;
          dataFilm.duration = input.duration;
          dataFilm.genre = input.genre;
          dataFilm.rating = input.rating;
          dataFilm.image_url = input.image_url;
          setDaftarFilm({
            statusForm: "create",
            selectedId: 0,
            lists: [...daftarFilm.lists],
          });
          alert("dapatdiedit");
        });
    }

    setInput(inputFilm);
  };

  const handleChange = (event) => {
    let typeOfInput = event.target.name;

    switch (typeOfInput) {
      case "title": {
        setInput({ ...input, title: event.target.value });
        break;
      }
      case "description": {
        setInput({ ...input, description: event.target.value });
        break;
      }
      case "year": {
        setInput({ ...input, year: event.target.value });
        break;
      }
      case "duration": {
        setInput({ ...input, duration: event.target.value });
        break;
      }
      case "genre": {
        setInput({ ...input, genre: event.target.value });
        break;
      }
      case "rating": {
        setInput({ ...input, rating: event.target.value });
        break;
      }
      case "image_url": {
        setInput({ ...input, image_url: event.target.value });
        break;
      }
      default: {
        break;
      }
    }
  };
  return (
    <>
      <h1>From Daftar Film</h1>
      <div style={{ width: "50%", margin: "0 auto", display: "block" }}>
        <div style={{ border: "1px solid #aaa", padding: "20px" }}>
          <form onSubmit={handleSubmit}>
            <label style={{ float: "left" }}>Title</label>
            <input
              style={{ float: "right" }}
              type="text"
              name="title"
              value={input.title}
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Description</label>
            <textarea
              style={{ float: "right" }}
              name="description"
              value={input.description}
              onChange={handleChange}
              rows="4"
              required
            />
            <br />
            <br />
            <br />
            <br />
            <label style={{ float: "left" }}>Year</label>
            <input
              style={{ float: "right" }}
              type="number"
              name="year"
              value={input.year}
              onChange={handleChange}
              min="1980"
              max="2020"
              required
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Duration</label>
            <input
              style={{ float: "right" }}
              type="text"
              name="duration"
              value={input.duration}
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Genre</label>
            <input
              style={{ float: "right" }}
              type="text"
              name="genre"
              value={input.genre}
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Rating</label>
            <input
              style={{ float: "right" }}
              type="number"
              name="rating"
              value={input.rating}
              onChange={handleChange}
              min="0"
              max="10"
              required
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Img Url</label>
            <textarea
              style={{ float: "right" }}
              name="image_url"
              value={input.image_url}
              onChange={handleChange}
              rows="4"
              required
            />
            <br />
            <br />
            <br />
            <br />
            <input type="submit" value="Submit" />
            <br />
          </form>
        </div>
      </div>
    </>
  );
};

export default DaftarFilmFrom;

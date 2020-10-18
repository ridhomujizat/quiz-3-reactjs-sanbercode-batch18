import React, { useState, useEffect } from "react";
import axios from "axios";
// import { DaftarFilmContext } from "./DaftarFilm/DaftarFilmContext";

const Home = () => {
  const [daftarFilm, setDaftarFilm] = useState(null);

  useEffect(() => {
    if (daftarFilm === null) {
      axios
        .get(`http://backendexample.sanbercloud.com/api/movies`)
        .then((res) =>
          setDaftarFilm(
            res.data.map((el) => {
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
            })
          )
        );
    }
  });

  return (
    <section>
      <h1>Daftar Film Terbaik</h1>
      <div className="article-list">
        {daftarFilm !== null &&
          daftarFilm.map((item, index) => {
            return (
              <div key={index} className="film">
                <h3>{item.title}</h3>
                <div style={{ display: "flex" }}>
                  <img
                    className="imgFilm"
                    src={item.image_url}
                    alt={item.title}
                  />

                  <div style={{ marginLeft: 20 }}>
                    <h4>Rating :{item.rating}</h4>
                    <h4>Durasi :{item.duration / 60}jam</h4>
                    <h4>Genre :{item.genre}</h4>
                  </div>
                </div>

                <p>{item.description}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Home;

import React from "react";
import { DaftarFilmProvider } from "./DaftarFilmContext";
import DaftarFilmList from "./DaftarFilmList";
import DaftarFilmFrom from "./DaftarFilmForm";
import SearchFilm from "./SearchFilm";
import "./style.css";

const DaftarFilm = () => {
  return (
    <div className="Daftar-Film">
      <DaftarFilmProvider>
        <SearchFilm />
        <DaftarFilmList />
        <DaftarFilmFrom />
      </DaftarFilmProvider>
    </div>
  );
};

export default DaftarFilm;

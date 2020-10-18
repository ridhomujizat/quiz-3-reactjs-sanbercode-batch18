import React, { useState, useContext } from "react";
import { DaftarFilmContext } from "./DaftarFilmContext";

const SearcFilm = () => {
  const [daftarFilm, setDaftarFilm] = useContext(DaftarFilmContext);
  const [input, setInput] = useState({ title: "" });

  const handleSearch = (event) => {
    event.preventDefault();

    if (input.title === "") {
      setDaftarFilm({ lists: null });
    } else {
      console.log(input.title);
      let newLists = daftarFilm.lists.filter((el) =>
        el.title.includes(input.title)
      );

      setDaftarFilm({ ...daftarFilm, lists: newLists });
    }
  };

  const handleChange = (event) => {
    setInput({ ...input, title: event.target.value });
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input value={input.title} onChange={handleChange} />
        <input type="submit" value="Search" />
      </form>
    </>
  );
};

export default SearcFilm;

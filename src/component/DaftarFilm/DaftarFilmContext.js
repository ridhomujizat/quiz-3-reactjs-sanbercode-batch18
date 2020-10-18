import React, { useState, createContext } from "react";

export const DaftarFilmContext = createContext();

export const DaftarFilmProvider = (props) => {
  const [daftarFilm, setDaftarFilm] = useState({
    lists: null,
    selectedId: 0,
    statusForm: "create",
  });

  return (
    <DaftarFilmContext.Provider value={[daftarFilm, setDaftarFilm]}>
      {props.children}
    </DaftarFilmContext.Provider>
  );
};

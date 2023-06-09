import React, { useEffect, useState } from "react";
import axios from "axios";

const DodajDuznika = ({ setDodajDuznika, setTrigger, trigger }) => {
  const [ime, setIme] = useState(null);
  const [prezime, setPrezime] = useState(null);

  function handleDodajDuznika(e) {
    e.preventDefault();
    axios.post("/api/kiosk/dodaj-duznika", { ime, prezime }).then(() => {
      setTrigger(!trigger);
      setDodajDuznika(false);
    });
  }

  return (
    <main className="h-full w-full justify-center flex items-center bg-black bg-opacity-50  absolute top-0 left-0">
      <article className="h-[80%] w-[80%] relative bg-white flex justify-center items-center">
        <button
          className="absolute top-2 left-2 z-20"
          onClick={() => setDodajDuznika(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-12 h-12 text-slate-600 hover:text-red-500 transition-all"
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <form onSubmit={handleDodajDuznika} className="h-full w-full fl">
          <fieldset className="fl w-full h-full relative">
            <label className="w-full h-[10%] flex justify-center">
              <input
                placeholder="Ime"
                className="bg-gray-50 text-center w-[80%] h-full rounded-md text-2xl "
                onChange={(e) => setIme(e.target.value)}
              />
            </label>
            <label className="w-full h-[10%] flex justify-center">
              <input
                placeholder="Prezime"
                className="bg-gray-50 text-center w-[80%] h-full mt-1 rounded-md text-2xl"
                onChange={(e) => setPrezime(e.target.value)}
              />
            </label>
            <button className="absolute bottom-10 bg-cyan-200 rounded-md text-white w-[30%] h-[10%] text-2xl hover:bg-slate-600 transition-all">
              Dodaj
            </button>
          </fieldset>
        </form>
      </article>
    </main>
  );
};

export default DodajDuznika;

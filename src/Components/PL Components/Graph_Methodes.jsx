import React from 'react'
import { useState } from 'react';
export default function Graph_Methodes({ method, setMethod }) {
    function Toggle_Methode(selectedMethod) {
        if (method !== selectedMethod) {
            setMethod(selectedMethod);
        }
    }
  return (
      <div className=" flex items-center justify-around gap-6 w-full ">
          <div
              className={`${
                  method === "sommets"
                      ? " text-Blue"
                      : " text-black"
              }
                       cursor-pointer text-xl font-bold`}
              onClick={() => Toggle_Methode("sommets")}
          >
              recensement des sommets
          </div>
          <div
              className={`${
                  method === "Droits"
                      ? " text-Blue"
                      : "  text-black"
              }
                             cursor-pointer text-xl font-bold`}
              onClick={() => Toggle_Methode("Droits")}
          >
              Droit Parallèle
          </div>
      </div>
  );
}

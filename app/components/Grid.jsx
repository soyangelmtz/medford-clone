import React from "react";
import "./styles/animaciones.css";

export default function Grid() {
  return (
    <div className="mt-10 overflow-hidden place-items-center grid grid-cols-3 grid-rows-2">
      <div className="">
        <div className="w-[400px] h-[400px] overflow-hidden bg-red-300" >
          <img className="mx-auto animacion-grid my-auto" src="/cat.jpg" alt="" />
        </div>
        <p className="text-xl">AREA 1</p>
      </div>
    </div>
  );
}

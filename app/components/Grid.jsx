import React from "react";
import "./styles/animaciones.css";

export default function Grid() {
  return (
    <div className="mt-10 overflow-hidden place-items-center grid grid-cols-3 grid-rows-2">
      <div className="mb-10">
        <div className="w-[300px] rounded-full h-[300px] overflow-hidden" >
          <img className="animacion-grid m-auto" src="./cat.jpg" alt="" />
        </div>
        <p className="text-xl">AREA 1</p>
      </div>


      <div className="mb-10">
        <div className="w-[300px] rounded-full h-[300px] overflow-hidden" >
          <img className="animacion-grid m-auto" src="./cat.jpg" alt="" />
        </div>
        <p className="text-xl">AREA 2</p>
      </div>

      <div className="mb-10">
        <div className="w-[300px] rounded-full h-[300px] overflow-hidden" >
          <img className="animacion-grid m-auto" src="./cat.jpg" alt="" />
        </div>
        <p className="text-xl">AREA 3</p>
      </div>


      <div className="mb-10">
        <div className="w-[300px] rounded-full h-[300px] overflow-hidden" >
          <img className="animacion-grid m-auto" src="./cat.jpg" alt="" />
        </div>
        <p className="text-xl">AREA 4</p>
      </div>

      <div className="mb-10">
        <div className="w-[300px] rounded-full h-[300px] overflow-hidden" >
          <img className="animacion-grid m-auto" src="./cat.jpg" alt="" />
        </div>
        <p className="text-xl">AREA 5</p>
      </div>


      <div className="mb-10">
        <div className="w-[300px] rounded-full h-[300px] overflow-hidden" >
          <img className="animacion-grid m-auto" src="./cat.jpg" alt="" />
        </div>
        <p className="text-xl">AREA 6</p>
      </div>
      
    </div>
  );
}

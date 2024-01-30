import React from "react";

export default function Footer() {
  return (
    <>
      {/* Mobile screen-sized footer */}
      <hr className="md:hidden w-48 h-1 mx-auto my-4  border-0 rounded md:my-10 bg-gray-700" />
      <footer className="md:hidden w-auto grid grid-rows-2">
        <div className="grid grid-cols-2 mb-3">
          <img className="m-auto h-20 object-cover" src="/uanl-logo.png" alt="" />
          <img className="m-auto h-24 object-cover" src="/fcq.png" alt="" />
        </div>
        <div>
          <div className="grid grid-rows-2">
            <p className="text-center">
              ivansantos@email.com | (81) 123 - 4567
            </p>
            <p className="text-center">
              Avenida Universidad s/n, Cd. Universitaria, Ciudad Universitaria,
              66455 San Nicolás de los Garza, Nuevo Leon
            </p>
          </div>
        </div>
      </footer>
      <hr className="md:hidden w-48 h-1 mx-auto my-4  border-0 rounded md:my-10 bg-gray-700" />

      {/* Footer for md and lg screens */}
      <footer className="md:block hidden w-max-[80vw] w-[80vw]mx-auto ">
        <hr className="w-48 h-1 mx-auto my-4  border-0 rounded md:my-10 bg-gray-700" />
        <div className="grid grid-cols-3 ">
          <div className="flex justify-end">
            <img
              className="my-auto mr-10 w-auto h-20 object-cover"
              src="/uanl-logo.png"
              alt=""
            />
          </div>
          <div className="grid grid-rows-3">
            <p className="text-center">
              ivansantos@email.com | (81) 123 - 4567
            </p>
            <p className="text-center">
              Avenida Universidad s/n, Cd. Universitaria, Ciudad Universitaria,
              66455 San Nicolás de los Garza, Nuevo Leon
            </p>
            <p className="mb-10 my-3 text-center">
                Home | Research | People | Publications
            </p>
          </div>

          <div className="flex">
            <img
              className="ml-10 my-auto w-32 h-32 object-cover"
              src="/fcq.png"
              alt=""
            />
          </div>
        </div>

        <hr className="w-48 h-1 mx-auto  border-0 rounded md:mb-10 bg-gray-700" />
      </footer>
    </>
  );
}

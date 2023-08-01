import React from "react";
import { Link as Anchor } from "react-router-dom";

export default function Project() {
  return (
    <>
      <div>
        <h1 className="flex justify-center mt-10 text-4xl font-bold tracking-tight text-[#03CC90] xsm:text-5xl">
          My Projects
        </h1>
        <div className="flex justify-around items-center mt-20">
          <img
            src="https://i.postimg.cc/6pBP51zB/gamezone1.jpg"
            alt=""
            className=" h-60 rounded-xl"
          />
          \
          <div className="text-white w-2/4 text-center">
            <h4 className="text-2xl font-bold tracking-tight text-[#03CC90] xsm:text-5xl mb-4 text-center">
              {" "}
              Game Zone
            </h4>
            <p className="text-white max-w-6xl text-center pb-6">
              Game Zone es una pagina desarrollada para la venta y compra de
              video juegos online, una Web desarrollada en equipo, utilizando la
              metodología de trabajo AGILE, organizando y distribuyendo tareas
              en Trello. aplicando diferentes tecnologias para el buen
              funcionamiento de la App, tanto desde el lado de Front-end y
              Back-end
            </p>
            <a
              href="https://game-zone-front.vercel.app/"
              target="_blank"
              className="inline-block rounded-md border border-transparent bg-[#03CC90] px-6 py-2 text-center font-bold font text-black hover:bg-[#03cc90] hover:text-white pt">
              WEB
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react'

export default function Home() {
  return (
    <div name="home" className="">
      {/* container */}

      <div className="relative overflow-hidden bg-[#353849]">
        <div className="pb-80 pt-10 sm:pb-40 sm:pt-24 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
            
              <h1 className="text-4xl font-bold tracking-tight text-[#03CC90] sm:text-5xl">
                Hola soy Luis, Desarrollador Web Full Stack M.E.R.N.
              </h1>
              <p className="mt-8 text-xl text-[#FFFFFF]">
                Como Desarrollador Full-Stack en tecnologías de desarrollo
                front-end, como HTML, CSS, JavaScript, React y Redux, así como
                en tecnologías de desarrollo back-end, como Node.js, Express y
                MongoDB.
              </p>
            </div>
            <div>
              <div className="mt-12">
                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-[#03CC90] px-8 py-3 text-center font-bold font text-black hover:bg-[#232734] hover:text-white"
                >
                  ABOUT US
                </a>
              </div>
              <div className="flex justify-end space-x-6 lg:space-x-8">
                      <img
                        className="h-96 w-96 rounded-full ring-2 ring-[#03CC90]"
                        src="https://i.postimg.cc/7ZYd01Xp/Luis-Hernandez.png"
                        alt=""
                      />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react'

export default function About() {
  return (
    <>
      <h1 className="flex justify-center mt-10  text-4xl font-bold tracking-tight text-[#03CC90] xsm:text-5xl">
        About Me
      </h1>
      <div className="flex items-center justify-center mt-20 xsm:hidden xxsm:hidden space-x-6 lg:space-x-8">
          <img className="h-60 w-60 rounded-full ring-2 ring-[#03CC90]" src="https://i.postimg.cc/7ZYd01Xp/Luis-Hernandez.png" alt="" />
      </div>
      <div className='flex justify-center mt-10'>
      <h3 className="text-lg font-bold tracking-tight text-[#03CC90] xsm:text-5xl">
        Desarrollador Web Full Stack M.E.R.N.
      </h3>
      </div>
    </>
  )
}

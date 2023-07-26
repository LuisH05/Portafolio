import React from 'react'



export default function Home() {
  return (
    <div name="home" className="">
      {/* container */}

      <div className="flex justify-around pt-5 bg-[#353849]">
        <div className=" pt-10 xsm:pb-10 xsm:pt-20 md:pb-10 md:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
            
              <h1 className="text-4xl font-bold tracking-tight text-[#03CC90] xsm:text-5xl">
                Hola soy Luis, Desarrollador Web Full Stack M.E.R.N.
              </h1>
              <p className="mt-12 text-xl text-[#FFFFFF]">
                Como Desarrollador Full-Stack en tecnologías de desarrollo
                front-end, como HTML, CSS, JavaScript, React y Redux, así como
                en tecnologías de desarrollo back-end, como Node.js, Express y
                MongoDB.
              </p>
            </div>
            <div className='flex pt-20 pb-10 justify-around '>
              <a href='https://github.com/LuisH05' target='_blank' className='bg-[#232734] rounded-md hover:bg-[#03CC90]'>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAvxJREFUaEPtmW1OHDEMhu2TtJyEcpKWkxROApykcJLSk7h6RwkKib+SmV200o602j+TOI/t+GuYLvzhCz8/XQG+2oKHWUBEvhPRTyLCf/t7L5D4r783Zn49An4XQHPoX+XQM2cCzDMRvTBzhZxZv727DCAiv4noYVriuGADYebHlb2mAUTkBxH9WREWrFkCmQIQEbjK0wkO3275MGONNICI4OAAOMfzysx3GUEpABGBy8B1zvngXtxHAkOAM7mNdc7QnVwA58IihiNq3Ba3QtxfeWoofSt7aVHtnpkRbtUnAvhrxPe7moiaXNALr0mrCu5d8JN2yz6Q1z/vzHwzDeC5DjMP4OUAsAQEqompvmNlYRER46DmfTAtICKW9kkDWPGffo0jEwqB1QfFqACJi3uzJ/1bsI4FsES90BZAFDY/7sARmsceiQyv3gULwPJFyEonmVm4RLIcFKddxqhcOFz7FdSJRPWVwY00AK9kOJn2GwjPfQf5swCp9D7rOu37QZmeAvA04GbFPQdvLOCV68NF1ixgxn8iuniAsLjaa4UoB/VJVLOA50JfDZByIQ/ALaz2ar8ktKkoqFkgatZPlgcKgJdEhyioAURN+8lCaWLSMQQRqyzW6vLqIagIH70mY8WVErUQth2KyNVibmkE4lSh6CM8pW1LtTLeAujdqHZXfVdVJ2tLY0Knm9NY1RxkAUAjiEa11938vghElOhBAAgI9LZI9+aosMT5b2WP9KTDaqK8jqyvSrcQ6kBAa26YDdZ6V8fMPx4AtN9ru7VEa6EqPCw1kpe1hVlr6ktM1i7XlgeKNpEzqhukJs2Jmr+3hJt3VgZbu3uCoPdtAcLSJQQoluizc7ix59BJgJSiUgAGRJ2q/StfXm6zU+UEQDrbpwEMiF7RqXHLyvjEsugUQHOxtVygpnpNsAEAiyKKTSXFaYAGAh/0+m9jKxbYVZYsATT9K8IswihgUKukPkqU+Q/WLX8bq2fYBbBSdR695gpwtEZn97taYFZjR7//Hy5Ak0Bchgj3AAAAAElFTkSuQmCC"/>
              </a>
              <a href='https://www.linkedin.com/in/luisherdez/' target='_blank' className='bg-[#232734] rounded-md hover:bg-[#03CC90]'>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAapJREFUaEPtmettwzAMhI+bNJO0maTJJE0maTZpOkmyCYsr7MIVRD9SupQB6k+AwJb48cyHJMHGh2zcfiRAtIKpQLMKqOoLgHcAT8FG3gEcReRas8P8hFT1AwAhWhh3EdktBdAWLO9tEJGqs8cUSABPBT0VOInIWVUZ3K8ATp6GWnN5ATAbXIaLqOqhy1arcrgA1CbplLitaj0ADwAzlanq6gHvAUAnb/sTAsCqeGEQk6ar1ix4qw8vBXpDCfKvLYY3wOoeLxfwAmAKpfeHg/3SsGeq1YX+P77Lz4+//Tx89xkA07E5vAAmg9hItUyz57KGFPXkbawoRgMcxozvQVTVhAgFmBswY0WxGQAaKSJlHP0wWvuQcICiZ/pVT+bEQiiAUfCqrYnVHEYDWMG5L/e6rQLwcKCW5zcPMFlXvPfEkwsahcxSYHK+BCiK0KTHUgFjjx2dRjMGUoEumLmh+SwCu9yMHCvdJw/AagfFc+b7ns5LgbmdsftzCeDu0oUTPqJASxccVxHZ15jH7gcYdGyDo29pHrtiWqhw2ON5zRrm+m7hVCAV+KMHvgAukZtAIFYx0QAAAABJRU5ErkJggg=="/>
              </a>
              <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new' target='_blank' className='bg-[#232734] rounded-md hover:bg-[#03CC90]'>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAeVJREFUaEPtWIltwzAMJDdpJmkzSZtJmk7SZJJmk6aTsLhANmSbMmVL8hNIQIAAtqi744mixbTzwTvHT5XA2hmsGagZSFSgWihRwOTpz5kBEXkhom8ienMSXYjoysy3ZMkiArj134noTER39zsxM/53xiADbvJvYJ0zM39FYJj9ioh8OPH6MQD+2CehEYDyCBIayIKqxmzUbqKI/HhZ18JdmPnkP9AIQH1YaGxADZDIYinFsqG178x8sAhIpJIgAUWSLDViGRUGM3dE1zIQS6BZYLalIiwzIFGCABaZZClnGfjdsupiBBoSpqVE5NOVx0in9spmAQv1gaiWmrBRR4mVspBWs9sqlWKZfuClCLSWcgBwomYZSxLIAnjNDFQCmgK5LIS6P7mGR7QnZsxcBI5E9JpSz3tk0K6jJQl1we3ruQgc0NamHkoOFVrkm9HGlyGAqAk1vtN+rEbAI9F8QcVUn0FfvyqBBnGkpXBCw/OdsQkChqVGO9bNEAhYamCZzWbAB+Ys9adZZhcEYnazt39wiC17DkwBaL27qT1ggdWeVwKeF2NuJR6txBylQ3NyZsC6mQOGtQhE3cyhGlhtwdIEHhe8zIwuuDOe83o9p7dLx6oZKK2wFb9mwFKo9POagdIKW/H/AZZJL0BeaRwrAAAAAElFTkSuQmCC"/>
              </a>
            </div>
            <div>
              <div className="mt-12">
                <button
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-[#03CC90] px-8 py-3 text-center font-bold font text-black hover:bg-[#03cc90] hover:text-white"
                >
                  MORE ABOUT ME
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center xsm:hidden xxsm:hidden space-x-6 lg:space-x-8">
          <img className="h-96 w-96 rounded-full ring-2 ring-[#03CC90]" src="https://i.postimg.cc/7ZYd01Xp/Luis-Hernandez.png" alt="" />
        </div>
      </div>
      
    </div>
  );
}

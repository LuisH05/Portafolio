import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons';
// import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Tecnologias() {
  return (
    <>
      <h1 className="flex justify-center mt-10 text-4xl font-bold tracking-tight text-[#03CC90] xsm:text-5xl">
        Tecnologias
      </h1>
        <h3 className='flex justify-center text-lg font-bold tracking-tight text-[#FFFFFF] xsm:text-5xl mt-20'>
          Front-End
        </h3>
        <div className='flex justify-around mt-16'>
        <FontAwesomeIcon icon={faHtml5} beat size='3x' style={{ color: "#ffa200" }} title="HTML5" />
        <FontAwesomeIcon icon={faCss3Alt} beat size="3x" style={{color: "#0d65fd"}} title="CSS3" />
        <FontAwesomeIcon icon={faJs} beat size= '3x' style={{color: "#ffea00"}} title="JavaScript" />
        <FontAwesomeIcon icon={faReact} beat size='3x' style={{color: "#00e1ff"}} title="React" />
        <FontAwesomeIcon icon={faBootstrap} beat size='3x' style={{color: "#4702e8"}} title="Bootstrap" />
      </div>
    </>
  );
}

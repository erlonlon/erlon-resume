import React from 'react'
import Head from 'next/head'

import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FiLink, FiInstagram } from 'react-icons/fi'

const Hero = () => {

  return (
    <>

      <div className="md:grid md:grid-flow-col md:grid-flow-col leading-none">
        <div className='md:m-8 md:pl-32 md:pt-24 pt-16 pl-6 '>
          <img className='rounded-full h-80 w-80 box-border border-8 border-gray-300 flex items-center justify-center' src='images/lonlon.png' />
        </div>
        <div className=' md:pt-24 md:m-12 md:pl-44 pt-14 m-2 '>
          <h1 className='font-bold md:text-5xl text-4x1 py-2 md:text-left text-center ' >Erlon Gomes</h1>
          <h1 className='md:text-6xl uppercase py-4 md:text-left text-center '>FullStack Developer</h1>

          <div className='relative border-2 rounded md:px-16 md:pb-4 md:pt-10 mt-6 px-12 pt-8 pb-2 border-green-400'>
            <h3 className='text-white bg-green-400 absolute py-2 px-6 top-0 -mt-7 md:text-3xl text-2xl font-bold uppercase '>Contatos</h3>
            <p>
              <a href='https://www.linkedin.com/in/erloncarlos/'><FaLinkedin className='py-2 md:text-6xl text-4xl inline-block mr-6' /></a>
              <a href='https://github.com/erlonlon'><FaGithub className='py-2 md:text-6xl text-4xl inline-block mr-6' /></a>
              <a href='https://www.instagram.com/infoautomacao/'> <FiInstagram className='py-2 md:text-6xl text-4xl inline-block mr-6' /></a>
              <FiLink className='py-2 md:text-6xl text-4xl inline-block mr-6' />
              <br></br>
              <span className='inline-block pt-2 font-bold md:text-2xl '>Contato on-line: erlon@dev</span>
            </p>

          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
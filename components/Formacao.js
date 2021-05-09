import React from 'react'
const Formacao = () => {

  return (
    <>
      <div className="grid grid-flow-col md:grid-flow-col leading-none">
        <h3 className='md:text-4xl text-3x1 uppercase text-center py-12 text-green-400'>
          Formação Acadêmica
          </h3>
      </div>


      <div className="md:py-12 py-6 grid md:grid-cols-2 md:gap-4 leading-none bg-opacity-30 bg-gray-200 rounded-lg shadow-lg">


        <div className='border-dotted border-l border-light-blue-500 px-16 '>
          <span className='text-lg normal-case font-bold mb-1'>Unisul</span>

          <p className='text-2x1 uppercase mb-1'>
            Graduação – Web Designer e Programação - completo-Unisul (2007) – conclusão 06/2010
            </p>

        </div>
        <div className='border-dotted border-l border-light-blue-500 px-16 '>
          <span className='text-lg normal-case font-bold mb-1'>UECE</span>
          <p className='text-2x1 uppercase mb-1'>Pós-Graduação - Estudante de Especialização em Engenharia de Software com Ênfase emPadrões de Software. – conclusão (2012).</p>


        </div>
        <div className='border-dotted border-l border-light-blue-500 px-16 mb-1 '>
          <span className='text-2x1 text-lg normal-case font-bold mb-1'>Dev Pleno</span>
          <p className='text-2x1 uppercase font-bold mb-1'>Fullstack Master</p>
          <p className='mb-1'>Curso Programação - Primeiros passos</p>
          <p className='mb-1'>Curso Webflow Basics</p>
          <p className='mb-1'> Curso DevReactJS Express</p>
          <p className='mb-1'>Curso Completo Socket.IO</p>
          <p className='mb-1'>Curso CI/CD</p>
          <p className='mb-1'>Curso AWS Express</p>
          <p className='mb-1'>ReactJs, NextJs, NestJs, MongoDB, TypeScript</p>
        </div>
        <div className='border-dotted border-l border-light-blue-500 px-16 '>
          <span className='text-lg normal-case font-bold mb-1'>Celke</span>
          <p className='text-2x1 uppercase mb-1'>Node.js, React, React Native</p>


        </div>

      </div>
    </>
  )
}

export default Formacao
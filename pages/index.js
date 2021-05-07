import React from 'react'
import Head from 'next/head'
import getUser from '../utils/getUser'
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'
import { FiLink, FiInstagram, FiStar } from 'react-icons/fi'
import { RiGitRepositoryCommitsLine } from 'react-icons/ri'
import { TiFlowMerge } from 'react-icons/ti'
import { VscGistSecret } from 'react-icons/vsc'
import PageHead from '../components/PageHead'

const Index = ({ repos, user }) => {

  return (
    <>
      <PageHead />



      <div className="bg-body md:container md:mx-auto  ">

        <div className="grid grid-flow-col md:grid-flow-col leading-none">
          <div className='m-8 pl-32 pt-24 '>
            <img className='rounded-full h-80 w-80 box-border border-8 border-gray-300 flex items-center justify-center' src='images/lonlon.png' />
          </div>
          <div className=' pt-24 m-12 pl-44'>
            <h1 className='font-bold text-5xl py-2' >Erlon Gomes</h1>
            <h1 className='text-6xl uppercase py-4 '>FullStack Developer</h1>

            <div className='relative border-2 rounded px-16 pb-4 pt-10 mt-6 border-green-400'>
              <h3 className='text-white bg-green-400 absolute py-2 px-6 top-0 -mt-7 text-3xl font-bold uppercase '>Contatos</h3>
              <p>
                <a href='https://www.linkedin.com/in/erloncarlos/'><FaLinkedin className='py-2 text-6xl inline-block mr-6' /></a>
                <a href='https://github.com/erlonlon'><FaGithub className='py-2 text-6xl inline-block mr-6' /></a>
                <a href='https://www.instagram.com/infoautomacao/'> <FiInstagram className='py-2 text-6xl inline-block mr-6' /></a>
                <FiLink className='py-2 text-6xl inline-block mr-6' />
                <br></br>
                <span className='inline-block pt-2 font-bold text-2xl '>Contato on-line: erlon@dev</span>
              </p>



            </div>
          </div>
        </div>


        <div className="grid grid-flow-col md:grid-flow-col leading-none pt-24">
          <div className='bg-opacity-30 bg-gray-200 rounded-lg shadow-lg py-12 px-16 '>
            <h3 className='text-4xl uppercase text-center py-12 text-green-400'>Competências</h3>
            <p className='text-3xl'>Fullstack Developer</p>
            <p className='text-3xl'>Criação de Sites, Blogs</p>
            <p className='text-3xl'>Criação de Sistema Web</p>
            <p className='text-3xl'>Criação de Designer</p>

          </div>
        </div>
        <div className="grid grid-flow-col md:grid-flow-col leading-none">
          <h3 className='text-4xl uppercase text-center py-12 text-green-400'>
            Formação Acadêmica
          </h3>
        </div>

        <div className="py-12 grid grid-cols-2 gap-4 leading-none bg-opacity-30 bg-gray-200 rounded-lg shadow-lg">


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
          <div className='border-dotted border-l border-light-blue-500 px-16 '>
            <span className='text-lg normal-case font-bold mb-1'>Dev Pleno</span>
            <p className='text-2x1 uppercase mb-1'>Fullstack Master</p>
            <p>Curso Programação - Primeiros passos</p>
            <p>Curso Webflow Basics</p>
            <p> Curso DevReactJS Express</p>
            <p>Curso Completo Socket.IO</p>
            <p>Curso CI/CD</p>
            <p>Curso AWS Express</p>
            <p>ReactJs, NextJs, NestJs, MongoDB, TypeScript</p>
          </div>
          <div className='border-dotted border-l border-light-blue-500 px-16 '>
            <span className='text-lg normal-case font-bold mb-1'>Celke</span>
            <p className='text-2x1 uppercase mb-1'>Node.js, React, React Native</p>


          </div>

        </div>

        <h3 className='text-4xl uppercase text-center py-8 text-green-400'>
          Contribuiçaõ Técnica
          </h3>
        <div>
          <p className='py-2 text-2xl text-center '>
            Git stats: <FiStar className='text-2xl inline-block mr-4' /> /
            <RiGitRepositoryCommitsLine className='text-2xl inline-block mr-4' />
            {user.public_repos} / <VscGistSecret className='text-2xl inline-block mr-4' /> {user.public_gists} / <TiFlowMerge className='text-2xl inline-block mr-4' /> {user.followers}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">

          {repos.map(repo => {
            return (
              <div key={repo.id} className='rounded bg-opacity-30 bg-gray-200 mx-8 my-4 p-4 hover:shadow-md'>
                <h3 className='font-bold'><a href={'https://github.com/' + repo.full_name} >{repo.full_name}</a></h3>
                <p>{repo.language} / Stars: <FiStar className='text-1xl inline-block mr-4' /> {repo.stargazers_count}</p>
              </div>
            )
          })}

        </div>




      </div>
      <div className='bg-black p-8'>
        <p className='text-white text-center'>
          Todos direitos reservados - <a href='https://erlon.dev'>Erlon Gomes</a>
        </p>

      </div>
    </>

  )
}
export async function getServerSideProps(context) {
  const { repos, user } = await getUser('erlonlon')
  return {
    props: {
      repos,
      user
    }
  }
}
export default Index
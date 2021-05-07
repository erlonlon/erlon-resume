import React from 'react'
import getUser from '../utils/getUser'

import { FiStar } from 'react-icons/fi'
import { RiGitRepositoryCommitsLine } from 'react-icons/ri'
import { TiFlowMerge } from 'react-icons/ti'
import { VscGistSecret } from 'react-icons/vsc'
import PageHead from '../components/PageHead'
import Hero from '../components/Hero'

const Index = ({ repos, user }) => {

  return (
    <>
      <PageHead />

      <div className="bg-body md:container md:mx-auto  ">
        <Hero />

        <div className="grid grid-flow-col md:grid-flow-col leading-none md:pt-24">
          <div className='bg-opacity-30 bg-gray-200 rounded-lg shadow-lg md:py-12 py-8 px-16 '>
            <h3 className='md:text-4xl text-3xl uppercase text-center md:py-12 text-green-400'>Competências</h3>
            <p className='md:text-3xl py-2'>Fullstack Developer</p>
            <p className='md:text-3xl py-2'>Criação de Sites, Blogs</p>
            <p className='md:text-3xl py-2'>Criação de Sistema Web</p>
            <p className='md:text-3xl py-2 '>Criação de Designer</p>

          </div>
        </div>
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

        <h3 className='md:text-4xl uppercase text-center py-8 text-green-400'>
          Contribuiçaõ Técnica
          </h3>
        <div className=''>
          <p className='md:py-2 md:text-2xl text-center '>
            Git stats: <FiStar className='md:text-2xl inline-block mr-4' /> /
            <RiGitRepositoryCommitsLine className='md:text-2xl inline-block mr-4' />
            {user.public_repos} / <VscGistSecret className='md:text-2xl inline-block mr-4' /> {user.public_gists} /
            <TiFlowMerge className='md:text-2xl inline-block mr-4' /> {user.followers}
          </p>
        </div>

        <div className="md:grid md:grid-cols-3 gap-4">

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
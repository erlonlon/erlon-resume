import React from 'react'
import getUser from '../utils/getUser'
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'
import { FiLink } from 'react-icons/fi'

const Index = ({ repos, user }) => {

  return (
    <>

      <div className="bg-body md:container md:mx-auto  ">

        <div className="grid grid-flow-col md:grid-flow-col leading-none">
          <div className='m-8 pl-32 pt-24 '>
            <img className='rounded-full h-80 w-80 box-border border-8 border-gray-300 flex items-center justify-center' src='images/lonlon.png' />
          </div>
          <div className=' pt-24 m-12 pl-44'>
            <h1 className='font-bold text-7xl uppercase py-2' >Erlon Carlos</h1>
            <h1 className='text-4xl uppercase py-4 '>FullStack Developer</h1>

            <div className='relative border-2 rounded px-16 pb-4 pt-10 mt-6 border-green-400'>
              <h3 className='text-white bg-green-400 absolute py-2 px-6 top-0 -mt-7 text-3xl font-bold uppercase '>Contatos</h3>
              <p>
                <FaLinkedin className='py-2 text-6xl inline-block mr-6' />
                <FaGithub className='py-2 text-6xl inline-block mr-6' />
                <FaYoutube className='py-2 text-6xl inline-block mr-6' />
                <FiLink className='py-2 text-6xl inline-block mr-6' />
                <br></br>
                <span className='inline-block pt-2 font-bold text-2xl '>erlon@dev</span>
              </p>

              <p className='py-2 font-bold text-2xl uppercase'>Git stats: public repos: {user.public_repos} / public_gists: {user.public_gists} / followers: {user.followers}</p>

            </div>
          </div>
        </div>


        <div className="grid grid-flow-col md:grid-flow-col leading-none pt-24">
          <div className='bg-opacity-30 bg-gray-200 rounded-lg shadow-lg py-12 px-16 '>
            <h3 className='text-4xl uppercase text-center py-12 text-green-400'>Competências</h3>
            <p className='text-3xl'>Fullstack Developer</p>

          </div>
        </div>
        <div className="grid grid-flow-col md:grid-flow-col leading-none">
          <h3 className='text-4xl uppercase text-center py-12 text-green-400'>
            Meus Estudos
            </h3>
        </div>

        <div className="py-12 grid grid-flow-col md:grid-flow-col leading-none bg-opacity-30 bg-gray-200 rounded-lg shadow-lg">

          {[1, 2].map(i => (
            <div className='border-dotted border-l-4 border-light-blue-500 px-16 '>
              <h4 className='uppercase font-bold text-lg mb-1'>Mater</h4>
              <p className='text-2x1 uppercase mb-1'>Computar</p>
              <span className='text-lg normal-case font-bold mb-1'>Unisul</span>

            </div>
          ))}

        </div>

        <div className="grid grid-flow-col md:grid-flow-col">
          <div className=''>
            {repos.map(repo => {
              return (
                <div key={repo.id} className='rounded bg-opacity-30 bg-gray-200 mx-8 my-4 p-4 hover:shadow-md'>
                  <h3 className='font-bold'>{repo.full_name}</h3>
                  <p>{repo.language} / Stars: {repo.stargazers_count}</p>
                </div>
              )
            })}
          </div>
        </div>




      </div>
      <div className='bg-black p-8'>
        <p className='text-white text-center'>Todos direitos reservados - Erlon Gomes</p>

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
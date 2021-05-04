import React from 'react'
import getUser from '../utils/getUser'

const Index = ({ repos, user }) => {

  return (
    <>

      <div className="bg-body md:container md:mx-auto">

        <div className="grid grid-flow-col md:grid-flow-col">
          <div className='m-8 pl-44'>
            <img className='rounded-full h-80 w-80 box-border border-8 border-gray-700 flex items-center justify-center' src='images/lonlon.png' />
          </div>
          <div className=' pt-20 m-12'>
            <h1 className='text-7xl uppercase' >Erlon Carlos</h1>
            <h1 className='font-bold text-6x1 uppercase'>Meus Repositórios- Erlon</h1>
            <h3>Contatos</h3>
            <ul>
              <li>linkedin</li>
            </ul>
            <p>Git stats: public repos: {user.public_repos} / public_gists: {user.public_gists} / followers: {user.followers}</p>
          </div>
        </div>

        <div class="grid grid-flow-col md:grid-flow-col">

          <div className='m-8 uppercase font-bold '>
            <h1 className='text-5xl'>Stake</h1>

            <h1 className='text-left text-4xl  py-4 w-11/12'>
              Criação de Sistemas
            </h1>
            <h1 className='text-left text-4xl  py-4 w-11/12'>
              Criação de Design
            </h1>
            <h1 className='text-left text-4xl  py-4 w-11/12'>
              Desenvolvedor Fullstack
            </h1>
            <h1 className='text-left text-4xl  py-4 w-11/12'>
              Criação de sites
            </h1>
            <h1 className='text-left text-4xl  py-4 w-11/12'>
              Criação de blogs
            </h1>

          </div>



        </div>
        <div class="grid grid-flow-col md:grid-flow-col">
          <div className=''>
            {repos.map(repo => {
              return (
                <div key={repo.id} className='rounded bg-gray-200 mx-8 my-4 p-4 hover:shadow-md'>
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
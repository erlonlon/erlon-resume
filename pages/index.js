import React from 'react'
import getUser from '../utils/getUser'

const Index = ({ repos, user }) => {

  return (

    <div className="container mx-auto">
      <div class="grid grid-cols-2 pt-16 leading-none" >
        <div className='m-8 pl-44'>
          <img className='rounded-full h-96 w-96 flex items-center justify-center' src='images/lonlon.png' />
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
      <div className='grid grid-cols-2 pt-16 leading-none'>

        <div className='m-16 pl-40  uppercase font-bold '>
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


        <div className='px-16'>
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
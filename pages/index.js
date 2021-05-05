import React from 'react'
import getUser from '../utils/getUser'

const Index = ({ repos, user }) => {

  return (
    <>

      <div className="bg-body md:container md:mx-auto  ">

        <div className="grid grid-flow-col md:grid-flow-col leading-none">
          <div className='m-8 pl-32 pt-24 '>
            <img className='rounded-full h-80 w-80 box-border border-8 border-gray-300 flex items-center justify-center' src='images/lonlon.png' />
          </div>
          <div className=' pt-28 m-12'>
            <h1 className='font-bold text-7xl uppercase py-2' >Erlon Carlos</h1>
            <h1 className='text-4xl uppercase py-2'>FullStack Developer</h1>
            <h3>Contatos</h3>
            <ul>
              <li>linkedin</li>
            </ul>
            <p>Git stats: public repos: {user.public_repos} / public_gists: {user.public_gists} / followers: {user.followers}</p>
          </div>
        </div>


        <div className="grid grid-flow-col md:grid-flow-col leading-none">
          <div className='bg-white rounded-lg shadow-lg py-12 px-16 '>
            <h3 className='text-4xl uppercase text-center'>Competências</h3>
            <p className='text-3xl'>Fullstack Developer</p>

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
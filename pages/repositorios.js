import React from 'react'

const Index = ({ repos, user }) => {
  return (
    <>
      <div className="md:container md:mx-auto px-4">
        <h1 className='text-5xl' >Erlon Carlos</h1>

        <h2 className='font-bold text-5x1'>Meus Repositórios</h2>
        <p>Git stats: public repos: {user.public_repos} / public_gists: {user.public_gists} / followers: {user.followers}</p>
        {repos.map(repo => {
          return (
            <div key={repo.id} className='rounded bg-gray-200 mx-8 my-4 p-4 hover:shadow-md'>
              <h3 className='font-bold'>{repo.full_name}</h3>
              <p>{repo.language} / Stars: {repo.stargazers_count}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
export async function getServerSideProps(context) {

  const request = await fetch(process.env.API_URL + '/api/getUser')
  const { repos, user } = await request.json()

  return {
    props: {
      repos,
      user
    }
  }
}
export default Index
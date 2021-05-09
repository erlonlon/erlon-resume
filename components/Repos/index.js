import React from 'react'
import { FiStar } from 'react-icons/fi'
import { RiGitRepositoryCommitsLine } from 'react-icons/ri'
import { TiFlowMerge } from 'react-icons/ti'
import { VscGistSecret } from 'react-icons/vsc'

const Repos = ({ user, repos }) => {

  return (

    <>
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
    </>
  )
}

export default Repos
import React from 'react'
import PageHead from '../components/PageHead'
import Hero from '../components/Hero'
import Competencias from '../components/Competencias'
import Formacao from '../components/Formacao'
import Footer from '../components/Footer'
import Repos from '../components/Repos'

const Index = ({ repos, user }) => {

  return (
    <>
      <PageHead />
      <div className="bg-body md:container md:mx-auto  ">
        <Hero />
        <Competencias />
        <Formacao />
        <Repos user={user} repos={repos} />
      </div>
      <Footer />
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
import React from 'react'
import getUser from '../utils/getUser'
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
  const { repos, user } = await getUser('erlonlon')
  return {
    props: {
      repos,
      user
    }
  }
}
export default Index
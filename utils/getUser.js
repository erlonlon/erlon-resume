const getUser = async (userName) => {

  const resUser = await fetch('https://api.github.com/users/' + userName)
  const user = await resUser.json()

  const resRepos = await fetch(`https://api.github.com/users/${userName}/repos?sort=updated`)
  const originalRepos = await resRepos.json()

  const dontShowRepos = [
    'erlonlon/pousadaparaiso',
    'erlonlon/blog',
    'erlonlon/erro',
    'erlonlon/t',
    'erlonlon/teste01',
    'erlonlon/jocelio',
    'erlonlon/cv',
    'erlonlon/umdigito',
    'erlonlon/eboxbrasil',
    'erlonlon/xote7',
    'erlonlon/estudo_android',
    'erlonlon/git'
  ]
  const dontShowFilter = repo => dontShowRepos.indexOf(repo.full_name) === -1
  const extractRepos = repo => ({
    id: repo.id,
    full_name: repo.full_name,
    language: repo.language,
    stargazers_count: repo.stargazers_count
  })
  const repos = originalRepos.filter(dontShowFilter).map(extractRepos)

  return {
    repos, user
  }


}
export default getUser
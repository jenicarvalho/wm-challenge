import React from 'react'
import Logo from '../../components/Logo'
import Navigation from '../../components/Navigation'
import SearchBox from '../../components/SearchBox'

function Home() {
  return (
      <main className="page-home">
        <Logo />
        <Navigation />
        <SearchBox />
      </main>
  )
}

export default Home;
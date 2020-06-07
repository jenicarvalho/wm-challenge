import React from 'react'
import Logo from '../../components/Logo'
import Navigation from '../../components/Navigation'
import SearchBox from '../../components/SearchBox'
import Vehicles from '../../components/Vehicles'

function Home() {

  return (
      <main className="page-home">
        <Logo />
        <Navigation />
        <SearchBox />
        <Vehicles />

        <p className="author">Desenvolvido por <a href="https://jeniffer.com.br">Jeniffer Carvalho</a></p>
      </main>
  )
}

export default Home;
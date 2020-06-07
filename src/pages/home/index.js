import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import MakesTypes from '../../store/ducks/makes/_types'
import Logo from '../../components/Logo'
import Navigation from '../../components/Navigation'
import SearchBox from '../../components/SearchBox'

function Home() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: "GET_MAKES_REQUEST"
    })
  }, [])

  return (
      <main className="page-home">
        <Logo />
        <Navigation />
        <SearchBox />
      </main>
  )
}

export default Home;
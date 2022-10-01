import React from 'react'
import { Header , Sidebar } from '../../components/index'
import './home.css'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className='homeContainer' >
        <Sidebar/>
      </div>
    </div>
  )
}

export default Home
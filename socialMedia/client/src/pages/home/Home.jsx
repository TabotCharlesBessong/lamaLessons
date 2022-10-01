import React from 'react'
import { Header , Sidebar , Feed , Rightbar } from '../../components/index'
import './home.css'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className='homeContainer' >
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </div>
    </div>
  )
}

export default Home
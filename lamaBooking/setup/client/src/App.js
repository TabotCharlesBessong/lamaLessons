import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Home } from './pages'
import {Header , Navbar, Footer } from './components'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
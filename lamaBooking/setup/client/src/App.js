import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Home } from './pages'
import {Header , Navbar } from './components'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
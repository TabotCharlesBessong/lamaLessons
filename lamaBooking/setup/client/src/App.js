import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Home } from './pages'
import {Header } from './components'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
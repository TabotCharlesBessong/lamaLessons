import React from 'react'
import { BrowserRouter , Switch , Route } from 'react-router-dom'
import { Home } from './pages'
import {Header } from './components'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
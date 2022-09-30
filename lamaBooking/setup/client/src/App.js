import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Home , Hotel } from './pages'
import {Header , Navbar, Footer } from './components'

const App = () => {
  return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/hotel" element={<Hotel />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App
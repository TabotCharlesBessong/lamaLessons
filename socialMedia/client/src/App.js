import React from 'react' 
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import { Home, Login } from './pages'
const App = () => {
  return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" component={Home} />
					<Route path="/login" component={Login} />
					{/* <Route path="/register" component={Register} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App
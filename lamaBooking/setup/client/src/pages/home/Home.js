
import React from 'react'
import { Featured, PropertyList } from '../../components'
import './home.css'

const Home = () => {
  return (
		<div>
			<div className="homeContainer">
				<Featured />
				<h1 className="homeTitle"> Browse by property type </h1>
				<PropertyList/>
			</div>
		</div>
	);
}

export default Home 

import React from 'react'
import { Featured, PropertyList, FeaturedProperties , MailList } from "../../components";
import './home.css'

const Home = () => {
  return (
		<div>
			<div className="homeContainer">
				<Featured />
				<h1 className="homeTitle"> Browse by property type </h1>
				<PropertyList />
				<h1 className="homeTitle"> homes guest love</h1>
				<FeaturedProperties/>
				<MailList/>
			</div>
		</div>
	);
}

export default Home 
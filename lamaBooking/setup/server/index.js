
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const app = express() 
const port = 5000 || process.env.PORT
dotenv.config()

const connect = async () => {
  try {
		await mongoose.connect(process.env.MONGO_URL)
    console.log('Connected to the DB server')
	} catch (error) {
		throw error;
	}
}

mongoose.connection.on('disconnected',()=> {
  console.log('Disconnected from the DB server')
})

mongoose.connection.on("connected", () => {
	console.log("Reconnected from the DB server");
});

app.listen(port,()=>{
  console.log('Hello world')
})
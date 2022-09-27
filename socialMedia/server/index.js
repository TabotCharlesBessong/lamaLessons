const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require("morgan");
const userRoute = require('./routes/users')
const authRoute = require("./routes/auth");

const app = express()
dotenv.config()

const port = 5000 || process.env.PORT

mongoose
	.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() =>
		app.listen(port, () =>
			console.log(`The DB is connected on port ${port}... `)
		)
	)
	.catch((err) => {
		console.log(err.message);
	});

//  middlewares 
app.use(express.json())
app.use(helmet())
app.use(morgan('common')) 

app.get('/',(req,res)=> {
  res.send('<h2>Welcome to homepage</h2>')
})

app.use('/api/users',userRoute)
app.use("/api/auth", authRoute);

app.listen(port,()=>{
  console.log(`Our server is running on port ${port}`);  
})
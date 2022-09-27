const express = require('express')

const app = express()

const port = 5000 || process.env.PORT

app.listen(port,()=>{
  console.log(`Our server is running on port ${port}`);  
})
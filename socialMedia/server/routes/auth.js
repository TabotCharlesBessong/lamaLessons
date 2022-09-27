
const router = require('express').Router()
const User = require('../models/users')

// Register users 

router.get("/register", async (req, res) => {
	// res.send("<h2>Welcome to auth page</h2>");
  const user = await new User({
    username:"Charles",
    email:"cj@jmail.com",
    password:"1234567890"
  })

  await user.save()
  res.send('ok')
});

module.exports = router;
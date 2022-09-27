
const router = require('express').Router()

router.get("/", (req, res) => {
	res.send("<h2>Welcome to users page</h2>");
});

module.exports = router
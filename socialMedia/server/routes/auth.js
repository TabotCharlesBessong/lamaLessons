
const router = require('express').Router()

router.get("/", (req, res) => {
	res.send("<h2>Welcome to auth page</h2>");
});

module.exports = router;
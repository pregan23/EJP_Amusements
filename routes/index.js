const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/rides', controllers.createRide)

module.exports = router

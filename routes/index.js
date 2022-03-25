const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/rides', controllers.createRide)

router.get('/rides', controllers.getAllRides)

router.delete('/rides/:id', controllers.deleteRide)

router.put('/rides/:id', controllers.updateRide)

module.exports = router

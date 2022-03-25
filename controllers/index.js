const { Ride } = require('../models')

const createRide = async (req, res) => {
  try {
    const ride = await new Ride(req.body)
    await ride.save()
    return res.status(201).json({
      ride
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllRides = async (req, res) => {
  try {
    const rides = await Ride.find()
    return res.status(200).json({ rides })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteRide = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Ride.findByIdAndDelete(id)
  if (deleted) {
    return res.status(200).send('Ride Deleted')
  }
throw new Error('Ride not found')
} catch (eror) {
  return res.status(500).send(error.messgae)
}
}

module.exports = {
  createRide,
  getAllRides,
  deleteRide

}

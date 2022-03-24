const db = require('../db');
const { Ride } = require ('../models/')

const createRide = async (req, res) => {
  try {
      const ride = await new Ride(req.body)
      await ride.save()
      return res.status(201).json({
          ride,
      });
  } catch (error) {
      return res.status(500).json({ error: error.message })
  }
}

const getAllRides = async (req, res) => {
  try {
    const rides = await Rides.find()
    return res.status(201).json({rides})
  } catch (error) {
      return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createRide,
  getAllRides
}
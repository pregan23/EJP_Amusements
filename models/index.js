const { model } = require('mongoose')
const ParkSchema = require('./Park')
const RideSchema = require('./Ride')

const Park = model('Park', ParkSchema)
const Ride = model('Ride', RideSchema)

module.exports = {
  Park,
  Ride
}
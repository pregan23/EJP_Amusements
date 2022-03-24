import React from 'react'
import RideCard from './components/RideCard'

const Rides = ({ rides }) => {
  return rides.map((ride) => <RideCard key={ride._id} {...ride} />)
}

export default Rides

import React from 'react'
import RideCard from './RideCard'

const Rides = ({ rides, deleteRide }) => {
  return (
    <div>
      <h1>Rides</h1>
      <div className="rides-wrapper">
        {rides.map((ride) => (
          <RideCard key={ride._id} {...ride} deleteRide={deleteRide} />
        ))}
      </div>
    </div>
  )
}

export default Rides

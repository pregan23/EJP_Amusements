import React from 'react'
import RideCard from './RideCard'

const Rides = ({ rides }) => {
  return (
    <div>
      <h1>Rides</h1>
      <div className="rides-wrapper">
        {rides.map((ride) => (
          <RideCard key={ride._id} {...ride} />
        ))}
      </div>
    </div>
  )
}

export default Rides

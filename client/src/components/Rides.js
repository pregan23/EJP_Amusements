import React from 'react'
import RideCard from './components/RideCard'

const Rides = ({ rides }) => {
  return (
    <div>
      <h3>Rides</h3>
      <div className="rides-wrapper">
        {rides.map((ride) => (
          <RideCard key={ride._id} {...ride} />
        ))}
      </div>
    </div>
  )
}

export default Rides
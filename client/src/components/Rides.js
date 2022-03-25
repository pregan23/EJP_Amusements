import React from 'react'
import RideCard from './RideCard'

const Rides = ({
  rides,
  deleteRide,
  handleWaitTimeChange,
  updateWait,
  waitTime,
  fetchWait
}) => {
  return (
    <div>
      <h1>Rides</h1>
      <div className="rides-wrapper">
        {rides.map((ride) => (
          <RideCard
            key={ride._id}
            {...ride}
            deleteRide={deleteRide}
            updateWait={updateWait}
            handleWaitTimeChange={handleWaitTimeChange}
            waitTime={waitTime}
            fetchWait={fetchWait}
          />
        ))}
      </div>
    </div>
  )
}

export default Rides

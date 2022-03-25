import React from 'react'

const RideCard = ({
  _id,
  name,
  description,
  minHeight,
  image,
  deleteRide,
  handleWaitTimeChange,
  updateWait,
  waitTime,
  fetchWait
}) => {
  console.log('WAIT TIME:', waitTime)
  return (
    <div className="ride-card part">
      <h2 className="part">{name}</h2>
      <p className="part">{description}</p>
      <p className="part">
        <b>Height Requirement</b>: {minHeight}
      </p>
      <p className="part">
        <b>Wait Time</b>: {waitTime}
      </p>
      <input type="text" onChange={handleWaitTimeChange} value={waitTime} />
      <button
        className="update-wait"
        onClick={() => {
          updateWait(_id)
          fetchWait(_id)
        }}
      >
        Update Wait Time
      </button>
      <img src={image} alt={name} />
      <button className="delete-button" onClick={() => deleteRide(_id)}>
        Delete Ride
      </button>
    </div>
  )
}

export default RideCard

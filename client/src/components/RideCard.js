import React from 'react'

const RideCard = ({ _id, name, description, minHeight, image, deleteRide }) => {
  return (
    <div className="ride-card part">
      <h2 className="card-title part">{name}</h2>
      <p className="description part">{description}</p>
      <p className="height part">
        <b>Height Requirement</b>: {minHeight}
      </p>
      <img src={image} alt={name} />
      <button onClick={() => deleteRide(_id)}>Delete Ride</button>
    </div>
  )
}

export default RideCard

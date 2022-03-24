import React from 'react'

const RideCard = ({ name, description, minHeight, image }) => {
  return (
    <div className="ride-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <b>Height Requirement</b>: {minHeight}
      </p>
      <img src={image} alt={name} />
    </div>
  )
}

export default RideCard

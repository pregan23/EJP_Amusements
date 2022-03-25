import React from 'react'

const RideCard = ({ name, description, minHeight, image }) => {
  return (
    <div className="ride-card part">
      <h2 className = 'card-title part'>{name}</h2>
      <p className="description part">{description}</p>
      <p className="height part">
        <b>Height Requirement</b>: {minHeight}
      </p>
      <img src={image} alt={name} />
    </div>
  )
}

export default RideCard

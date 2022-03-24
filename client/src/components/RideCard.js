import React from 'react'

const RideCard = ({name, description, minHeight, image}) => {
  return (
    <div className="ride-card">
    <h4>{name}</h4>
    <p>{description}</p>
    <p><b>Height Reqiurement:</b> {minHeight}</p>
    <img src={image} alt={name} />
    </div>
  )
}

export default RideCard
import React from 'react'

const CreateRideForm = (props) => {
  return (
    <div className = "form-wrapper">
      <h2>Create Amusement Park Ride</h2>
      <br/>
      <form onSubmit={props.createRide}>
        <div>
          <label><b>Name:</b></label>
          <input
            type="text"
            value={props.name}
            placeholder="Enter ride name..."
            onChange={props.handleNameChange}
          />
        </div>
        <div>
          <label><b>Description:</b></label>
          <input
            type="text"
            value={props.description}
            placeholder="Enter description..."
            onChange={props.handleDescriptionChange}
          />
        </div>
        <div>
          <label><b>Min Height:</b></label>
          <input
            type="text"
            value={props.minHeight}
            placeholder="Enter min height..."
            onChange={props.handleMinHeightChange}
          />
        </div>
        <div>
          <label><b>Image:</b></label>
          <input
            type="text"
            value={props.imagePath}
            placeholder="Enter ride image path..."
            onChange={props.handleImagePathChange}
          />
        </div>
      <div className="button-wrapper">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
  )
}

export default CreateRideForm

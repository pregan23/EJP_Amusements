import React from 'react'

const CreateRideForm = (props) => {
  return (
    <form onSubmit={props.createRide}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={props.name}
          placeholder="Enter ride name..."
          onChange={props.handleNameChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={props.description}
          placeholder="Enter description..."
          onChange={props.handleDescriptionChange}
        />
      </div>
      <div>
        <label>Min Height:</label>
        <input
          type="text"
          value={props.minHeight}
          placeholder="Enter min height..."
          onChange={props.handleMinHeightChange}
        />
      </div>
      <div>
        <label>Image:</label>
        <input
          type="text"
          value={props.imagePath}
          placeholder="Enter ride image path..."
          onChange={props.handleImagePathChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default CreateRideForm

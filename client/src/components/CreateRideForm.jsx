import React from 'react'

const CreateRideForm = (props) => {

  return (
    <form onSubmit={props.createRide}>
      <div>
      <label>Name:</label>
      <input
        type="text"
        value={props.name}
        placeholder="Enter Ride Name"
        onChange={props.handleNameChange}
      />
      </div>
      <div>
      <label>Description:</label>
      <input
        type="text"
        value={props.description}
        placeholder="Enter Description"
        onChange={props.handleDescriptionChange}
      />
      </div>
      <div>
      <label>Min Height:</label>
      <input
        type="text"
        value={props.minHeight}
        placeholder="Enter Ride Name"
        onChange={props.handleMinHeightChange}
      />
      </div>
      <div>
      <label>imagePath:</label>
      <input
        type="text"
        value={props.imagePath}
        placeholder="Enter Path to Ride Image"
        onChange={props.handleImagePathChange}
      />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default CreateRideForm
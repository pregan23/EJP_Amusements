import React from 'react'

// name={name} 
//         description={description} 
//         minHeight={minHeight} 
//         imagePath={imagePath}
//         handleNameChange={handleNameChange}
//         handleDescriptionChange={handleDescriptionChange}
//         handleImagePathChange={handleImagePathChange}
//         onSubmit={createRide}



const CreateRideForm = (props) => {
    return (
        <form onSubmit={props.createRide}>
            <div>
            <label>Name:</label>
            <input  
            type='text' 
            value={props.name} 
            placeholder='Enter Ride Name'
            onChange={props.handleNameChange} 
            />
            </div>
            
            <div>
            <label>Description:</label>
            <input  
            type='text' 
            value={props.value} 
            placeholder='Enter Ride Name'
            onChange={props.onChange} />
            </div>

            <div>
            <label>Min Height:</label>
            <input  
            type='text' 
            value={props.minHeight} 
            placeholder='Enter Min Height'
            onChange={props.handleMinHeightChange} />
            </div>

            <div>
            <label>Image:</label>
            <input  
            type='text' 
            value={props.imagePath} 
            placeholder='Enter Image path'
            onChange={props.handleImagePathChange} />
            </div>
           

        </form>
    )
}

export default CreateRideForm
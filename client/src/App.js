import CreateRideForm from './components/CreateRideForm'
import './App.css';
import { useState } from 'react'
import axios from 'axios'





function App() {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [minHeight, setMinHeight] = useState('')
  const [imagePath, setImagePath] = useState('')

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const handleMinHeightChange = (event) => {
    setMinHeight(event.target.value)
  }

  const handleImagePathChange = (event) => {
    setImagePath(event.target.value)
  }

  const createRide = async (event) => {
    event.preventDefault()
    const response = await axios.post('http://localhost:3001/rides', {
      name: name,
      description: description,
      minHeight: minHeight,
      image: imagePath
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    // setSearchResults(response.data.results)

    // setRides
    setName('')
    setDescription('')
    setMinHeight('')
    setImagePath('')
  }


  return (
    <div className="App">
      <h1>EJP Amusements</h1>
      <h3>Create Amusement Park Ride</h3>
      <CreateRideForm
        name={name} 
        description={description} 
        minHeight={minHeight} 
        imagePath={imagePath}
        handleNameChange={handleNameChange}
        handleDescriptionChange={handleDescriptionChange}
        handleImagePathChange={handleImagePathChange}
        createRide={createRide}
      
      />
    </div>
  );
}

export default App;

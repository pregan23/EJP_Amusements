import './App.css';
import React from 'react'
import {useState} from 'react'
import CreateRideForm from './components/'
import axios from 'axios'

function App() {

  const [name, setName] = useState('')
  const [description, setDescrition] = useState('')
  const [minHeight, setMinHeight] = useState('')
  const [imagePath, setImagePath] = useState('')
  const [rideName, setRideName] = useState('')

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
    const response = await axios.post('/http://localhost:3001/rides', {
      name: name,
      description: description,
      minHeight: minHeight,
      imagePath: imagePath
    })
    setName(''),
    setDescription(''),
    setMinHeight(''),
    setImagePath('')
  }
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  return (
    <div className="App">
      <CreateRideForm />
    </div>
  );
}

export default App;

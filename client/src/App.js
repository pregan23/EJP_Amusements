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
    setName(event.targer.value)
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.targer.value)
  }

  const handleMinHeightChange = (event) => {
    setMinHeight(event.targer.value)
  }

  const handleImagePathChange = (event) => {
    setImagePath(event.targer.value)
  }

  const createRide = async (event) => {
    event.preventDefault()
    const response = await axios.post('http://localhost:3001/rides', {
      name: name,
      description: description,
      minHeight: minHeight,
      imagePath: imagePath
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    // setSearchResults(response.data.results)
    setName('')
    setDescription('')
    setMinHeight('')
    setImagePath('')
  }


  return (
    <div className="App">
      <CreateRideForm />
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react'
import CreateRideForm from './components/CreateRideForm'
import Rides from './components/Rides'
import axios from 'axios'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [minHeight, setMinHeight] = useState('')
  const [imagePath, setImagePath] = useState('')
  const [rides, setRides] = useState([])
  const [waitTime, setWaitTime] = useState('N/A')

  const fetchRides = async () => {
    const response = await axios.get('http://localhost:3001/rides')
    setRides(response.data.rides)
  }

  const fetchWait = async (id) => {
    console.log('INSIDE THE FETCH')
    const response = await axios.get(`http://localhost:3001/rides/${id}`)
    console.log(response.data.rides)
  }

  useEffect(() => {
    fetchRides()
  }, [])

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

  const handleWaitTimeChange = (event) => {
    setWaitTime(event.target.value)
  }

  const createRide = async (event) => {
    event.preventDefault()
    await axios
      .post('http://localhost:3001/rides', {
        name: name,
        description: description,
        minHeight: minHeight,
        image: imagePath
      })
      .then(function (response) {
        fetchRides()
      })
      .catch(function (error) {
        console.log(error)
      })
    setName('')
    setDescription('')
    setMinHeight('')
    setImagePath('')
  }

  const deleteRide = async (id) => {
    await axios
      .delete(`http://localhost:3001/rides/${id}`)
      .then(function (response) {
        fetchRides()
      })
  }

  const updateWait = async (id) => {
    await axios.put(`http://localhost:3001/rides/${id}`, { waitTime: waitTime })
  }

  return (
    <div className="App">
      <h1 className="main-title">EJP Amusements</h1>
      <CreateRideForm
        name={name}
        description={description}
        minHeight={minHeight}
        imagePath={imagePath}
        handleNameChange={handleNameChange}
        handleDescriptionChange={handleDescriptionChange}
        handleMinHeightChange={handleMinHeightChange}
        handleImagePathChange={handleImagePathChange}
        createRide={createRide}
      />
      <Rides
        rides={rides}
        deleteRide={deleteRide}
        handleWaitTimeChange={handleWaitTimeChange}
        updateWait={updateWait}
        waitTime={waitTime}
        fetchWait={fetchWait}
      />
    </div>
  )
}

export default App

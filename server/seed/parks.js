const db = require('../db')
const Park = require('../models/Park')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const park =
        { name: 'EJP Amusements',
          location: "Antartica",
          rides: []
      }

    await Park.insertOne(park)
    console.log("Created an amusement park")
}
const run = async () => {
    await main()
    db.close()
}

run()
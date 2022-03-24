const db = require('../db')
const Park = require('../models/Park')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const parks =
        { name: 'EJP Amusements',
          location: "Antartica"
          
      },

    await Park.insertOne(parks)
    console.log("Created some plants!")
}
const run = async () => {
    await main()
    db.close()
}

run()
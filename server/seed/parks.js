const db = require('../db')
const Park = require('../models/Park')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const park = {
        name: 'EJP Amusements', 
        description: 'Party poopers need not apply!  The greatest collection of thrill rides on this coast, EJP Amusements will blow you away!', 
        location: 'Antarctica',
        rides: []
        
    }

    await Park.insertOne(park)
    console.log("Created an amusement park!")
}
const run = async () => {
    await main()
    db.close()
}

run()
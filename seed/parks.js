const db = require('../db')
const { Park } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const parks = [
        {
        name: 'EJP Amusements', 
        location: 'Antarctica',
        rides: []
        }
    ]

    await Park.insertMany(parks)
    console.log("Created an amusement park!")
}
const run = async () => {
    await main()
    db.close()
}

run()
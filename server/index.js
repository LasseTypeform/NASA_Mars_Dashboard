require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const path = require('path')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', express.static(path.join(__dirname, '../public')))

// your API calls


// Get information about Rover
app.get('/rovers', async (req, res) => {


    console.log(req)
    // determinating the URL depending on the state in the req
    const URLdependingOnDate = (req) => {
        console.log('req.query', req.query)
        // changing the rover name to lower case according to the URL call
        const nameParam  = Object.assign(req.query.name.toLowerCase())
    
        // Checking if imageDate has been changed and if the RoverChosen is not curiosity. 
        // If so, a call is made for a specifc date wher both rovver Spirit and Opportunity has more images included.
        // if((req.query.date != undefined || req.query.date !== undefined != '') && (nameParam != 'curiosity')){
            
        //     if(nameParam !== 'curiosity') {
        //             console.log('URL', `https://api.nasa.gov/mars-photos/api/v1/rovers/${nameParam}/photos?earth_date=2010-01-21&api_key=${process.env.API_KEY}`)
        //         return `https://api.nasa.gov/mars-photos/api/v1/rovers/${nameParam}/photos?earth_date=2010-01-21&api_key=${process.env.API_KEY}`
        //     } 
           
        // }
        // The default call to get the latest photos for each of the three rovers 
        // else { 
        //     console.log('URL', `https://api.nasa.gov/mars-photos/api/v1/rovers/${nameParam}/latest_photos?api_key=${process.env.API_KEY}`)
            
        //     return `https://api.nasa.gov/mars-photos/api/v1/rovers/${nameParam}/latest_photos?api_key=${process.env.API_KEY}`
        //     }
   
            
            
            return `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=${process.env.API_KEY}`
          
    }
    
    try {
        let data = await fetch(URLdependingOnDate(req))
          .then(res => 
              res.json()
              )
          res.send({ data })
      
     
    } catch (err) {
        console.log('error:', err);
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const express = require('express')
var cors = require('cors')

require('dotenv').config();

const dbConfig = require('./src/config/dbConfig')





const userRoutes = require('./src/routes/userRoutes')
const movieRoute = require('./src/routes/movieRoutes')
const theatreRoute = require('./src/routes/theatreRoute')
const showRoute = require('./src/routes/showRoute')
const bookingRoute = require('./src/routes/bookingRoute')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/users', userRoutes);
app.use('/api/movies', movieRoute);
app.use('/api/theatres', theatreRoute);
app.use('/api/shows', showRoute);
app.use('/api/bookings', bookingRoute);


const PORT = process.env.PORT || 8081




app.listen(PORT , ()=>{
    console.log("server running")
})





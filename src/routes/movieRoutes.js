const router = require('express').Router();
const {Movie} = require('../models/movieModel')
const {Show} = require('../models/showModel')

router.post('/add-movie' , async (req , res)=>{
    try {
         const newMovie = new Movie(req.body)
         await newMovie.save()
         res.send({
            success: true,
            message: 'New movie has been added!'
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
})



router.get('/get-all-movies' , async(req , res)=>{
  try {
        const allMovies = await Movie.find()
        res.send({
            success: true,
            message: 'All movies have been fetched!',
            data: allMovies
        });
        
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        });
    }
})



router.put('/update-movie', async (req, res) => {
    try{
        const movie = await Movie.findByIdAndUpdate(req.body.movieId, req.body);
        res.send({
            success: true,
            message: 'The movie has been updated!',
            data: movie
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
});

router.put('/delete-movie', async (req, res) => {
    try {
        const showsWithMovie = await Show.find({ movie: req.body.movieId });

        if (showsWithMovie.length > 0) {
            return res.send({
                success: false,
                message: "Cannot delete movie as there are shows booked for it."
            });
        }

        await Movie.findByIdAndDelete(req.body.movieId);
        console.log(req.body.movieId);
        res.send({
            success: true,
            message: 'The movie has been deleted!',
        });
    } catch (err) {
        res.send({
            success: false,
            message: err.message
        });
    }
});

router.get('/movie/:id', async (req, res) => {
    try{
        const movie = await Movie.findById(req.params.id);
        res.send({
            success: true,
            message: "Movie fetched successfully!",
            data: movie
        })

    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
});




module.exports = router

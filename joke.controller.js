// Import Joke from the model file as this object
// as a require from that file with "../"
const Joke = require('../models/joke.model')

// create the necessary CRUD queries in the module.exports
module.exports = {
        // READ ALL JOKES
        readAllJokes : (req, res) => {
            console.log(res);
            Joke.find()
                .then(allJokes => res.json({ message: "Successful query", jokes: allJokes }))
                .catch(err => res.json({ message: 'Something went wrong', error: err }));
        },
        // READ ONE JOKE
        readOneJoke : (req, res) => {
            Joke.findById(req.params.id)
                .then(oneJoke => res.json({ message: "Successful query", joke: oneJoke }))
                .catch(err => res.json({ message: 'Something went wrong', error: err }));
        },
        // CREATE JOKE
        createJoke : (req, res) => {
            console.log(req.body)
            Joke.create(req.body)
                .then(newJoke => res.json({ message: "Successful query", joke: newJoke }))
                .catch(err => res.json({ message: 'Something went wrong', error: err }));
        },
        // UPDATE JOKE
        updateJoke : (req, res) => {
            Joke.findByIdAndUpdate(req.params.id, req.body,{ new: true, runValidators: true }
            )
                .then(updatedJoke => res.json({ message: "Successful query", joke: updatedJoke }))
                .catch(err => res.json({ message: 'Something went wrong', error: err }));
        },
            // RANDOM JOKE
            // randomJoke : (req, res) => {
            //     Joke.aggregate([{ $sample: { size: 2 } }]
            //     )
            //         .then(randomizedJoke => res.json({ message: "Successful query", joke: randomizedJoke }))
            //         .catch(err => res.json({ message: 'Something went wrong', error: err }));
            // },
        // DELETE JOKE
        deleteJoke : (req, res) => {
            Joke.findByIdAndDelete(req.params.id)
                .then(result => res.json({ message: "Successful query", result: result }))
                .catch(err => res.json({ message: 'Something went wrong', error: err }));
        }
        
}

// You can set up your routes now.
// import mongoose 
const mongoose = require('mongoose');

// create schema with setup and punchline as a String
// and timestamps
const JokeSchema = new mongoose.Schema ({
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [5, "Setup has to be at least 5 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "You cannot post a joke without a punchline"],
        minlength: [10, "Punchline must be at least 10 characters"]
    }
}, {timestamps: true});

// create a returned object that passes the model/function
// and have a second parameter that is the schema itself
const Joke = mongoose.model("Joke", JokeSchema);

// Export your object
module.exports = Joke;

// Now you can set up your controllers
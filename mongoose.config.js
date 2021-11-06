// Import mongoose = require('mongoose')
const mongoose = require('mongoose');
// Name database as variable
const database_Name = 'jokesApiAssignment';

// Connect Mongoose to MongoDB with mongoose.connect
mongoose.connect('mongodb://localhost/' + database_Name, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    // Create Success and Error messages
    .then(() => console.log(`Established a connection to ${database_Name}`))
    .catch(err => console.log(`Something went wrong when connecting to ${database_Name} `, err));

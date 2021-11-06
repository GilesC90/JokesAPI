// Import Express, app = express(), and set up PORT
const express = require('express');
const app = express();
const PORT = 2000;

// MIDDLEWARE and toss app.listen at bottom of page.  Nodemon server.js and set up config.js
app.use(express.json(), express.urlencoded({extended: true}))

// After config page is set up, connect to MongoDB by requiring the file here
require('./config/mongoose.config')
// Go Create Mongoose Schema in the Models Folder

//-------import routes to server using require(./)(app)---------
require('./routes/joke.routes')(app)





app.listen(PORT, () => console.log(`server up on port: ${PORT}`))
// import queries with require('../')
const JokeController = require('../controllers/joke.controller');
console.log(JokeController);

// create the anonymous module export function
// that connects routes to the server with module.exports = (app) => {}
module.exports = (app) => {
    app.get('/api/jokes', JokeController.readAllJokes);
    app.get('/api/jokes/:id', JokeController.readOneJoke);
    // app.get('/api/jokes/random', JokeController.randomJoke);
    app.post('/api/jokes/new', JokeController.createJoke);
    app.put('/api/jokes/update/:id', JokeController.updateJoke);
    app.delete('/api/jokes/delete/:id', JokeController.deleteJoke)
}

// Now go to server.js and import these routes.
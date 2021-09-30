const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const musicController = require('./MusicController');

const PORT = 3000;

mongoose.connect('mongodb+srv://admin:test@cluster0.dopf4.mongodb.net/handstand?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const musicRouter = express.Router();
app.use('/music', musicRouter);

// Create a student in the database
// http://localhost:3000/student
musicRouter.get('/', musicController.getSongs,(req,res)=>{
  res.status(200).json(res.locals.songs);
});

musicRouter.get('/getSong/:name', musicController.getSong,(req,res)=>{
  res.status(200).json(res.locals.song);
});

musicRouter.post('/song', musicController.createSong, (req, res) => res.status(200).json('Song successfully added'));

// Get a student from the database
// http://localhost:3000/student/"name"
//musicRouter.get('/:name', musicController.getSong,(req, res) => res.status(200).json(res.locals.character));

// Change a students name
// http://localhost:3000/student/"name"
//musicRouter.patch('/:name', musicController.updateSong);

// Delete a student from the database
// http://localhost:3000/student/"name"
//musicRouter.delete('/:name', musicController.deleteSong);


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
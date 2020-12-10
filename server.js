if(process.env.NODE_ENV === 'development'){
     require('dotenv').config()
} // <= Heroku
//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express();
const db = mongoose.connection;
const show = console.log;
show('im cool')
const Project = require('./models/projects')
const Guestbook = require('./models/guestbook')

//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000; // <= have to have this env port

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI; // <= let heroku handle it

// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useUnifiedTopology: true });

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open', ()=>{});


//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form

// collection

// const projects = [
//   {
//     name:'Truth or Drink',
//     technologies: 'JavaScript, CSS, HTML',
//     description: 'Truth or Drink is a 2-person, interactive browser game.',
//     img: '/img/dilya.jpg'
//   },
//   {
//     name:'Joah Brown',
//     technologies: 'JavaScript, CSS, HTML',
//     description: 'Ecommerce',
//     img: 'img/dil2.jpg'
//   }
// ];


//___________________
// Routes
//___________________
//localhost:3000 
// app.get('/' , (req, res) => {
//   res.send('Hello World!');
// });

// HOME get route
app.get('/home', (req, res)=> {
  res.render('static/Home')
})

// GUESTBOOK get AND post route
// index - get
app.get('/guestbook/', (req, res) => {
  Guestbook.find({},(err, allGuestbook) => {
    if(!err){
      console.log(allGuestbook);
      res.render('Indexg', {
        guestbook: allGuestbook,
      })
    } else {
      res.send(err)
    }
  })
})

// create - post
app.post('/guestbook', (req, res) => {
  Guestbook.create(req.params.id, (err, createdGuestbook) => {
    if(!err){
      res.redirect('/guestbook')
    } else {
      res.send(err);
    }
  })
})

// INDEX route
app.get('/projects/', (req, res) => {
  Project.find({},(err, allProjects) => {
    if(!err){
      console.log(allProjects);
      res.render('Index', {
        projects: allProjects,
      })
    } else {
      res.send(err)
    }
  })
});

// NEW route
app.get('/projects/new', (req, res) => {
  res.render('New');
})

// DELETE route
app.delete('/projects/:id', (req, res) => {
  Project.findByIdAndRemove(req.params.id, (err, foundProject) => {
      if(!err){
          res.redirect('/projects')
      } else {
          res.send(err);
      }
  })
})

// UPDATE route
app.put('/projects/:id', (req, res) => {
  Project.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedProject) => {
      if(!err){
        res.redirect('/projects');
      } else {
        res.send(err);
      }
  })
})



// CREATE route
app.post('/projects', (req, res) => {
  Project.create(req.body, (err, createdProject) => {
    if(!err){
      res.redirect('/projects')
    } else {
      res.send(err);
    }
  })
})

// EDIT route
app.get('/projects/:id/edit', (req, res) => {
  Project.findByIdAndUpdate(req.params.id, req.body, (err, foundProject) => {
      if(!err){
          res.render('Edit', {
              project: foundProject
          })
      } else {
          res.send(err);
      }
  })
})

// SHOW route
app.get('/projects/:id', (req, res) => {
  Project.findById(req.params.id, (err, foundProject) => {
      if(!err){
          res.render('Show', {
            project: foundProject
          })
      } else {
          res.send(err);
      }
  })
})


//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));


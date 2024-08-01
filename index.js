const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const session = require('express-session');
const path = require('path');
const userRoute = require('./route/user.route.js'); 
const profileRoute = require('./route/profile.route.js'); 
const User = require('./Models/userModel.js');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'Public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));

async function connectDB(){
  try{
    mongoose.connect("mongodb://127.0.0.1:27017/FoodShare",{});
    console.log("connected to mongodb");
  }catch(err){
    console.log("error in mongodb",err);
  }
}
connectDB();

app.use("/user", userRoute); 
app.use("/profile", profileRoute); 

app.get('/', (req, res) => {
  res.render('Home-page'); 
});

app.get('/login', (req, res) => {
  res.render('Login-page');
});

app.get('/profile', async (req, res) => {
  const userId = req.session.userId; 
  if (userId) {
    try {
      const user = await User.findById(userId); 
      if (user) {
        res.render('Profile-page', { user });
      } else {
        res.redirect('/login');
      }
    } catch (error) {
      console.error("Error fetching user data", error);
      res.redirect('/login');
    }
  } else {
    res.redirect('/login');
  }
});

app.get('/register', (req, res) => {
  res.render('Register-page');
});

app.get('/ngos', (req, res) => {
  res.render('NGO-Page');
});

app.get('/banquets', (req, res) => {
  res.render('Banquets-page');
});

app.get('/about', (req, res) => {
  res.render('About-Us-page');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

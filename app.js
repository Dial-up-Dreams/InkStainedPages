const express = require('express');
//const mysql = require('mysql2');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/Images', 'public/Projects'); 
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({storage:storage});


const app = express();

app.set('view engine', 'ejs');

app.use('/public/', express.static('./public'));

app.use(express.urlencoded({
    extended: false
}))



app.get('/', (req, res) => {
    res.render('Entrance_Page');
});

app.get('/HomePage', (req, res) => {
    res.render('Home_Page');
});

app.get('/AboutMe', (req, res) => {
    res.render('About_Me');
});

app.get('/ContactMe', (req, res) => {
    res.render('Contact_Me');
});

app.get('/Portfolio', (req, res) => {
    res.render('Portfolio');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}/`)); 
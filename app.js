const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const dbURI = 'mongodb+srv://volkan:p1234@cluster1.uymij.mongodb.net/todoDB'

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }).then((result) => app.listen(3000)).catch((err) => console.log(err))


const todoRouters = require('./routes/todoRouters');



app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(todoRouters);


app.set('view engine', 'ejs');
app.set('views', 'htmls');


app.get('/', (req, res) => {

    res.redirect('/yapilacaklar');
})

app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('/register',(req,res)=>{
    res.render('register')
})
app.use((req, res) => {
    res.status(404).render('404');
})
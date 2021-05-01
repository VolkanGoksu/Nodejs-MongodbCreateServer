const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    baslik:{type:String,require:true},
    icerik:{type:String,require:true}
},{timestamps:true});

const Todo = mongoose.model('Yapılacak',todoSchema); //ders ismi veritabanına kayıt olacak isim

module.exports = Todo;
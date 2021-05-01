const express = require('express');
const Todo = require('../models/todo');
const router = express.Router();

router.get('/yapilacaklar',(req,res)=>{
    Todo.find().sort({createdAt:-1})
              .then((result)=>{
                  res.render('index',{yapilacaklar:result})
              }).catch((err)=>{
                  console.log(err);
              })
           
})

router.post('/yapilacaklar',(req,res)=>{
    const todo = new Todo(req.body);
    todo.save().then((result)=>{
        res.redirect('/yapilacaklar')
    })
})

router.get('/yapilacak/ekle',(req,res)=>{
    res.render('ekle')
})


router.get('/yapilacaklar/:id',(req,res)=>{
    const id = req.params.id;
    Todo.findById(id).then((result)=>{
        res.render('detay',{yapilacak:result})
    })
})

router.delete('/yapilacaklar/:id',(req,res)=>{
    const id = req.params.id;
    Todo.findByIdAndDelete(id)
      .then(result=>{
          res.json({redirect:'/yapilacaklar'})
      }).catch((err)=>{
          console.log(err);
      })
})

module.exports = router;
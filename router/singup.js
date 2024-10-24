const express = require('express');
const singup = express.Router();
const db = require('../database/main')


singup.post('/', (req, res) => {
  console.log("data=>",req.body)
  if(req.body.name && req.body.email)
    {
       db.adduser(req.body).then((ans)=>{
        if(ans)
        {
          res.send({
            status:"ok"
          });
        }
       })
    }
    else
    {
      res.send({
        error:"Invaild json !"
      })
    }
 
});

module.exports = singup;

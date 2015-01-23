var express = require('express')
var router = express.Router();
var path = require('path');
var happyFaceFileName = __dirname + '/../img/happy/happy1.png'
var happyFaceFileName = path.resolve(happyFaceFileName);

var sadFaceFileName = __dirname + '/../img/sad/sad-puppy.jpg'
var sadFaceFileName = path.resolve(sadFaceFileName);

router.get('/happy', function (req,res){
  console.log(happyFaceFileName)
  // res.send('emtions you made it!')
  res.sendFile(happyFaceFileName, {}, function (err){
    if(err){
      console.log(err);
      res.status(err.status).end()
    } else {
      console.log('Sent:',happyFaceFileName)
    }

  })
}) 


router.get('/sad', function (req,res){
  console.log(sadFaceFileName)
  // res.send('emtions you made it!')
  res.sendFile(sadFaceFileName, {}, function (err){
    if(err){
      console.log(err);
      res.status(err.status).end()
    } else {
      console.log('Sent:',sadFaceFileName)
    }

  })
}) 



module.exports = router; 
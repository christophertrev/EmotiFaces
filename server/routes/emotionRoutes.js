var express = require('express')
var router = express.Router();
var path = require('path');
var fs = require('fs');
var happyFaceFileName = __dirname + '/../img/happy/happy1.png'
var happyFaceFileName = path.resolve(happyFaceFileName);

var sadFaceFileName = __dirname + '/../img/sad/sad-puppy.jpg'
var sadFaceFileName = path.resolve(sadFaceFileName);

router.get('/happy', function (req,res){
  console.log(happyFaceFileName)
  // res.send('emtions you made it!')
  var pathName = path.resolve(__dirname + '/../img/happy/')
  fs.readdir(pathName,function (err,files){
    //fiels include .DS_STORE
    console.log(files)
    console.log(files.length)
    var rIndex = Math.ceil(Math.random()*(files.length-1));

    var filePathName = pathName +'/'+ files[rIndex];
    console.log('werw',filePathName)
    //join two files
    res.sendFile(filePathName, {}, function (err){
      if(err){
        console.log(err);
        res.status(err.status).end();

      } else {
        console.log('Sent:',filePathName)
      }

    })


  });

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
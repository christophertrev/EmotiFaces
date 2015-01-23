var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
// var happyFaceFileName = __dirname + '/../img/happy/happy1.png';
// var happyFaceFileName = path.resolve(happyFaceFileName);

// var sadFaceFileName = __dirname + '/../img/sad/sad-puppy.jpg';
// var sadFaceFileName = path.resolve(sadFaceFileName);

var baseURL = __dirname + '/../img/';
var emotionDirs = {
  happy: path.resolve(baseURL + 'happy'),
  sad: path.resolve(baseURL + 'sad'),
};


router.get('/:emotion',function (req,res){
  // console.log(emotionDirs[req.params.emotion]);
  var pathDirName = emotionDirs[req.params.emotion];
  //if emotion in emotions dictionaray do the thing
  //else send 404 not found
  fs.readdir(pathDirName,function (err,files){
    //fiels include .DS_STORE
    // console.log(files)
    // console.log(files.length)
    var randFloat = Math.random()*(files.length); 
    var rIndex = Math.floor(randFloat);
    // console.log(randFloat)
    var filePathName = pathDirName +'/'+ files[rIndex];
    res.sendFile(filePathName, {}, function (err){
      if(err){
        console.log(err);
        res.status(err.status).end();
      } else {
        console.log('Sent:',filePathName);
      }
    });
  });
});


module.exports = router; 
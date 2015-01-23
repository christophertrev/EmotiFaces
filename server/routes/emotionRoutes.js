var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var multiparty = require('multiparty');
var gm = require('gm').subClass({ imageMagick: true });



var baseURL = __dirname + '/../img/';
var emotionDirs = {
  happy: path.resolve(baseURL + 'happy'),
  sad: path.resolve(baseURL + 'sad'),
};


router.get('/:emotion',function (req,res){
  var pathDirName = emotionDirs[req.params.emotion];
  console.log(pathDirName);
  if( !pathDirName ){
    res.status(404).send('sorry emotion does not exist');
    return;
  }
  fs.readdir(pathDirName,function (err,files){
    var randFloat = Math.random()*(files.length); 
    var rIndex = Math.floor(randFloat);
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


router.get('/',function (req,res){
  res.json(Object.keys(emotionDirs));
  // res.send("oiasmdfasopidfa")
});

router.post('/:emotion',function (req,res){
  var pathDirName = emotionDirs[req.params.emotion];
  if( !pathDirName ){
    res.status(404).send('sorry emotion does not exist');
    return; 
  }
  var form = new multiparty.Form();

  form.on('close', function(){
    res.status(201). send('doneeeeee');
  });

  form.on('field', function(name, val){
    console.log('called field', name,val);
    if (name !== 'title') return;
    title = val;
  });

  form.on('file', function(name,file){
    var tmp_path = file.path;
    var thumbPath = __dirname + '/uploads/thumbs/';
    var target_path = pathDirName +'/'+file.originalFilename;

    gm(tmp_path)
        .resize(600)
        .noProfile()
        .write(target_path, function(err) {
            if(err) console.error(err.stack);       
        });
    // fs.renameSync(tmp_path, target_path, function(err) {
    //     if(err) console.error(err.stack);
    // });
  });

  form.parse(req);

});





module.exports = router; 
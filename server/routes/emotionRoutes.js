var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var multiparty = require('multiparty');

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

router.post('/:emotion',function (req,res){
  var pathDirName = emotionDirs[req.params.emotion];
  var image; 
  var title; 

  // console.log(req)
  var form = new multiparty.Form();
  console.log('posting to emotion!')

  form.on('close', function(){
    // console.log(arguments)
    // console.log(form)
    console.log('closing now')
    // res.send(format('\nuploaded %s (%d Kb) as %s'
      // , image.filename
      // , image.size / 1024 | 0
      // , title));
    res.send('doneeeeee')

    // console.log(image)
  });
  form.on('finish', function (){
    // console.log('finsih',arguments)
  })

  form.on('field', function(name, val){
    console.log('called field', name,val)
    if (name !== 'title') return;
    title = val;
  });

  form.on('part',function (part){
    // console.log('part!')
    // // console.log('part!',part)
    // if(!part.filename){ return ;}
    // if (part.name !== 'image') {
    //   console.log('part.resumeing')
    //   return part.resume();
    // }
    // console.log('inpart!')

    // image = {};
    // image.filename = part.filename;
    // image.size = 0;
    // part.on('data', function(buf){
    //   console.log('adding stuff to image')
    //   image.size += buf.length;
    // });
    if(!part.filename) return;
    size = part.byteCount;
    fileName = part.filename;

  })
  form.on('file', function(name,file){
    console.log('name',name);
    console.log('file',file)
    console.log(file.path);
    console.log(__dirname);
    // console.log('filename: ' + fileName);
    // console.log('fileSize: '+ (size / 1024));
    var tmp_path = file.path
    // var target_path = __dirname + '/uploads/fullsize/' + fileName;
    var thumbPath = __dirname + '/uploads/thumbs/';
    var target_path = pathDirName +'/'+file.originalFilename;
    // var target_path = __dirname + file.originalFilename;
    fs.renameSync(tmp_path, target_path, function(err) {
        if(err) console.error(err.stack);
    });
    // res.redirect('/uploads/fullsize/' + fileName);
    //     console.log(target_path);

  })

  form.parse(req);

})



module.exports = router; 
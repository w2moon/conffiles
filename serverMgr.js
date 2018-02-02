/**
 * 管理服务器上传等操作
 */
var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');
var path = require("path");
var multer = require('multer');
var wl = require('./tools/file');
var upload = multer({ dest: 'uploads/' });
var PORT = 8084;
var SERVER_PATH = path.resolve("servers")+"/";
var child_process = require('child_process');
var processes = {};

wl.createFolders(SERVER_PATH);

function startFolder(folder){
    stopFolder(folder);
    console.log("will start");
}

function setupFolder(folder,cb){
    //exec npm i
    var ps = child_process.spawn('npm', ['i'],{
        cwd:folder,
    });
    ps.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        cb();
      });
}

function stopFolder(folder){
    if(processes[folder]){
        processes[folder].kill();
        processes[folder] = null;
    }
}

app.post('/up',upload.single("data"),function(req,res){
    var folder = SERVER_PATH+req.file.originalname.replace(".zip","");
    wl.unzip(req.file.path,folder,function(){
        fs.unlink(req.file.path);
/*
        setupFolder(folder,function(){
            startFolder(folder);
        });
*/
        res.end();
    });
    
    
});


http.createServer(app).listen(PORT,function(){
    console.log("server started",PORT);
});



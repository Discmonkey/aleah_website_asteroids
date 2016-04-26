var http = require('http');
var fs = require('fs');
BUFFER_SIZE = 4096;
// functions for sending files
var fileType = function(url) {

};

var getMIMType = function() {

};

var openFile = function(path,res) {
   
    try {
        var file = fs.createReadStream(path);
    } catch(e) {
        res.writeHead(404);
        res.end('File not found');
        console.log('file not found: ' + path);
        return;
    }
    
    res.writeHead(200,{'Content-Type':'text/html'});

    file.on('data', function(data) {
        if (!res.write(data)) {
            file.pause(); 
            console.log('paused');
        }
    }); 

    res.on('drain', function() {
        file.resume();
    });

    file.on('end', function() {
        res.end();
    });

};

http.createServer(function(req,res) {
	console.log(req.url);
	var homePath = 'aleah.html';
	var url = req.url;
	if (url == '/') {
		openFile(homePath,res);
	} else {
		url = url.replace('%20',' ');
		if (url.indexOf('/Users/') == -1) {
			url = url.replace('/','');
		}
		openFile(url,res);
	}

}).listen(4000);





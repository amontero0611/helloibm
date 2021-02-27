var http = require('http');

var title = process.env.APPTITLE || ' ';
var cr = process.env.COPYRIGHT || ' ';
var hi = process.env.SALUTATION || ' ';
//create a server object:
console.log("Server listening on port 8080");
http.createServer(function (req, res) {
  res.write('IIIIII  BBBBBBB  MM     MM \n'); //write a response to the client
  res.write('  II     BB   BB  MM   MM  \n'); 
  res.write('  II     BB   BB  MMM MMM  \n'); 
  res.write('  II     BBBBBB   MMMMMMM  \n'); 
  res.write('  II     BB   BB  MM M MM  \n'); 
  res.write('  II     BB   BB  MM   MM  \n'); 
  res.write('IIIIII  BBBBBBB  MMM   MMM \n'); 
  res.write(' ');
  res.write(title + '\n');
  res.write(cr + '\n');
  res.write(hi + '\n');
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080 

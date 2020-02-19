var http = require('http');

console.log('Listening on port ' + process.env.PORT);
//create a server object:
http.createServer(function (req, res) {
  res.write('IIIIII  BBBBBBB  MM     MM \n'); //write a response to the client
  res.write('  II     BB   BB  MM   MM  \n'); 
  res.write('  II     BB   BB  MMM MMM  \n'); 
  res.write('  II     BBBBBB   MMMMMMM  \n'); 
  res.write('  II     BB   BB  MM M MM  \n'); 
  res.write('  II     BB   BB  MM   MM  \n'); 
  res.write('IIIIII  BBBBBBB  MMM   MMM \n'); 
  res.write(' ');
  res.write(process.env.copyright);
  res.write(process.env.salutation);
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080 

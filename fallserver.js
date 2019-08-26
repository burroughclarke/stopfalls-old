// content of index.js
const express = require('express')
const app = express()
const port = 80

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/miow', (request, response) => {
  response.send('Hello from Express!')
})

// Access the parse results as request.body
app.post('/', function(request, response){
	console.log("request.body:");
    console.log(request.body);

    var ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
    console.log("client ip: " + ip)

    response.send("data received.");
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`);

})

// GET the main page:
// curl localhost:3000

// POST data:

// for now, just send data whenever a fall is detected. Contstant data stream is harder.

// you need to run mongoDB independently to the nodeJS server. the code just makes them talk to each other

// setting mongodb on a cloud server (or at least an OpenStack instance is preferable)

// cloud database: 'Atlas'
// https://cloud.mongodb.com
// https://cloud.mongodb.com/v2/5d63479479358e4983d5c4d9#clusters

// Android does not directly connect to MOngoDb. It connects to the NodeJs app server, this server connects to MongoDb

// raw:
// mongodb+srv://burrough:<password>@cluster0-neprh.mongodb.net/test?retryWrites=true&w=majority
// password added:
// mongodb+srv://burrough:Mittens$1@cluster0-neprh.mongodb.net/test?retryWrites=true&w=majority

const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = "mongodb+srv://burrough:mittens@cluster0-neprh.mongodb.net/test?retryWrites=true&w=majority"
MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('MongoDB Connected...');
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   
   


   client.close();
});

// public IP: 129.127.251.157












var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// API Base URL: https://od-api.oxforddictionaries.com/api/v1 
var Dictionary = require("oxford-dictionary-api");
var app_id = "d9a7dc77 "; 
var app_key = "c716a15d34253218c1f2e0b6ecba5909";
var dict = new Dictionary(app_id,app_key);

// app.post('/words', (req, res) =>{
//   	dict.find(req.body.words,function(error,data){
//      	if(error)
//     	 res.sendStatus(400)
//     	 res.send(data)
//    });
// });


// app.get('/*', (req, res) => {
//     res.sendFile(path.resolve(path.join(__dirname, '../client/dist/index.html')))

// });

app.listen(3000, function() {
  console.log('listening on port 3000!');
});


var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get('/people', function(req, res) {
  var people = [
			{'name': 'josh', 'word': 'awesome'}, 
			{'name': 'vanessa', 'word': 'phenominal'},
			{'name': 'jp', 'word': 'jpjpjppjpjpj'},
			{'name': 'anton', 'word': 'anton anton anton'},
			{'name': 'garreth', 'word': 'garreth garreth garreth'},
			{'name': 'paul', 'word': 'paul paul paul'},
			{'name': 'stan', 'word': 'stan stan stan'},
			{'name': 'santiago', 'word': 'santiago santiago'},
			{'name': 'tomas', 'word': 'tomas'},
			{'name': 'ramiro', 'word': 'ramiro ramiro'},
			{'name': 'julieta', 'word': 'julieta julieta'}
		];


  res.send(people);
});

app.listen(8888, function(){
  console.log('app listening on port 8888');
});

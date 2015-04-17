var fs = require('fs'),
  express = require('express'),
  app = express();

app.use(express.static('public'));

app.get('/advertisers', function (req, res) {
  getAdvertisers(function (advertisers) {
    res.json(advertisers);
  });
});

app.get('/advertisers/:id', function (req, res) {
  var id = req.params.id;

  getAdvertisers(function (advertisers) {
    var advertiser = advertisers.filter(function (advertiser) {
      return advertiser.id == id;
    }).shift();

    res.send(advertiser);
  });
});

var server = app.listen(8080, function () {
  var address = server.address();
  console.log('Example app listening at http://%s:%s', address.address, address.port);
});

/**
 * Read the advertisers file from the data folder.
 * @param  {Function} success Callback executed is the file was fetched
 * successfully.
 */
function getAdvertisers(success){
  fs.readFile('data/advertisers.json', function (err, data){
    if (err) throw err;
    success(JSON.parse(data));
  });
}

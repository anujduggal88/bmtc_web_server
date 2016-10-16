	var restify = require('restify');

	var server = restify.createServer();
	var fs = require('fs');
	var obj;

	server.get('/route1/', function(req,res){

		

	fs.readFile('json/majestic_kor_2.json', 'utf8', function (err, data) {
	  if (err) throw err;
	  obj = JSON.parse(data);
	  res.send(obj)
	});
		

	});


server.get('/route2/', function(req,res){

		

	fs.readFile('json/sb_ec_2.json', 'utf8', function (err, data) {
	  if (err) throw err;
	  obj = JSON.parse(data);
	  res.send(obj)
	});
		

	});


server.get('/route3/', function(req,res){

	

	fs.readFile('json/sb_m_2.json', 'utf8', function (err, data) {
	  if (err) throw err;
	  obj = JSON.parse(data);
	  res.send(obj)
	});
		

	});



server.get('/route4/', function(req,res){

		

	fs.readFile('json/tf_m_2.json', 'utf8', function (err, data) {
	  if (err) throw err;
	  obj = JSON.parse(data);
	  res.send(obj)
	});
		

	});


server.get('/route/:routeID', function(req,res){

		console.log(req.params.routeID);

	fs.readFile('routeData/'+req.params.routeID+'.json', 'utf8', function (err, data) {
	  if (err) {
res.send('routeID is wrong');
	  };
	  if (data){
	  obj = JSON.parse(data);
	  res.send(obj)
	  }
	});
		

	});


	server.listen(8080, function() {
	  console.log('%s listening at %s', server.name, server.url);
	});

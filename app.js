var express = require('express'),
    favicon = require('serve-favicon'),
	app = express();

//app.use(express.favicon());
app.use(favicon(__dirname + '/img/favicon.ico'));
app.use(express.static(__dirname));
app.listen(process.env.PORT || 8080);
var express = require('express'),
    favicon = require('serve-favicon'),
	app = express();

//app.use(express.favicon());
app.use(express.static(__dirname));
app.listen(process.env.PORT || 8080);
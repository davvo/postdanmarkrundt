# npm install -g jslint
lint:
	jslint --nomen --plusplus --vars js/*.js

run: lint
	node app.js

debug: lint
	node --debug app.js

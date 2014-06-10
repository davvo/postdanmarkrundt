# npm install -g jslint
lint:
	find js -name "*.js" -not -path 'js/lib/*' -not -path '*-built*' | xargs jslint --nomen --plusplus --vars

build: lint
	r.js -o baseUrl=js name=main out=js/main-built.js mainConfigFile=js/main.js

run: node app.js

debug: lint
	node --debug app.js

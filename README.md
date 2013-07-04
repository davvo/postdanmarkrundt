postdanmarkrundt
================

Install node dependencies (first time only)

    npm install

start webserver

    make run

Then point your browser to <code>http://localhost:8080</code>
(or <code>http://localhost:8080/?debug</code> to get non-compressed javascript)


Before deploy, remember to build compressed version of javascripts:

    make build

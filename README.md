### Introduction
This web app will fetch and display photos from Flickr's public api service


### installation

Clone the repo:

```bash
$ git clone https://github.com/uptodatehuang/flickr-photo-search.git my-project
$ cd my-project
```

Install dependencies:

```bash
$ npm install
```

Install webpack globally
```bash
$ npm install -g webpack
```

### development

Run server with:

```bash
$ npm start
```

It runs express server on localhost on port 3000 and webpack-dev-server on port 3001 with proxing requests from the first one to the second one.

You can specify host of the application:

```bash
$ APP_HOST=appdomain.com npm start
```

Application has two separate directory `frontend` and `backend`. The entry point for frontend is `frontend/app.es6.js` file and for backend it is `backend/server.js`.

### production

Build assets for the application:

```bash
$ NODE_ENV=production webpack -p --config webpack.production.config.js
```

Then run the app:

```bash
$ NODE_ENV=production npm start
```

Do not forget to specify your app domain in `server.js` for production mode!


### Reference
- angular-express-webpack-boilerplate https://github.com/tenphi/angular-express-webpack-boilerplate
- angularjs-webpack https://github.com/preboot/angularjs-webpack
- webpack https://webpack.js.org/
- karma https://karma-runner.github.io/1.0/index.html
- Flickr's public feed https://www.flickr.com/services/feeds/
- Johnpapa Angular.js Code styling guide https://github.com/johnpapa/angular-styleguide

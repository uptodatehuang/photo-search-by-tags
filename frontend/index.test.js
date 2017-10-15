// load all js sources
const testsContext = require.context('../frontend', true, /\.es6.js$/);
testsContext.keys().forEach(testsContext);

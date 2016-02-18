var React = require('react');
var Articles = require('./views/index.jsx');

var books = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
React.render(<Articles articles={ articles } />, document.getElementById('container'));
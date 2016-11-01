require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./components/card');
var List = require('./components/list');
var Board = require('./components/board');

// document.addEventListener('DOMContentLoaded', function() {
//     ReactDOM.render(<Card />, document.getElementById('app'));
// });

// document.addEventListener('DOMContentLoaded', function() {
//     ReactDOM.render(<List />, document.getElementById('app'));
// });

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board />, document.getElementById('app'));
});

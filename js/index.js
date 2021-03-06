require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./components/card');
var List = require('./components/list');
var Board = require('./components/board');
var BoardContainer = require('./components/board-container');


// document.addEventListener('DOMContentLoaded', function() {
//     ReactDOM.render(<Card />, document.getElementById('app'));
// });

// document.addEventListener('DOMContentLoaded', function() {
//     ReactDOM.render(<List />, document.getElementById('app'));
// });

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<BoardContainer title="BOARD"/>, document.getElementById('app'));
});

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

var listTitles = ["List1", "List2", "List3"];

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board title="Board1" lists={listTitles}/>, document.getElementById('app'));
});

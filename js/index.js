require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./components/card');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Card />, document.getElementById('app'));
});


var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');

var List = function(props) {
	var cards = [];	
	for (var i=0; i < props.cards.length; i++) {
		cards.push(<Card text={props.cards[i]} />);
	}
	return (
		<div className="card-list">
			{props.title}<br/>
			{cards}
		</div>
	);  
};

module.exports = List;

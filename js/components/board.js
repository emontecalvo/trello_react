var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');
var List = require('./list');
var ListContainer = require('./list-container');

var Board = function(props) {
	var listsCard = [
		{ 
			cards: ["First card in the list", "Second card in the list", "Third card in the list"]
		},
		{ 	
			cards: ["1st card in the list", "2nd card in the list", "3rd card in the list"]
		},
		{
			cards: ["First card in the list", "Second card in the list", "Third card in the list"]
		}
	]

	var listsInBoard = [];
	for (var i = 0; i < listsCard.length; i++) {
		listsInBoard.push(<List title={props.lists[i]} cards={listsCard[i].cards} />);
	}
	return (
		<div className="board-list">
			{props.title}<br/>
			{listsInBoard}
		</div>
	);
};

module.exports = Board;

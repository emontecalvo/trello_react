var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');
var List = require('./list');

var Board = function(props) {
	var lists = [
		{ 
			title: "List1", 
			cards: ["First card in the list", "Second card in the list", "Third card in the list"]
		},
		{ 	
			title: "List2",
			cards: ["1st card in the list", "2nd card in the list", "3rd card in the list"]
		},
		{
			title: "List3",
			cards: ["First card in the list", "Second card in the list", "Third card in the list"]
		}
	]
	var listsInBoard = [];
	console.log(props);
	for (var i = 0; i < lists.length; i++) {
		listsInBoard.push(<List title={props.lists[i]} cards={lists[i].cards} />);
	}
	return (
		<div className="board-list">
			{props.title}<br/>
			{listsInBoard}
		</div>
	);
};

module.exports = Board;

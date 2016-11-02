var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./board');

var BoardContainer = React.createClass({
	getInitialState: function() {
		return {
			title: "",
			lists: []
		};
	},
	onText: function(event) {
		this.setState({
			title: event.target.value
		});
	},
	onSubmit: function(event) {
		console.log(event.target.value);
		event.preventDefault();
		this.setState({
			lists: this.state.lists.concat([this.state.title])
		});
		event.target.reset();
	},
	render: function() {
		return (
			<div className="board-list">
				{this.props.title}<br/>
				<Board listTitle={this.state.title} lists={this.state.lists} onAddInputChanged={this.onText} onAddSubmit={this.onSubmit} />
			</div>
		);
	}
});

module.exports = BoardContainer;

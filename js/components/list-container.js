var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list');

var ListContainer = React.createClass({
	getInitialState: function() {
		return {
			text: "",
			cards: []
		};
	},
	onAddInputChanged: function(event) {
		event.preventDefault();
		this.setState({
			text: event.target.value
		});
	},
	onAddSubmit: function(event) {
		event.preventDefault();
		this.setState({
			cards: this.state.cards.push(this.state.text)
		});
	},
	render: function() {
		console.log(this.props);
		return (
			<List cards={this.state.cards} onAddInputChanged={this.onText} onAddSubmit={this.onSubmit} />
		);
	}
});

module.exports = ListContainer;

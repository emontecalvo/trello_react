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
	onText: function(event) {
		this.setState({
			text: event.target.value
		});
	},
	onSubmit: function(event) {
		event.preventDefault();
		this.setState({
			cards: this.state.cards.concat([this.state.text])
		});
		event.target.reset();
	},
	render: function() {
		return (
			<List title={this.props.title} cards={this.state.cards} onAddInputChanged={this.onText} onAddSubmit={this.onSubmit} />
		);
	}
});

module.exports = ListContainer;

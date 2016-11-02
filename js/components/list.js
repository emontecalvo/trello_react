var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');

var List = React.createClass({
	getInitialState: function() {
		return {
			changed: false,
			click: false
		};
	},
	onAddInputChanged: function() {
		this.setState({
			changed: true
		});
	},
	onAddSubmit: function(event) {
		event.preventDefault();
		this.setState({
			click: true
		});
	},
	render: function() {
		var cards = this.props.cards.map(card => {
			return (<Card text={card}/>);
		});
		return (
			<div className="card-list">
				{this.props.title}<br/>
				{cards}
				<form>
					<input type="text" onChange={this.onAddInputChanged} />
					<Button onClick={this.onAddSubmit} text="Submit" />
				</form>
			</div>
		);
	}
});

var Button = function(props) {
	return <button onClick={props.onClick}>{props.text}</button>;
};

module.exports = List;

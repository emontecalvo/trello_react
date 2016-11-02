var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');

var List = React.createClass({
	render: function() {
		var cards = this.props.cards.map(card => {
			return (<Card text={card}/>);
		});
		return (
			<div className="card-list">
				{this.props.title}<br/>
				{cards}
				<form onClick={this.props.onAddSubmit}>
					<input type="text" onChange={this.props.onAddInputChanged} />
					<input type="submit" text="Submit" />
				</form>
			</div>
		);
	}
});

var Button = function(props) {
	return <button onClick={props.onClick}>{props.text}</button>;
};

module.exports = List;

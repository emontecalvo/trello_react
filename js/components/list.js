var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');

var List = React.createClass ({
	getInitialState: function() {
		return {
			changed: false,
			clicked: false
		};
	},
	onAddInputChanged: function() {
		this.setState({
			changed: true
		});
	},
	onButtonClick: function() {
		this.setState({
			clicked: true
		});
	},
	render: function() {
		var cards = props.cards.map(card => {
			return (<Card text={card}/>);
		});

		return (
			<div className="card-list">
				{props.title}<br/>
				{cards}
				<form>
					<input type="text" onChange={this.onAddInputChanged} />
					<Button onClick={this.onButtonClick} text="Submit"/>
				</form>
			</div>
		);  
	}
});

var Button = function(props) {
	return <button onClick={props.onClick}></button>;
};



module.exports = List;

var React = require('react');
var ReactDOM = require('react-dom');
var ListContainer = require('./list-container');


var Board = React.createClass({
	render: function() {
		var lists = this.props.lists.map(list => {
				return (<ListContainer title={list} />);
		});
		var style = {
				display: "flex",
				flexWrap: "wrap"
		};
		return (
			<div style={style}>
				{lists}
				<form onSubmit={this.props.onAddSubmit} >
					<input type="text" onChange={this.props.onAddInputChanged}/>
					<input type="submit" text="Submit" />
				</form>
			</div>
		);		
	}
});

var Button = function(props) {
	return <button onClick={props.onClick}>{props.text}</button>;
};

module.exports = Board;

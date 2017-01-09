function Name(props){
	return(
		<p>{props.textToDisplay}
		</p>
		)
}

var MyForm = React.createClass({

	getInitialState: function() {
		return{
				value: 'test'
		}
	},

	handleChange: function(event){
		this.setState({
			value: event.target.value
		});
	},

	render: function(){
		return(
			<form>
				<label>Name:</label>
				<input type="test" value={this.state.value} onChange={this.handleChange} />
				<Name textToDisplay={this.state.value} />
			</form>
		)
	}
});

ReactDOM.render(
	<MyForm />, 
	document.getElementById('form-container')
	)
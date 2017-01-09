function BoilingVerdict(props){
	if(props.celcius >=100){
		return(
			<p>The water would boil at {props.celcius}</p>
			)
	}else{
		return(
			<p>The water would NOT boil at {props.celcius})</p>
		)
	}
}

var TemperatureInput = React.createClass({
	getInitalState: function(){
		return{
			value: ' '
		}
	},
	handleChange: function(event){
		this.setState({
			value: event.target.value
		})
	},

	render: function(){
		return(
			<div>
				<label>Enter temperature in question in {this.props.tUnits}</label>
				<input placeholder="Temp" value={this.state.value} onChange={this.handleChange} />
			</div>
		)
	}
});

var Calculator = React.createClass({
		render: function(){
			// var userEnteredTemp = this.state.value;
			return(
				<div>
					<TemperatureInput tUnits="Celcius"/>
					<TemperatureInput tUnits="Farenheiht"/>
					<BoilingVerdict celcius = {Number(1)} />
				</div>
			)
		}
})

ReactDOM.render(
	<Calculator />,
	document.getElementById('boiling')
	)
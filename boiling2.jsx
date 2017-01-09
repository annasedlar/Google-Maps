function BoilingVerdict(props){
	console.log(props.celcius)
	if(props.celcius >= 100){
		return(
			<p>The water would boil at {props.celcius}</p>
		)
	}else{
		return(
			<p>The water would NOT boil at {props.celcius}</p>
		)		
	}
}

var TemperatureInput = React.createClass({
	getInitialState: function() {
		return{value: ''}
	},	
	handleChange: function(event){
		// console.log(event.target.value);
		this.setState({
			value: event.target.value
		})
	},	
	render: function(){
		return(
			<div>
				<label>Enter temperature in question in {this.props.tUnits}</label>
				<input placeholder="Temp" value={this.state.valueå} onChange={this.handleChange} />			
			</div>
		)
	}
})

var Calculator = React.createClass({


	
	render: function(){
		// var userEnteredTemp = this.state.value;
		// if(userEnteredTemp >= 100){
		// 	var text = "Would boil"
		// }else{
		// 	var text = "Would not voil"
		// }

		return(
			<div>
				{ /* <p>{text}</p> */}
				<TemperatureInput tUnits="Celcius" />
				<TemperatureInput tUnits="Fahrenheit" />
				<BoilingVerdict celcius={Number(1)} />
			</div>
		)
	}
})


ReactDOM.render(
	<Calculator />,
	document.getElementById('boiling')
)
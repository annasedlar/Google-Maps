//Two utility functions to convert c to f and f to c
function toCelcius(f){
	return ((f - 32)*(5/9))
}

function toFahrenheit(c){
	return((c * 9/5) + 32)
}
//utility function that tries the conversion. If it can, it'll return the conversion rounded. 
//If it can't, it'll return an empty string.
function tryConvert(value, tUnit){
	var tryNumber = Number(value);
	if(isNaN(tryNumber)){
		//is NOT a valid # we can work with
		return '';
	}else{
		//user gave us a valid number (isNaN returned false). We can convert
		if(tUnit == 'c'){
			var convertedNumber = toFahrenheit(tryNumber); 
		}else{
			var convertedNumber= toCelcius(tryNumber);
		}
		return convertedNumber; 
	}
}
console.log(tryConvert(100, 'f'));
console.log(tryConvert(0, 'c'));


function BoilingVerdict(props){
	console.log(props.celcius)
	if(props.celcius >= 100){
		return(
			<p>The water would boil at {props.celcius} Celcius</p>
		)
	}else{
		return(
			<p>The water would NOT boil at {props.celcius} Celcius</p>
		)		
	}
}

var TemperatureInput = React.createClass({
	// getInitialState: function(){
	// 	return{value: ' '}
	// },
	handleChange: function(event){
		// this.setState({
		// 	value: event.target.value
		// })
		this.props.onChange(event.target.value);
	},

	render: function(){
		var value = this.props.value;
		var tUnits = this.props.tUnits; 
		return(
			<div>
				<label>Enter temperature in question in {tUnits}</label>
				<input placeholder="Temp" value={value} onChange={this.handleChange} />
			</div>
		)
	}
});

var Calculator = React.createClass({
	getInitialState: function() {
		return{
			value: 0,
			scale: 'c'
		}
	},
	handleCelciusChange: function(value){
		this.setState({
			scale: 'c',
			value
		})
	},
	handleFahrenheitChange: function(value){
		this.setState({
			scale: 'f',
			value
		})
	},

	render: function(){
		// var userEnteredTemp = this.state.value;
		var scale = this.state.scale; 
		var value = this.state.value; 
		if(this.state.scale == 'c'){
			var fTemp = tryConvert(value, 'c'); 
			var cTemp = value; 
		}else if (this.state.scale == 'f'){
			var fTemp = value; 
			var cTemp = tryConvert(value, 'f');
		}
		return(
			<div>
				<TemperatureInput tUnits="Celcius" value={cTemp} onChange={this.handleCelciusChange} />
				<TemperatureInput tUnits="Fahrenheit" value={fTemp} onChange={this.handleFahrenheitChange} />
				<BoilingVerdict celcius = {Number(cTemp)} />
			</div>
		)
	}
})

ReactDOM.render(
	<Calculator />,
	document.getElementById('boiling')
	)
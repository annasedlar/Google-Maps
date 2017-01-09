// ES5 way - we pass the createClass and object. Must have a render property
function GoogleCity(props){
	return(
		<div className="cityName">
			<table>
				<tr>
					<td>{props.cityObject.city}</td>
					<td>{props.cityObject.yearRank}</td>
				</tr>
			</table>
		</div>
		)
}

var Cities = React.createClass({
	render: function(){
		var cityRows = [];
		this.props.cities.map(function(currentCity, index){
			cityRows.push(<GoogleCity cityObject={currentCity} key={index} />)
		})
		return(
			<div>
				{cityRows}
			</div>
			)
	}
});

ReactDOM.render(
	<Cities cities={cities} />,
	document.getElementById('cities-container')
	)
// ES5 way - we pass the createClass and object. Must have a render property
var Cities = React.createClass({
	render: function(){
		return(
			<h1>Hello, World!!!</h1>
			)
	}
});

ReactDOM.render(
	<Cities />,
	document.getElementById('cities-container')
	)
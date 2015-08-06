'use strict'

import React from 'react';

export default class HelloReact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputText: ""
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({ inputText : e.currentTarget.value });
	}
	componentDidMount() {
		this.refs.world.getDOMNode().value = "";
	}
	componentDidUpdate() {
		console.log(this.refs.world.getDOMNode().value);
	}
	render() {
		return (<div>
			<pre>
				<code>
					If you are in watch mode here
				</code>
			</pre>
			<pre>
				<code>
					Type something on the text box below
				</code>
			</pre>
			<pre>
				<code>
					open up src/scripts/subfolder/hello.jsx
					and modify the render() function and see the hot reload in action right here
				</code>
			</pre>
			<pre>
				<code>
					notice how the state is retained !!!
				</code>
			</pre>
			<input type="text" onChange={this.handleChange} ref="world" />
			<ul>
				<li>Hello World</li>
				<li>{"Hello " + this.state.inputText}</li>
			</ul>
		</div>);
	}
};

import React from 'react';
import TabbedSelector from './TabbedSelector';
import Navbar from './Navbar';
import Main from './Main';
import { Link } from 'react-router';
// require("./Home.css");

export default class Home extends React.Component {
	
	render() {
		return (
			<div className="Home">
				{this.props.docs.map((doc, i) => <TabbedSelector {...this.props} key={i} i={i} doc={doc} />)}
		   		<Link to="view/es6">Enter</Link>
			</div>
		)	
	}
}
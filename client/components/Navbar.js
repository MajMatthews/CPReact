import React from 'react';
import { Link } from 'react-router';
// require("./Navbar.css");

export default class Navbar extends React.Component {
render() {
		const {doc, i} = this.props;

		return (
		    <div className="navbar">
		    <Link to={`/view/${doc.selector}`}>{doc.Title}</Link>
	      	</div>	
		)	
	}
}
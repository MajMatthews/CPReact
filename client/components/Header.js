import React from 'react';
import { Link } from 'react-router';
// require("./Header.css");

export default class Header extends React.Component {
	render() {
		return (
			<div className="header">
		        <h1>
          			<Link to="/">ContactPartners</Link>
        		</h1>
			</div>
		)	
	}
}
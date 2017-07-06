import React from 'react';
import { Link } from 'react-router';

export default class Details extends React.Component {
	render() {
		const {doc, i} = this.props;
		const pathToImage = doc.Graphic;
		
		return (
		    <div className="details">
		    	<h2>{doc.Title}</h2>
		    	<p>{doc.Content}</p>
				<img src={require('../images/' + pathToImage)} />
	      	</div>	
		)	
	}
}
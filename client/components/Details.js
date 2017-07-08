import React from 'react';
import { Link } from 'react-router';

export default class Details extends React.Component {
	render() {
		const {doc, i} = this.props;
		const pathToImage = doc.Graphic;
		let snippet, image;
		if (doc.Graphic !== undefined || null) {
			image =  <img src={require('../images/' + pathToImage)} />
		};

		if (doc.snippet !== undefined || null) {
			snippet =  <div className="snippet" dangerouslySetInnerHTML={ {__html: doc.snippet} } />
		};
		console.log('snippet', snippet, 'image', image);
		return (
		    <div className="details">
		    	<h2>{doc.Title}</h2>
		    	<div dangerouslySetInnerHTML={ {__html: doc.Content} } />
				{snippet}
				{image}
	      	</div>	
		)	
	}
}
import React from 'react';
import { Link } from 'react-router';
import Redirect from './Redirect';
import Playground from './Playground';
import Highlights from './Highlights';
import Detailed from './Detailed';


export default class Details extends React.Component {

	render() {
		const {doc, i} = this.props;
		const pathToImage = doc.Graphic;
		let image, HighlightsLinks, DetailedLinks;

		if (doc.Graphic !== undefined || null) {
			image = <img src={require('../images/' + pathToImage)} />
		};

		if (doc.Highlights !== undefined || null) {
			HighlightsLinks = <Highlights doc={doc} {...this.props} />
		};

		if (doc.Detailed !== undefined || null) {
			DetailedLinks = <Detailed doc={doc} {...this.props} />
		};


		return (
		    <div className="details">
		    	<h2>{doc.Title}</h2>
		    	<div dangerouslySetInnerHTML={ {__html: doc.Content} } />
				<Playground />
				{image}
				{HighlightsLinks}
				{DetailedLinks}
	      	</div>	
		)	
	}
}
import React from 'react';
import { Link } from 'react-router';

export default class TabbedSelector extends React.Component {
	render() {
		const {doc, i} = this.props;
		if (!doc.tab) {
			return null;
		}
		return (
		    <div className="tabs">
		    <Link to={`/view/${doc.selector}`}>{doc.tab}</Link>
	      	</div>	
		)	
	}
}
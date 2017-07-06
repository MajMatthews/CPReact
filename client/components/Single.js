import React from 'react';
import Details from './Details';
import Navbar from './Navbar';
// require('./Single.css');

export default class Single extends React.Component {
	render() {
		const { docId } = this.props.params;

	    const i = this.props.docs.findIndex((doc) => doc.selector === docId);
	    const doc = this.props.docs[i];
		return (
			<div className="single">
				<div className="menu">
					{this.props.docs.map((doc, i) => <Navbar {...this.props} key={i} i={i} doc={doc} />)}
				</div>
				<Details i={i} doc={doc} {...this.props} />
			</div>
		)	
	}
}
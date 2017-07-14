import React from 'react';
import { Link } from 'react-router';



export default class highlights extends React.Component {
	render() {
		return (
		    <div className="details">
				<Link to="https://www.npmjs.com/package/immutable" target="_blank">immutable": “^3.8.1</Link><br/>
				<Link to="https://momentjs.com/" target="_blank">moment": "^2.18.1</Link><br/>
				<Link to="https://libraries.io/npm/react/15.4.2" target="_blank">react": "^15.4.2</Link><br/>
				<Link to="https://libraries.io/npm/react-dom/15.4.2" target="_blank">react-dom": "^15.4.2</Link><br/>
				<Link to="https://libraries.io/npm/react-router" target="_blank">react-router": "^4.1.1</Link><br/>
				<Link to="https://www.npmjs.com/package/react-router-dom" target="_blank">react-router-dom": "^4.0.0</Link><br/>
				<Link to="https://www.npmjs.com/package/react-toolbox" target="_blank">react-toolbox": "^2.0.0-beta.7</Link><br/>
				<Link to="https://libraries.io/npm/reflux" target="_blank">reflux": "^6.4.1</Link><br/>
				<Link to="https://www.npmjs.com/package/npmdoc-json-server" target="_blank">json-server": "^0.9.6</Link><br/>
				<Link to="https://www.npmjs.com/package/postcss" target="_blank">postcss": "^5.2.16</Link><br/>
				<Link to="https://webpack.js.org/loaders/babel-loader/#install" target="_blank">webpack": "^2</Link><br/>
				<Link to="https://www.npmjs.com/package/eslint-config-majestic" target="_blank">Eslint": majestic-  based on airbnb lint guidelines</Link><br/>
				<Link to="https://bitbucket.org" target="_blank">Git</Link>
	      	</div>	
		)	
	}
}




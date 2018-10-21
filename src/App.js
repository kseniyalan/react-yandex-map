import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/App.less';

import Map from './Map.js';

const Marker = () => false;
Marker.propTypes = {
	lat: PropTypes.number.isRequired,
	lon: PropTypes.number.isRequired,
};

class App extends Component {
	state = {
		showMap: true,
	};

	render() {
		return (
			<div className="App">
				<button onClick={this.setState.bind(this, {showMap: !this.state.showMap}, null)}>Show/hide</button>
				{this.state.showMap ? (
					<Map>
						<Marker lat={55.76} lon={37.64}/>
					</Map>
				) : false}
			</div>
		);
	}
}

export default App;

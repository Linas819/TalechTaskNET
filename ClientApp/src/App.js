import React, { Component } from 'react';
import './custom.css'
import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';

export default class App extends Component {
  	render () {
		return (
			<div>
				<BrowserRouter>
					<Layout/>
				</BrowserRouter>
			</div>
		);
  	}
}

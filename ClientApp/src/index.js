//import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import configureStore from './components/configureStore';

const rootElement = document.getElementById('root');

ReactDOM.render(
		<Provider store={configureStore}>
				<App/>
		</Provider>,
    rootElement);

registerServiceWorker();


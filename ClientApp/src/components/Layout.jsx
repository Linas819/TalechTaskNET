import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import WareHouseData from './WareHouse/WareHouseData';
import WareHouseDataCreate from './WareHouse/Components/WareHouseDataCreate';
import WareHouseDataView from './WareHouse/Components/WareHouseDataView';
import WareHouseDataEdit from './WareHouse/Components/WareHouseDataEdit';
import { GetWareHouseData } from './WareHouse/WareHouseAction';
import ErrorModal from './ErrorModal';

class Layout extends Component {
	componentDidMount = () => {
		const url = window.location.href;
		if(url.includes("products")) {
			this.props.GetWareHouseData();
		}
	}
    render() {
        return(
            <div>
					<Switch>
						<Route path="/" component={Home} exact/>
						<Route path="/products" component={WareHouseData} exact/>
						<Route path="/products/create" component={WareHouseDataCreate} exact/>
						<Route path="/products/:id" component={WareHouseDataView} exact/>
						<Route path="/products/:id/edit" component={WareHouseDataEdit} exact/>
					</Switch>
					<ErrorModal/>
			</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        wareHouse: state.WareHouse
    };
}

export default withRouter(
    connect(
        mapStateToProps, { GetWareHouseData }
)(Layout));
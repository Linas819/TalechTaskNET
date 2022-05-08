import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react';
import { NavLink, withRouter } from 'react-router-dom';
import { GetWareHouseData } from './WareHouse/WareHouseAction';
import { connect } from 'react-redux';

class Home extends Component {
    onClickHandler = () => {
		this.props.GetWareHouseData();
	}
    render() {
        return(
            <div className='home'>
                <Header as='h1'>Warehouse</Header>
                <NavLink to={"/products"}>
                    <Button onClick={this.onClickHandler.bind(this)} color='green'>Products</Button>
                </NavLink>
		    </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        main: state.Main,
    };
}

export default withRouter(
    connect(
        mapStateToProps, { GetWareHouseData }
)(Home));
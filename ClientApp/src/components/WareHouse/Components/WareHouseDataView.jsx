import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Tab } from 'semantic-ui-react';
import { SetPageHeader } from '../../MainAction';
import PageHeader from '../../PageHeader';
import WareHouseDataProductDetails from './WareHouseDataProductDetails';
import WareHousePriceChart from './WareHousePriceChart';
import WareHouseQuantityChart from './WareHouseQuantityChart';
import { GetPriceHistoryData, GetQuantityHistoryData } from './../WareHouseAction';

const panes = [
    { menuItem: 'Product details', render: () => <WareHouseDataProductDetails/> },
    { menuItem: 'Price history', render: () => <WareHousePriceChart/> },
    { menuItem: 'Quantity History', render: () => <WareHouseQuantityChart/> }
];

class WareHouseDataView extends Component {
    componentDidMount = () => {
        this.props.SetPageHeader("View");
        const { id } = this.props.match.params;
        this.props.GetPriceHistoryData(id);
        this.props.GetQuantityHistoryData(id);
    }
    render() {
        return(
            <div>
                <PageHeader/>
                <Tab panes={panes} renderActiveOnly={true}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        main: state.Main,
        wareHouse: state.WareHouse
    };
}

export default withRouter(
    connect(
        mapStateToProps, { SetPageHeader, GetPriceHistoryData, GetQuantityHistoryData }
)(WareHouseDataView));
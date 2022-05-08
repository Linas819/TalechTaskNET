import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const options = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Quantity change'
    },
    xAxis: {
        categories: []
    },
    yAxis: {
        title: {
            text: 'Quantity'
        }
    },
    series: [
        {
            name: 'Quantity history',
            data: []
        }
    ]
  };

class WareHouseQuantityChart extends Component {
    /*componentDidMount = () => {
        const { quantityHistory } = this.props.wareHouse;
        options.series[0].data = quantityHistory.map((element) => {return element.quantity});
        options.xAxis.categories = quantityHistory.map((element) => {return element.modifiedDate});
    }*/
    render() {
        const { quantityHistory } = this.props.wareHouse;
        options.series[0].data = quantityHistory.map((element) => {return element.quantity});
        options.xAxis.categories = quantityHistory.map((element) => {return element.modifiedDate.replace("T", " ")});
        return(
            <HighchartsReact highcharts={Highcharts} options={options}/>
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
        mapStateToProps, { }
)(WareHouseQuantityChart));
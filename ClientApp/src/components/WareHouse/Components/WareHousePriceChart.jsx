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
        text: 'Price change'
    },
    xAxis: {
        categories: []
    },
    yAxis: {
        title: {
            text: 'Prices'
        }
    },
    series: [
        {
            name: 'Price history',
            data: []
        }
    ]
  };

class WareHousePriceChart extends Component {
    render() {
        const { priceHistory } = this.props.wareHouse;
        options.series[0].data = priceHistory.map((element) => {return element.price});
        options.xAxis.categories = priceHistory.map((element) => {return element.modifiedDate.replace("T", " ")});
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
)(WareHousePriceChart));
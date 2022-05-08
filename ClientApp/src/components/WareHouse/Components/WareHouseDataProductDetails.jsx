import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';

class WareHouseDataProdctDetails extends Component {
    render() {
        const { id } = this.props.match.params;
        const currentProduct = this.props.wareHouse.wareHouseData.find((element) => {return element.id === parseInt(id);});
        return(
            <List className='productDetailList'>
                <List.Item>
                    <b>Id:</b> {currentProduct === undefined ? "" : currentProduct.id}
                </List.Item>
                <List.Item>
                    <b>Name:</b> {currentProduct === undefined ? "" : currentProduct.name}
                </List.Item>
                <List.Item>
                    <b>EAN:</b> {currentProduct === undefined ? "" : currentProduct.ean}
                </List.Item>
                <List.Item>
                    <b>Type:</b> {currentProduct === undefined ? "" : currentProduct.type}
                </List.Item>
                <List.Item>
                    <b>Weight:</b> {currentProduct === undefined ? "" : currentProduct.weight}
                </List.Item>
                <List.Item>
                    <b>Color:</b> {currentProduct === undefined ? "" : currentProduct.color}
                </List.Item>
                <List.Item>
                    <b>Price:</b> {currentProduct === undefined ? "" : currentProduct.price}
                </List.Item>
                <List.Item>
                    <b>Quantity:</b> {currentProduct === undefined ? "" : currentProduct.quantity}
                </List.Item>
            </List>
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
        mapStateToProps, { }
)(WareHouseDataProdctDetails));
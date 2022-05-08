import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Input, Button } from 'semantic-ui-react';
import { UpdateWareHouseItemPrice } from './../WareHouseAction';

class WareHousePriceInput extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            id: props.data.id,
            price: props.data.price
        };
    }
    onChangeHandler = (event, data) => {
        this.setState({
            price: data.value
        });
    }
    onClickHandler = () => {
        this.props.UpdateWareHouseItemPrice(this.state.id, this.state.price);
    }
    render() {
        return(
            <>
                <Input value={this.state.price} type='number' step='0.01' min='0.00' onChange={this.onChangeHandler.bind(this)}/>
                <Button color='green' onClick={this.onClickHandler.bind(this)}>Save</Button>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        main: state.Main
    };
}

export default withRouter(
    connect(
        mapStateToProps, { UpdateWareHouseItemPrice }
)(WareHousePriceInput));
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Input, Button } from 'semantic-ui-react';
import { UpdateWareHouseItemQuantity } from './../WareHouseAction';

class WareHouseQuantityInput extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            id: props.data.id,
            quantity: props.data.quantity
        };
    }
    onChangeHandler = (event, data) => {
        this.setState({
            quantity: data.value
        });
    }
    onClickHandler = () => {
        this.props.UpdateWareHouseItemQuantity(this.state.id, this.state.quantity)
    }
    render() {
        return(
            <>
                <Input value={this.state.quantity} type='number'  min='0' onChange={this.onChangeHandler.bind(this)}/>
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
        mapStateToProps, { UpdateWareHouseItemQuantity }
)(WareHouseQuantityInput));
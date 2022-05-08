import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { SetPageHeader } from '../../MainAction';
import { Button, Input } from 'semantic-ui-react';
import PageHeader from '../../PageHeader';
import { PostWareHouseItem } from '../WareHouseAction';

class WareHouseDataCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            ean: 0,
            type: 0,
            weight: 0,
            color: "",
            price: 0,
            quantity: 0 
        }
    }
    componentDidMount = () => {
        this.props.SetPageHeader("Create");
    }
    onChangeHandler = (event, data) => {
        this.setState({
            [data.name]: data.value
        });
    }
    onClickHandler = () => {
        const { name, ean, type, weight, color, price, quantity } = this.state;
        const data = {
            name: name,
            ean: ean,
            type: type,
            weight: weight,
            color: color,
            price: price,
            quantity: parseInt(quantity)
        };
        this.props.PostWareHouseItem(data).then(() => {
            this.props.history.goBack();
        });
    }
    render() {
        return(
            <div className='createProduct'>
                <PageHeader/>
                <Input placeholder='Name' name='name' onChange={this.onChangeHandler.bind(this)}/><br/><br/>
                <Input placeholder='EAN' name='ean' onChange={this.onChangeHandler.bind(this)}/><br/><br/>
                <Input placeholder='Type' name='type' onChange={this.onChangeHandler.bind(this)}/><br/><br/>
                <Input placeholder='Weight' name='weight' onChange={this.onChangeHandler.bind(this)}/><br/><br/>
                <Input placeholder='Color' name='color' onChange={this.onChangeHandler.bind(this)}/><br/><br/>
                <Input placeholder='Price' name='price' onChange={this.onChangeHandler.bind(this)}/><br/><br/>
                <Input placeholder='Quantity' name='quantity' onChange={this.onChangeHandler.bind(this)}/><br/><br/>
                <Button color='green' content="Save" onClick={this.onClickHandler.bind(this)}/>
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
        mapStateToProps, { SetPageHeader, PostWareHouseItem }
)(WareHouseDataCreate));
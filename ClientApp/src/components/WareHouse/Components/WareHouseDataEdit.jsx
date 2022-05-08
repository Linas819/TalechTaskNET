import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { SetPageHeader } from '../../MainAction';
import { Button, Input } from 'semantic-ui-react';
import PageHeader from '../../PageHeader';
import { UpdateWareHouseItem } from './../WareHouseAction';

class WareHouseDataEdit extends Component {
    componentDidMount = () => {
        this.props.SetPageHeader("Edit");
    }
    onChangeHandler = (event, data) => {
        this.setState({
            [data.name]: data.value
        });
    }
    onClickHandler = () => {
        const { id } = this.props.match.params;
        const { name, ean, type, weight, color } = this.state;
        const data = {
            id: id,
            name: name,
            ean: ean,
            type: type,
            weight: weight,
            color: color,
        };
        this.props.UpdateWareHouseItem(data).then(() => {
            this.props.history.goBack();
        });
    }
    render() {
        const { id } = this.props.match.params;
        const currentProduct = this.props.wareHouse.wareHouseData.find((element) => {return element.id === parseInt(id);});
        return(
            <div className='productEdit'>
                <PageHeader/>
                <b>Name:</b>
                <Input value={currentProduct === undefined ? "" : currentProduct.name} name='name' onChange={this.onChangeHandler.bind(this)}/><br/><br/>
                <b>EAN:</b>
                <Input value={currentProduct === undefined ? "" : currentProduct.ean} name='ean' onChange={this.onChangeHandler.bind(this)}/><br/><br/>
                <b>Type:</b>
                <Input value={currentProduct === undefined ? "" : currentProduct.type} name='type' onChange={this.onChangeHandler.bind(this)}/><br/><br/>
                <b>Weight:</b>
                <Input value={currentProduct === undefined ? "" : currentProduct.weight} type='number'  name='weight' step='0.001' min='0.000' onChange={this.onChangeHandler.bind(this)}/><br/><br/>
                <b>Color:</b>
                <Input value={currentProduct === undefined ? "" : currentProduct.color} name='color' onChange={this.onChangeHandler.bind(this)}/><br/><br/>
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
        mapStateToProps, { SetPageHeader, UpdateWareHouseItem }
)(WareHouseDataEdit));
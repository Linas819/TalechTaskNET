import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { DeleteWareHouseItem } from '../WareHouseAction';

class WareHouseActionBtn extends Component {
    constructor(props)
    {
        super(props);
        this.state = {id: props.data.id};
    }
    onClickHandler = () => {
        this.props.DeleteWareHouseItem(this.state.id);
    }
    render() {
        return(
            <>
                <NavLink to={"/products/"+this.state.id}>
                    <Button color='grey'>VIEW</Button>
                </NavLink>
                <NavLink to={"/products/"+this.state.id+"/edit"}>
                    <Button color='blue'>EDIT</Button>
                </NavLink>
                <Button loading={this.props.main.isButtonLoading} disabled={this.props.main.isButtonLoading} color='red' onClick={this.onClickHandler.bind(this)}>DELETE</Button>
                
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
        mapStateToProps, { DeleteWareHouseItem }
)(WareHouseActionBtn));
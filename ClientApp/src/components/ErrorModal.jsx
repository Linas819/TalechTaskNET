import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react';
import { SetErrorModal } from './WareHouse/WareHouseAction';

class ErrorModal extends Component {
    onCloseHandler = () => {
        this.props.SetErrorModal(false, "");
    }
    render() {
        return(
            <Modal open={this.props.main.errorModal} closeIcon={true} onClose={this.onCloseHandler.bind(this)}>
                <Modal.Content>
                    {this.props.main.errorMsg}
                </Modal.Content>
            </Modal>
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
        mapStateToProps, { SetErrorModal }
)(ErrorModal));
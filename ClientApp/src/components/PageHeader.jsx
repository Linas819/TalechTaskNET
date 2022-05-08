import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header, Grid, Button } from 'semantic-ui-react';

class PageHeader extends Component {
    render() {
        const { pageHeader } = this.props.main;
        return(
            <Grid columns={3} className='home'>
                <Grid.Column>
                    { pageHeader === "Products" && 
                        <NavLink to={"/products/create"}>
                            <Button color='green'>Create Product</Button>
                        </NavLink> }
                </Grid.Column>
                <Grid.Column>
                    <Header as='h1'>{pageHeader}</Header>
                </Grid.Column>
                <Grid.Column>
                    {/*Atsijungti*/}
                </Grid.Column>
            </Grid>
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
        mapStateToProps, {}
)(PageHeader));
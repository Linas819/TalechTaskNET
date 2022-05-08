import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';
import WareHouseActionBtn from './Features/WareHouseActionBtn';
import ErrorModal from '../ErrorModal';
import { SetPageHeader } from '../MainAction';
import PageHeader from '../PageHeader';
import WareHousePriceInput from './Features/WareHousePriceInput';
import WareHouseQuantityInput from './Features/WareHouseQuantityInput';

const columnDefs = [
    { headerName: "Name", field: "name", filter: true, sortable: true, flex: 1, resizable: true, floatingFilter: true },
    { headerName: "EAN", field: "ean", filter: true, sortable: true, flex: 1, resizable: true, floatingFilter: true },
    { headerName: "Type", field: "type", filter: false, sortable: true, flex: 1, resizable: true, floatingFilter: false, valueFormatter: typeFormatter },
    { headerName: "Weight (g)", field: "weight", filter: true, sortable: true, flex: 1, resizable: true, floatingFilter: true },
    { headerName: "Color", field: "color", filter: true, sortable: true, flex: 1, resizable: true, floatingFilter: true },
    { headerName: "Price", field: "price", filter: true, sortable: true, flex: 2, resizable: true, floatingFilter: true, cellRenderer: 'wareHousePriceInput' },
    { headerName: "Quantity", field: "quantity", filter: true, sortable: true, flex: 2, resizable: true, floatingFilter: true, cellRenderer: 'wareHouseQuantityInput' },
    { headerName: "Actions", field: "action", filter: false, sortable: false, flex: 2, resizable: false, cellStyle: {textAlign: "center"}, cellRenderer: 'wareHouseActionBtn'  }
];

class WareHouseData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frameworkComponents: {
                wareHouseActionBtn: WareHouseActionBtn,
                wareHouseQuantityInput: WareHouseQuantityInput,
                wareHousePriceInput: WareHousePriceInput
            }
        };
    }
    componentDidMount = () => {
        this.props.SetPageHeader("Products")
    }
    onGridReady = (params) => {
        this.gridApi = params.api;
    }
    getRowStyle = (params) => {
        if(params.data.quantity === 0)
            return { background: 'yellow' }
    }
    render() {
        return(
            <div>
                <PageHeader/>
                <div className="ag-theme-alpine" style={{height: 400, width: "100%"}}>
                    <AgGridReact
                        rowData={this.props.wareHouse.wareHouseData}
                        columnDefs={columnDefs}
                        onGridReady={this.onGridReady.bind(this)}
                        overlayNoRowsTemplate="No warehouse products"
                        frameworkComponents={this.state.frameworkComponents}
                        getRowStyle={this.getRowStyle}
                        defaultColDef={{
                            floatingFilterComponentParams: {suppressFilterButton:true}
                        }}>
                    </AgGridReact>
                </div>
                <ErrorModal/>
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

function typeFormatter(params) {
    let formattedValue = "";
    switch(params.value) {
        case 0:
            formattedValue = "Food product";
            break;
        default:
            formattedValue = "Product";
            break;
    }
    return formattedValue;
}

export default withRouter(
    connect(
        mapStateToProps, { SetPageHeader }
)(WareHouseData));
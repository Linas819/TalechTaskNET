import axios from "axios";
import { SET_EROR_MODAL } from "../MainReducer";
import { SET_WAREHOUSE_DATA, SET_WAREHOUSE_INITIAL_STATE, SET_PRICE_HISTORY_DATA, SET_QUANTITY_HISTORY_DATA } from "./WareHouseReducer";

export const GetWareHouseData = () => {
    return async(dispatch) => {
        let result = await axios.get(`api/warehouse/`);
        dispatch({ type: SET_WAREHOUSE_DATA, wareHouseData: result.data.data });
    }
}

export const GetPriceHistoryData = (id) => {
    return async(dispatch) => {
        let result = await axios.get(`api/warehouse/pricehistory`, { params: {
            id: id
        }});
        dispatch({ type: SET_PRICE_HISTORY_DATA, priceHistory: result.data.data });
    }
}

export const GetQuantityHistoryData = (id) => {
    return async(dispatch) => {
        let result = await axios.get(`api/warehouse/quantityhistory`, { params: {
            id: id
        }});
        dispatch({ type: SET_QUANTITY_HISTORY_DATA, quantityHistory: result.data.data });
    }
}

export const DeleteWareHouseItem = (id) => {
    return async(dispatch) => {
        let result = await axios.delete(`api/warehouse`, { params: {
                id: id
            }
        });
        if(result.data.success) {
            dispatch(GetWareHouseData());
        } else {
            dispatch(SetErrorModal(true, result.data.msg));
        }
    }
}

export const PostWareHouseItem = (data) => {
    return async (dispatch) => {
        let result = await axios.post(`api/warehouse`, data);
        if(result.data.success) {
            dispatch(GetWareHouseData());
        } else {
            dispatch(SetErrorModal(true, result.data.msg));
        }
    }
}

export const UpdateWareHouseItem = (data) => {
    return async (dispatch) => {
        let result = await axios.put(`api/warehouse`, data);
        if(result.data.success) {
            dispatch(GetWareHouseData());
        } else {
            dispatch(SetErrorModal(true, result.data.msg));
        }
    }
}

export const UpdateWareHouseItemPrice = (id, price) => {
    return async (dispatch) => {
        const data = {
            id: id,
            price: price
        }
        let result = await axios.put(`api/warehouse/price`, data);
        if(result.data.success) {
            dispatch(GetWareHouseData());
        } else {
            dispatch(SetErrorModal(true, result.data.msg));
        }
    }
}

export const UpdateWareHouseItemQuantity = (id, quantity) => {
    return async (dispatch) => {
        const data = {
            id: id,
            quantity: quantity
        }
        let result = await axios.put(`api/warehouse/quantity`, data);
        if(result.data.success) {
            dispatch(GetWareHouseData());
        } else {
            dispatch(SetErrorModal(true, result.data.msg));
        }
    }
}

export const ClearState = () => {
    return (dispatch) => {
        dispatch({type: SET_WAREHOUSE_INITIAL_STATE});
    }
}

export const SetErrorModal = (errorModal, errorMsg) => {
    return (dispatch) => {
        dispatch({ type: SET_EROR_MODAL, errorModal: errorModal, errorMsg: errorMsg });
    }
}
export const SET_WAREHOUSE_DATA = "SET_WAREHOUSE_DATA";
export const SET_PRICE_HISTORY_DATA = "SET_PRICE_HISTORY_DATA";
export const SET_QUANTITY_HISTORY_DATA = "SET_QUANTITY_HISTORY_DATA";
export const SET_WAREHOUSE_INITIAL_STATE = "SET_WAREHOUSE_INITIAL_STATE";

const initialState = {
    wareHouseData: [],
    priceHistory: [],
    quantityHistory: []
}

export const WareHouseReducer = (state, action) => {

    state = state || initialState;

    switch(action.type){
        case SET_WAREHOUSE_DATA:
            state = {
                ...state,
                wareHouseData: action.wareHouseData
            };
            break;
        case SET_PRICE_HISTORY_DATA:
            state = {
                ...state,
                priceHistory: action.priceHistory
            };
            break;
        case SET_QUANTITY_HISTORY_DATA:
            state = {
                ...state,
                quantityHistory: action.quantityHistory
            };
            break;
        case SET_WAREHOUSE_INITIAL_STATE:
            state = initialState
            break;
        default:
            break;
    };
    return state;
};
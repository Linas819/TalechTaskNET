export const SET_BUTTON_LOADING = "SET_BUTTON_LOADING";
export const SET_INITIAL_MAIN_STATE = "SET_INITIAL_MAIN_STATE";
export const SET_EROR_MODAL = "SET_EROR_MODAL";
export const SET_PAGE_HEADER = "SET_PAGE_HEADER";

const initialState = {
    isButtonLoading: false,
    errorModal: false,
    errorMsg: "",
    pageHeader: "Sandėlys"
}

export const MainReducer = (state, action) => {

    state = state || initialState;
    switch(action.type){
        case SET_BUTTON_LOADING:
            state = {
                ...state,
                isButtonLoading: action.loading
            };
            break;
        case SET_EROR_MODAL:
            state = {
                ...state,
                errorModal: action.errorModal,
                errorMsg: action.errorMsg
            };
            break;
        case SET_PAGE_HEADER:
            state = {
                ...state,
                pageHeader: action.pageHeader
            };
            break;
        case SET_INITIAL_MAIN_STATE:
            state = initialState;
            break;
        default:
            break;
    };
    return state;
};
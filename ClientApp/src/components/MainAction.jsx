import { SET_PAGE_HEADER } from "./MainReducer";

export const SetPageHeader = (pageHeader) => {
    return (dispatch) => {
        dispatch({ type: SET_PAGE_HEADER, pageHeader });
    }
}
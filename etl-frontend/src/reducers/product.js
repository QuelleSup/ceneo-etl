import {FETCH_PRODUCTS_DETAILS_SUCCESS} from "../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_DETAILS_SUCCESS:
            return {...state, product: action.payload};
    }
    return state
}

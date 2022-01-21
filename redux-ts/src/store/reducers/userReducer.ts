import {UserAction, UserActionTypes, UsersState} from "../../types/user";

const initialState: UsersState = {
    users: [],
    loading: false,
    error: null
}

export function userReducer(state = initialState, action: UserAction): UsersState {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {loading: true, error: null, users: []}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []}
        default: return state
    }
}
/*
   userinfo 文件保证redcers 里面的纯净；
 */
import * as actionTypes from '../constantTypes/userinfo'

const initialState = {}

export default function userinfo (state = initialState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_UPDATE:
            return action.data;
        default:
            return state
    }
}
import {environment} from "../environment/environment";
import axios from "axios";
import {SET_PEOPLE_LIST_DATA, SET_LOADING_STATE, SET_CREATE_PERSON_REQUEST_STATUS} from "./actionType";

export const getPeopleList = () => (dispatch) => {
    dispatch({
        type: SET_LOADING_STATE,
        payload: true
    })
    axios.get(`${environment.URL}/people`).then((res) => {
        dispatch({
            type: SET_PEOPLE_LIST_DATA,
            payload: res.data
        })
        dispatch({
            type: SET_LOADING_STATE,
            payload: false
        })
        dispatch({
            type: SET_CREATE_PERSON_REQUEST_STATUS,
            payload: false
        })
    }).catch((e) => {
        console.log(e)
    })
}

export const createPerson = (payload) => (dispatch) => {
    dispatch({
        type: SET_LOADING_STATE,
        payload: true
    })
    axios.post(`${environment.URL}/people`, payload).then((res) => {
        dispatch({
            type: SET_CREATE_PERSON_REQUEST_STATUS,
            payload: true
        })
    }).catch((e) => {
        console.log(e)
    })

}
import expect from "expect";
import rootReducer, {initialState} from "./reducer";
import {SET_CREATE_PERSON_REQUEST_STATUS, SET_LOADING_STATE, SET_PEOPLE_LIST_DATA} from "./actionType";

describe("store reducer", () => {
    let mock_initial_state;

    beforeEach(() => {
        mock_initial_state = initialState
    });

    it("should return the initial state", () => {
        expect(rootReducer(undefined, {type: ""})).toEqual(
            mock_initial_state
        );
    });

    it("should return loading value", () => {
        const action = {
            type: SET_LOADING_STATE,
            payload: true,
        };
        expect(rootReducer(mock_initial_state, action)).toEqual({
            ...mock_initial_state,
            loading: true,
        });
    });

    it("should return people list data", () => {
        const mock_payload = [{'test': 'test'}]
        const action = {
            type: SET_PEOPLE_LIST_DATA,
            payload: mock_payload,
        };
        expect(rootReducer(mock_initial_state, action)).toEqual({
            ...mock_initial_state,
            people: mock_payload,
        });
    });

    it("should return create person request status", () => {
        const mock_payload = true
        const action = {
            type: SET_CREATE_PERSON_REQUEST_STATUS,
            payload: mock_payload,
        };
        expect(rootReducer(mock_initial_state, action)).toEqual({
            ...mock_initial_state,
            createPersonRequestStatus: mock_payload,
        });
    });

});

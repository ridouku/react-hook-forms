import axios from "axios";
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk'
import {createPerson, getPeopleList, sendText} from "./actionCreators";

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore();

describe("action creator test", () => {
    beforeEach(() => {
        store.clearActions();
    });

    it("should send get request and return a list of people", async () => {
        axios.get = jest.fn().mockResolvedValue({data: [{'test': 'test'}]});
        store.dispatch(getPeopleList())
        expect(axios.get).toHaveBeenCalled();
        await axios.get().then((response) => expect(response.data.length).toEqual(1))
    });

    it("should send get request and throw error", async () => {
        axios.get = jest.fn().mockRejectedValue(new Error("error"));
        store.dispatch(getPeopleList())
        expect(axios.get).toHaveBeenCalled();
    });

    it("should send post create request and create a person record", async () => {
        axios.post = jest.fn().mockResolvedValue({data: {'response': 'ok'}});
        const payload = {
            "name": "test",
            "birth_year": "1995",
            "identification": "1727312312"
        }
        store.dispatch(createPerson(payload))
        expect(axios.post).toHaveBeenCalled();
        await axios.post().then((response) => expect(response.data.response).toEqual('ok'))
    });

    it("should send post request and throw error while try to create a new person record", async () => {
        axios.post = jest.fn().mockRejectedValue(new Error("error"));
        store.dispatch(createPerson({}))
        expect(axios.post).toHaveBeenCalled();
    });
})
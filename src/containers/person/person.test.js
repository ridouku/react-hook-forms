import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "mutationobserver-shim";
import {initialState} from "../../store/reducer";
import {mapDispatchToProps, mapStateToProps, Person} from "./person";
import {PersonForm} from "../../components/personForm/personForm";
import {ActionButtons} from "../../components/actionButton/actionButton";
import {PeopleInformation} from "../../components/peopleInformation/peopleInformation";

configure({ adapter: new Adapter() });

describe("Person Stateful Component", () => {
    let wrapper;
    let props;
    let mock_initial_state;
    let dispatch;
    let mapDispatchProps;

    beforeEach(() => {
        dispatch = jest.fn();
        mapDispatchProps = mapDispatchToProps(dispatch);
        props = {
            getPeopleList: jest.fn(),
            createPerson: jest.fn(),
            loading: false,
            people: [],
            createPersonRequestStatus: false
        };
        mock_initial_state = initialState;
        wrapper = mount(<Person {...props} />);
        wrapper.setProps({ ...props });
    });

    it("should render person component", () => {
        expect(wrapper.find(PersonForm).length).toEqual(1);
        expect(wrapper.find(ActionButtons).length).toEqual(1);
        expect(wrapper.find(PeopleInformation).length).toEqual(1);
    });

    it("should dispatch getPeopleList", () => {
        mapDispatchProps.getPeopleList();
        expect(dispatch).toHaveBeenCalled();
    });

    it("should dispatch createPerson", () => {
        const payload = {
            name: "test"
        }
        mapDispatchProps.createPerson(payload);
        expect(dispatch).toHaveBeenCalled();
    });

    it("should get initial state of loading property", () => {
        expect(mapStateToProps(mock_initial_state).loading).toEqual(false);
    });

    it("should get initial state of people property", () => {
        expect(mapStateToProps(mock_initial_state).people).toEqual([]);
    });

    it("should get initial state of createPersonRequestStatus property", () => {
        expect(mapStateToProps(mock_initial_state).createPersonRequestStatus).toEqual(false);
    });

});

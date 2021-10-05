import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { act } from "react-dom/test-utils";
import {PersonState} from "./personState";
import "mutationobserver-shim";

configure({ adapter: new Adapter() });

describe("Person state", () => {
    let wrapper;
    let props;

    function mountComponent() {
        const PersonComponent = (props) => {
            const useProps = PersonState(props);

            return <div {...useProps} />;
        };

        wrapper = mount(<PersonComponent {...props} />);
    }

    beforeEach(() => {
        props = {
            getPeopleList: jest.fn(),
            createPerson: jest.fn(),
            loading: false,
            people: [],
            createPersonRequestStatus: false
        };

        mountComponent();
    });

    const assertSpyOnGetPeopleList = ()=>{
        const spyGetPeopleList = jest.spyOn(
            props,
            "getPeopleList"
        );
        expect(spyGetPeopleList).toHaveBeenCalled();
    }

    it("should render person component, and call get people list", () => {
        expect(wrapper).toBeTruthy();
        assertSpyOnGetPeopleList();
    });

    it("should call submit and dispatch create person", () => {
        const spyCreatePerson = jest.spyOn(
            props,
            "createPerson"
        );
        act(() => {
            wrapper
                .childAt(0)
                .prop("actions")
                .handlePersonSubmit({});
        });
        wrapper.update();
        expect(spyCreatePerson).toHaveBeenCalled();
        expect(spyCreatePerson).toHaveBeenCalledWith({});
    });

    it('should test change value of createPersonRequestStatus and call ', ()=>{
        wrapper.setProps({
            ...props,
            createPersonRequestStatus: true
        });
        wrapper.update();
        assertSpyOnGetPeopleList();
    })
});

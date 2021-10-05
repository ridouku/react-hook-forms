import React from 'react';
import {ActionButtons} from "./actionButton";
import {configure, shallow} from "enzyme";
import {Button, CircularProgress} from "@material-ui/core";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

describe('action button component', () => {

    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            onSave: jest.fn(),
            disabled: false,
        };
        wrapper = shallow(<ActionButtons {...props}/>)
    })

    it("should render an ActionButtons component", () => {
        expect(wrapper.find(Button).length).toEqual(1);
        expect(wrapper.find(CircularProgress).length).toEqual(0);
    });

    it("should render CircularProgress component, while is waiting for request response", () => {
        wrapper.setProps({
            ...props,
            disabled: true
        })
        expect(wrapper.find(CircularProgress).length).toEqual(1);
    });
})
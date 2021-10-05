import React from 'react';
import { configure, shallow } from "enzyme";
import {Divider, Grid, Typography} from "@material-ui/core";
import Adapter from "enzyme-adapter-react-16";
import {PeopleInformation} from "./peopleInformation";

configure({ adapter: new Adapter() });

describe('people information component', ()=>{

    let wrapper;
    let props;

    beforeEach(()=>{
        props = {
            people: [],
        };
        wrapper= shallow(<PeopleInformation {...props}/>)
    })
    const assertPeopleInformationComponents = (gridNumberAssert)=>{
        expect(wrapper.find(Typography).length).toEqual(1);
        expect(wrapper.find(Divider).length).toEqual(1);
        expect(wrapper.find(Grid).length).toEqual(gridNumberAssert);
    }
    it("should render an PeopleInformation component", () => {
        assertPeopleInformationComponents(8);
    });

    it("should render people information detail", () => {
        wrapper.setProps({
            people: [
                {
                    name: "test",
                    birth_year: "birth_year",
                    identification: "identification",
                }
            ],
        })
        assertPeopleInformationComponents(12);
    });
})
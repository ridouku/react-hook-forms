import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import {FormProvider, useForm} from "react-hook-form";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import "mutationobserver-shim";
import {act} from "react-dom/test-utils";
import {PersonForm} from "./personForm";

configure({adapter: new Adapter()});

describe("person form", () => {
    let form;
    let errorsMock;

    beforeEach(() => {
        const PersonFormComponent = () => {
            form = useForm({
                mode: "all"
            })
            const {formState: {errors}} = form;
            errorsMock = errors

            return (
                <FormProvider {...form}>
                    <PersonForm errors={errors}/>
                </FormProvider>
            );
        };

        render(<PersonFormComponent/>);
    });

    const fireInputRulesErrors = async (label, inputValue) => {
        setInputValue(label, inputValue)

        await act(async () => {
            await form.trigger();
        });
    }

    const setInputValue = (label, inputValue) => {
        fireEvent.input(
            screen.getByLabelText(
                new RegExp("" + label + "", "i")
            ),
            {
                target: {
                    value: inputValue,
                },
            }
        );
    }

    const assertFormValues = (targets) => {
        expect(form.getValues().name).toBe(targets.name);
        expect(form.getValues().birth_year).toBe(targets.birth_year);
        expect(form.getValues().identification).toBe(targets.identification);
    }

    it("should test initial values in form", () => {
        const targets = {
            name: '',
            birth_year: '',
            identification: ''
        }
        assertFormValues(targets)
    });

    it("should test required rule of inputs", async () => {
        await act(async () => {
            await form.trigger();
        });
        await waitFor(() => expect(errorsMock.name).toBeTruthy());
        await waitFor(() => expect(errorsMock.birth_year).toBeTruthy());
        await waitFor(() => expect(errorsMock.identification).toBeTruthy());
    });

    it("should test maxLength at birth_year", async () => {
        await fireInputRulesErrors('Birth Year', '190000')
        await waitFor(() => expect(errorsMock.birth_year).toBeTruthy());
    });

    it("should test maxLength at identification", async () => {
        await fireInputRulesErrors('Identification', '1723123123123213')
        await waitFor(() => expect(errorsMock.identification).toBeTruthy());
    });

    it("should test input without errors", async () => {
        const targets = {
            name: 'Testing',
            birth_year: '1902',
            identification: '1234567890'
        }
        setInputValue('Identification', '1234567890')
        setInputValue('Birth Year', '1902')
        setInputValue('Name', 'Testing')
        await act(async () => {
            await form.trigger();
        });
        await waitFor(() => expect(errorsMock.name).toBe(undefined));
        await waitFor(() => expect(errorsMock.birth_year).toBe(undefined));
        await waitFor(() => expect(errorsMock.identification).toBe(undefined));
        assertFormValues(targets)
    });

});

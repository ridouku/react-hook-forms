import {useForm} from "react-hook-form";
import {useEffect} from "react";


export const PersonState = (props) => {
    const methods = useForm({
        mode: "all"
    })
    const { handleSubmit, formState: { errors }} = methods;
    const handlePersonSubmit = (formData) => {
        props.createPerson(formData)
    }

    useEffect(() => {
        props.getPeopleList()
    }, [])

    useEffect(() => {
        if(props.createPersonRequestStatus){
            methods.reset(
                {
                    name: "",
                    birth_year: "",
                    identification: "",
                    lastname: ""
                }
            );
            props.getPeopleList()
        }
    },[ props.createPersonRequestStatus])

    return {
        methods,
        errors,
        actions: {
            handlePersonSubmit,
            handleSubmitForm: handleSubmit
        },
    }
}
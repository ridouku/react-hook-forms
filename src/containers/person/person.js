import {connect} from "react-redux";
import React from "react";
import {PersonState} from "./state/personState";
import {Card, Container, Grid} from "@material-ui/core";
import {createPerson, getPeopleList} from "../../store/actionCreators";
import {PeopleInformation} from "../../components/peopleInformation/peopleInformation";
import {FormProvider} from "react-hook-form";
import {ActionButtons} from "../../components/actionButton/actionButton";
import {PersonForm} from "../../components/personForm/personForm";

export const Person = (props) => {
    const {
        methods,
        actions,
        errors
    } = PersonState(props)

    return (
        <React.Fragment>
            <div className="App">
                <header className="App-header">
                    <h1>Ioet React Exercise</h1>
                    <Container fixed>
                        <FormProvider {...methods} >
                            <Grid container spacing={2}>
                                <Grid item xs={12} lg={6}>
                                    <Card>
                                        <PersonForm errors={errors}/>
                                        <ActionButtons onSave={actions.handleSubmitForm(actions.handlePersonSubmit)}
                                                       disabled={props.loading}/>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <PeopleInformation people={props.people} style={{paddingTop: 10}}/>
                                </Grid>
                            </Grid>
                        </FormProvider>
                    </Container>
                </header>
            </div>

        </React.Fragment>
    )
}

export const mapStateToProps = (state) => (
    {
        loading: state.loading,
        people: state.people,
        createPersonRequestStatus: state.createPersonRequestStatus
}
)

export const mapDispatchToProps = (
    dispatch
) => (
    {
        getPeopleList: () => dispatch(getPeopleList()),
        createPerson: (payload)=> dispatch(createPerson(payload))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Person);
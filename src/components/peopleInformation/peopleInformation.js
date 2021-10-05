import React from 'react';
import {Card, CardContent, Divider, Grid, Typography} from "@material-ui/core";

export const PeopleInformation = (props) => {

    return (
        <React.Fragment>
            <Card>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography> Here is your list of people</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider/>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={3}>Name</Grid>
                                <Grid item xs={3}>Lastname</Grid>
                                <Grid item xs={3}>Birth Year</Grid>
                                <Grid item xs={3}>Identification</Grid>
                            </Grid>
                            {
                                props.people.map((person, index) => {
                                    return (
                                        <Grid container key={`containerDetail${index}`} spacing={2}>
                                            <Grid item xs={3} key={`person${index}`}>{person.name}</Grid>
                                            <Grid item xs={3} key={`lastname${index}`}>{person.lastname}</Grid>
                                            <Grid item xs={3} key={`birth_year${index}`}>{person.birth_year}</Grid>
                                            <Grid item xs={3}
                                                  key={`identification${index}`}>{person.identification}</Grid>
                                        </Grid>)
                                })
                            }
                        </Grid>

                    </Grid>
                </CardContent>
            </Card>
        </React.Fragment>
    );

}

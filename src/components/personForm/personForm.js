import React from 'react';
import {
    FormControl,
    FormHelperText,
    Grid,
    Typography,
    TextField,
    makeStyles,
    CardContent,
    Card
} from "@material-ui/core";
import {Controller, useFormContext} from "react-hook-form";
import {Divider} from '@material-ui/core';
import {getErrorMessage} from "../../commons/formErrors";

const useStyles = makeStyles(() => ({
    root: {
        '& .MuiFilledInput-input': {
            backgroundColor: 'white',
        }
    },
}));

export const PersonForm = (props) => {
    const classes = useStyles();
    const { control } = useFormContext()

    return (
        <React.Fragment>
            <CardContent>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Typography> Hello, fill the next information</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider/>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl
                            variant="outlined"
                            error={!!props.errors.name}
                            fullWidth
                        >
                            <Controller
                                name="name"
                                control={control}
                                defaultValue=""
                                rules={{required: true}}
                                render={({field: {onChange, value}}) => (
                                    <TextField
                                        id={'name'}
                                        label="Name"
                                        variant="filled"
                                        value={value}
                                        onChange={onChange}

                                    />
                                )}
                            />
                            <FormHelperText error={!!props.errors.name}>
                                {!!props.errors.name && getErrorMessage(props.errors.name)}
                            </FormHelperText>
                        </FormControl>
                        <FormControl
                            variant="outlined"
                            error={!!props.errors.lastname}
                            fullWidth
                        >
                            <Controller
                                name="lastname"
                                control={control}
                                defaultValue=""
                                rules={{required: true}}
                                render={({field: {onChange, value}}) => (
                                    <TextField
                                        id={'Lastname'}
                                        label="Lastname"
                                        variant="filled"
                                        value={value}
                                        onChange={onChange}

                                    />
                                )}
                            />
                            <FormHelperText error={!!props.errors.lastname}>
                                {!!props.errors.lastname && getErrorMessage(props.errors.lastname)}
                            </FormHelperText>
                        </FormControl>
                        <FormControl
                            variant="outlined"
                            error={!!props.errors.birth_year}
                            fullWidth
                        >
                            <Controller
                                name="birth_year"
                                control={control}
                                defaultValue=""
                                rules={{required: true, maxLength: 4}}
                                render={({field: {onChange, value}}) => (
                                    <TextField
                                        id={'birth_year'}
                                        label="Birth Year"
                                        variant="filled"
                                        value={value}
                                        onChange={onChange}
                                    />
                                )}
                            />
                            <FormHelperText error={!!props.errors.birth_year}>
                                {!!props.errors.birth_year && getErrorMessage(props.errors.birth_year)}
                            </FormHelperText>
                        </FormControl>
                        <FormControl
                            variant="outlined"
                            error={!!props.errors.identification}
                            fullWidth
                        >
                            <Controller
                                name="identification"
                                control={control}
                                defaultValue=""
                                rules={{required: true, maxLength: 10}}
                                render={({field: {onChange, value}}) => (
                                    <TextField
                                        id={'identification'}
                                        label="Identification"
                                        variant="filled"
                                        value={value}
                                        onChange={onChange}
                                    />
                                )}
                            />
                            <FormHelperText error={!!props.errors.identification}>
                                {!!props.errors.identification && getErrorMessage(props.errors.identification)}
                            </FormHelperText>
                        </FormControl>
                    </Grid>

                </Grid>
            </CardContent>
        </React.Fragment>
    );

}

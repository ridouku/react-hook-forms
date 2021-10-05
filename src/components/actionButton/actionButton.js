import React from "react";
import {Box, Button, Grid, CircularProgress} from "@material-ui/core";
import {Save} from "react-feather";


export const ActionButtons = (props) => {
    return (
        <React.Fragment>
            <Grid
                container
                alignItems="flex-start"
                justify="flex-end"
            >
                <Grid item xs={4} style={{padding: 15}}>
                    <Box pt={4}>
                        <Button
                            disabled={props.disabled}
                            size="large"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={props.onSave}
                            startIcon={<Save/>}
                        >
                            Save
                            {props.disabled && (
                                <Box ml={1} display="flex" alignItems="center">
                                    <CircularProgress color="inherit" size={20}/>
                                </Box>
                            )}
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

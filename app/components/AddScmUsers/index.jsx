import React from 'react';
import PropTypes from 'prop-types';

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Grid from '@material-ui/core/Grid';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import IconCard from "components/Cards/IconCard.jsx";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// icons
import { FaRegClone as GroupIcon } from "react-icons/fa"


import addclientpolicyStyle from "assets/jss/material-dashboard-pro-react/components/addclientpolicyStyle";

class AddClientPolicy extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <GridContainer direction="column" justify="center">
                <ItemGrid>
                    <GridContainer justify="center">
                        <ItemGrid xs={6}>
                            <form>
                                
                                <Grid container justify="space-around">
                                    <Grid item xs={11} sm={11} md={10}>
                                        <CustomInput
                                            id="policyname"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                value: this.props.values.policyname ? this.props.values["policyname"] : '',
                                                placeholder: "Policy Name",
                                                onChange: this.props.onChange('policyname')
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={11} sm={11} md={10}>
                                        <CustomInput
                                            id="description"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                value: this.props.values.description ? this.props.values["description"] : '',
                                                placeholder: "Description",
                                                onChange: this.props.onChange('description')
                                            }}
                                        />
                                    </Grid>
                                   
                                    {/* <Grid item xs={11} sm={11} md={5} />
                                    <Grid item xs={11} sm={11} md={11}>
                                        <center><Button onClick={this.props.onUpload} color="warning">Add</Button></center>
                                    </Grid> */}
                                </Grid>
                               
                            </form>
                        </ItemGrid>
                    </GridContainer>
                </ItemGrid>
                <ItemGrid>
                    <IconCard
                        icon={GroupIcon}
                        title="List of Device Permissions"
                        iconColor="red"
                        content={
                            <Table className={classes.table}>
                                <TableHead>
                                <TableRow>
                                    <TableCell>Device Permissions</TableCell>
                                    {/* <TableCell align="right">Calories</TableCell> */}
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {/* {rows.map(row => (
                                    <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                ))} */}
                                </TableBody>
                            </Table>
                        }
                    />

                </ItemGrid>
                <ItemGrid>
                    <IconCard
                        icon={GroupIcon}
                        title="List of Configuration Permissions"
                        iconColor="red"
                        content={
                            <Table className={classes.table}>
                                <TableHead>
                                <TableRow>
                                    <TableCell>Configuration Permissions</TableCell>
                                    {/* <TableCell align="right">Calories</TableCell> */}
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {/* {rows.map(row => (
                                    <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                ))} */}
                                </TableBody>
                            </Table>
                        }
                    />

                </ItemGrid>
                <ItemGrid>
                    <GridContainer justify="center">
                    <ItemGrid xs={6}>
                            <form>
                              <Grid container justify="space-around"></Grid>
                                <Grid item xs={11} sm={11} md={5} />
                                <Grid item xs={11} sm={11} md={11}>
                                <center><Button onClick={this.props.onUpload} color="warning">Add</Button></center>
                                </Grid>  
                            </form>
                        </ItemGrid>
                    </GridContainer>
                </ItemGrid>
            </GridContainer>
        );
    }
}

AddClientPolicy.propTypes = {
    classes: PropTypes.object.isRequired,
    values: PropTypes.array.isRequired,
    tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
    tableRowSelected: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    onUpload: PropTypes.func.isRequired,
    onSelectTableRow: PropTypes.func.isRequired
};

export default withStyles(addclientpolicyStyle)(AddClientPolicy);
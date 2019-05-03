import React from 'react';
import PropTypes from 'prop-types';

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Edit from "material-ui-icons/Edit";
import DeleteIcon from 'material-ui-icons/Delete';
import IconButton from "material-ui/IconButton";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import IconCard from "components/Cards/IconCard.jsx";
import CustomTable from "components/CustomTable";
// import IconButton from "components/CustomButtons/IconButton.jsx";


// icons
import { FaRegClone as GroupIcon } from "react-icons/fa"


import addclientpolicyStyle from "assets/jss/material-dashboard-pro-react/components/addclientpolicyStyle";

class AddClientPolicy extends React.Component {
    state = {
        audio: false,
        display: false,
        usb: false,
        network: false
      };
      handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
      };
    render() {
        
        const actions=(
            <div align="left">
            
                  { /* use this button to add a like kind of action */ }
                  <IconButton
                    onClick={() => {
                     
                    }}
                    // color="primaryNoBackground"
                    customClass="edit">
                    <Edit />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      
                    }}
                    // color="dangerNoBackground"
                    customClass="delete">
                    <DeleteIcon />
                  </IconButton>{" "}
                  </div>
    )
        return (
            <GridContainer justify="center">
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
                </GridContainer>

                <GridContainer direction="row" justify="center">
                    <ItemGrid md={6}>

                        <IconCard
                            // icon={GroupIcon}
                            noHeader={true}
                            title="List of Device Permissions"
                            iconColor="red"
                            content={
                                <div>
                                    <span></span>
                                {/* Device Permissions */}
                                     <FormControl fullWidth>
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={this.state.audio} onChange={this.handleChange('audio')} value="audio" />
                                            }
                                            label="Enable Audio redirection"
                                        />
                                        </FormControl>
                                        <FormControl fullWidth>
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={this.state.usb} onChange={this.handleChange('usb')} value="usb" />
                                            }
                                            label="Enable USB redirection"
                                        />
                                        </FormControl>
                                        </div>
                            }
                        />

                    </ItemGrid>

                    <ItemGrid md={6}>
                        <IconCard
                            // icon={GroupIcon}
                            noHeader={true}
                            title="List of Configuration Permissions"
                            iconColor="red"
                            content={
                                <div>
                                    <span></span>
                                    {/* Configuration Permissions */}
                                     <FormControl fullWidth>
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={this.state.display} onChange={this.handleChange('display')} value="display" />
                                            }
                                            label="Can Modify Display Settings"
                                        />
                                        </FormControl>
                                        <FormControl fullWidth>
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={this.state.network} onChange={this.handleChange('network')} value="network" />
                                            }
                                            label="Can Modify Network Settings"
                                        />
                                     </FormControl>
                                        </div>
                            }
                        />

                    </ItemGrid>
                </GridContainer>
                <GridContainer direction="column" justify="center">
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


                    <ItemGrid>
                        <IconCard
                            icon={GroupIcon}
                            title="List of Polices"
                            iconColor="red"
                            content={

                                <CustomTable columns={[
                                    {
                                        Header: "Policy Name",
                                        accessor: "policyname",
                                        minWidth: 50,
                                        Filter: ({filter, onChange}) => (
                                            <input type='text'
                                            placeholder="Search Policy Name"
                                            value={filter ? filter.value : ''}
                                            onChange={event => onChange(event.target.value)}
                                            />
                                        )
                                    },
                                    {
                                        Header: "Description",
                                        accessor: "description",
                                        minWidth: 50,
                                        Filter: ({filter, onChange}) => (
                                            <input type='text'
                                            placeholder="Search Description"
                                            value={filter ? filter.value : ''}
                                            onChange={event => onChange(event.target.value)}
                                            />
                                        )
                                    },
                                    {
                                        Header: "Actions",
                                        accessor: "actions",
                                        minWidth: 50,
                                        Cell: row => (
                                        actions
                                        ),  
                                    }


                                ]}
                                    data={this.props.tableData}
                                    height="55vh"
                                    selected={this.props.tableRowSelected}
                                    onSelect={this.props.onSelectTableRow}
                                    actions={actions}
                                />
                            }
                        />

                    </ItemGrid>
                </GridContainer>
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
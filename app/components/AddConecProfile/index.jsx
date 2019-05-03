import React from 'react';
import PropTypes from 'prop-types';

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
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


import addconecStyle from "assets/jss/material-dashboard-pro-react/components/addconecStyle";

class AddConecProfile extends React.Component {

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
        const { classes } = this.props;
        return (
            <GridContainer direction="column" justify="center">
                <ItemGrid>
                    <GridContainer justify="center">
                        <ItemGrid xs={6}>
                            <form>
                                
                                <Grid container justify="space-around">
                                <Grid item xs={11} sm={11} md={10}>
                                    <FormControl className={classes.formControl}>
                                    <InputLabel shrink htmlFor="Connection Protocol">Connection Protocol</InputLabel>
                                    <Select
                                        style={{ width: 500 }}
                                        
                                        value={this.props.values["protocol"]?this.props.values["protocol"]:''}
                                        onChange={this.props.onChange('protocol')}
                                        inputProps={{
                                        name: 'Connection Protocol',
                                        id: 'connectionProtocol',
                                        }}
                                    >
                                        <MenuItem value="Citrix Profile">Citrix Profile</MenuItem>
                                        <MenuItem value="Microsoft Profile">Microsoft Profile</MenuItem>
                                    </Select>
                                    </FormControl>
                                    </Grid>
                                    <Grid item xs={11} sm={11} md={10}>
                                        <CustomInput
                                            id="name"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                value: this.props.values.name ? this.props.values["name"] : '',
                                                placeholder: "Name",
                                                onChange: this.props.onChange('name')
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={11} sm={11} md={10}>
                                        <CustomInput
                                            id="Description"
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
                                    <Grid item xs={11} sm={11} md={10}>
                                        <CustomInput
                                            id="Domain"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                value: this.props.values.domain_name ? this.props.values["domain_name"] : '',
                                                placeholder: "Domain",
                                                onChange: this.props.onChange('domain_name')
                                            }}
                                        />
                                    </Grid>
                                    
                                   
                                    
                                    <Grid item xs={11} sm={11} md={5} />
                                    <Grid item xs={11} sm={11} md={11}>
                                        <center><Button onClick={this.props.onUpload} color="warning">Add</Button></center>
                                    </Grid>
                                </Grid>
                               
                            </form>
                        </ItemGrid>
                    </GridContainer>
                </ItemGrid>
                <ItemGrid>
                    <IconCard
                        icon={GroupIcon}
                        title="List of Connection Profiles"
                        iconColor="red"
                        content={

                            <CustomTable columns={[
                                {
                                    Header: "Connection Profile Name",
                                    accessor: "name",
                                    minWidth: 50,
                                    Filter: ({filter, onChange}) => (
                                        <input type='text'
                                        placeholder="Search Connection Profile Name"
                                        value={filter ? filter.value : ''}
                                        onChange={event => onChange(event.target.value)}
                                        />
                                    )
                                },
                                {
                                    Header: "Type",
                                    accessor: "protocol",
                                    minWidth: 50,
                                    filterMethod: (filter, row) => {
                                        if (filter.value === "all") {
                                          return true;
                                        }
                                        if (filter.value === '0') {
                                          return row[filter.id] === "Citrix Profile";
                                        }
                                        else if (filter.value === '1') {
                                            return row[filter.id] === "Microsoft Profile";
                                          }
                                      },
                                      Filter: ({ filter, onChange }) =>
                                        <select
                                            onChange={event => onChange(event.target.value)}
                                            style={{ width: "100%" }}
                                            value={filter ? filter.value : "all"}
                                        >
                                            <option value="all">All</option>
                                            <option value="0">Citrix Profile</option>
                                            <option value="1">Microsoft Profile</option>
                                        </select>
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
                                height="45vh"
                                selected={this.props.tableRowSelected}
                                onSelect={this.props.onSelectTableRow}
                            />
                        }
                    />

                </ItemGrid>

            </GridContainer>
        );
    }
}

AddConecProfile.propTypes = {
    classes: PropTypes.object.isRequired,
    values: PropTypes.array.isRequired,
    tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
    tableRowSelected: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    onUpload: PropTypes.func.isRequired,
    onSelectTableRow: PropTypes.func.isRequired
};

export default withStyles(addconecStyle)(AddConecProfile);
import React from 'react';
import PropTypes from 'prop-types';

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
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


import addvpnStyle from "assets/jss/material-dashboard-pro-react/components/addvpnStyle";

class AddVpnProfile extends React.Component {
    
    

    render() {
        const { classes } = this.props;
        const actions=(
            <div align="left">
            
                  <IconButton
                    onClick={() => {
                      
                    }}
                    // color="dangerNoBackground"
                    customClass="delete">
                    <DeleteIcon />
                  </IconButton>
                  </div>
    )
        return (
            <GridContainer direction="column" justify="center">
                <ItemGrid>
                    <GridContainer justify="center">
                        <ItemGrid xs={6}>
                            <form>
                                
                                <Grid container justify="space-around">
                                    <Grid item xs={11} sm={11} md={10}>
                                        <CustomInput
                                            id="Profilename"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                value: this.props.values.profile_name ? this.props.values["profile_name"] : '',
                                                placeholder: "Profile name",
                                                onChange: this.props.onChange('profile_name')
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={11} sm={11} md={10}>
                                        <CustomInput
                                            id="ServerIP"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                value: this.props.values.server_ip ? this.props.values["server_ip"] : '',
                                                placeholder: "Server IP/Host Name",
                                                onChange: this.props.onChange('server_ip')
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={11} sm={11} md={10}>
                                        <CustomInput
                                            id="Group"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                value: this.props.values.group_name ? this.props.values["group_name"] : '',
                                                placeholder: "Group",
                                                onChange: this.props.onChange('group_name')
                                            }}
                                        />
                                    </Grid>
                                    
                                    <Grid item xs={11} sm={11} md={10}>
                                    <FormControl className={classes.formControl}>
                                    <InputLabel shrink htmlFor="protocol">Protocol</InputLabel>
                                    <Select
                                        style={{ width: 500 }}
                                        
                                        value={this.props.values["protocol"]?this.props.values["protocol"]:''}
                                        onChange={this.props.onChange('protocol')}
                                        inputProps={{
                                        name: 'Protocol',
                                        id: 'Protocol',
                                        }}
                                    >
                                        <MenuItem value="SSL VPN">SSL VPN</MenuItem>
                                    </Select>
                                    </FormControl>
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
                        title="List of VPN Profiles"
                        iconColor="red"
                        content={

                            <CustomTable columns={[
                                {
                                    Header: "",
                                    accessor: "mychecked",
                                    minWidth: 50,
                                    Cell: ({ original }) => {
                                        return (
                                            <input
                                                type="checkbox"
                                                checked={original.value}
                                                onChange={this.props.checkboxChange(original.value)}
                                            />
                                        );
                                    },
                                },
                                {
                                    Header: "VPN Profile Name",
                                    accessor: "profile_name",
                                    minWidth: 50,
                                    Filter: ({filter, onChange}) => (
                                        <input type='text'
                                        placeholder="Search VPN Profile Name"
                                        value={filter ? filter.value : ''}
                                        onChange={event => onChange(event.target.value)}
                                        />
                                    )
                                        
                                },
                                {
                                    Header: "Protocol",
                                    accessor: "protocol",
                                    minWidth: 50,
                                    filterMethod: (filter, row) => {
                                        if (filter.value === "all") {
                                          return true;
                                        }
                                        if (filter.value === '0') {
                                          return row[filter.id] === "SSL VPN";
                                        }
                                      },
                                      Filter: ({ filter, onChange }) =>
                                        <select
                                            onChange={event => onChange(event.target.value)}
                                            style={{ width: "100%" }}
                                            value={filter ? filter.value : "all"}
                                        >
                                            <option value="all">All</option>
                                            <option value="0">SSL VPN</option>
                                        </select>

                                },
                                {
                                    Header: "Server IP/Hostname",
                                    accessor: "server_ip",
                                    minWidth: 50,
                                    Filter: ({filter, onChange}) => (
                                        <input type='text'
                                        placeholder="Search Server IP/ Hostname"
                                        value={filter ? filter.value : ''}
                                        onChange={event => onChange(event.target.value)}
                                        />
                                    )
                                },
                                {
                                    Header: "Group",
                                    accessor: "group",
                                    minWidth: 50,
                                    Filter: ({filter, onChange}) => (
                                        <input type='text'
                                        placeholder="Search Group"
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
                                actions={actions}
                            />
                        }
                    />

                </ItemGrid>

            </GridContainer>
        );
    }
}

AddVpnProfile.propTypes = {
    classes: PropTypes.object.isRequired,
    values: PropTypes.array.isRequired,
    tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
    tableRowSelected: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    onUpload: PropTypes.func.isRequired,
    onSelectTableRow: PropTypes.func.isRequired,
    checkboxChange: PropTypes.func.isRequired
};

export default withStyles(addvpnStyle)(AddVpnProfile);
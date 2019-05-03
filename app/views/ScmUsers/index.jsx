import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
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
import Snackbar from "components/Snackbar/Snackbar.jsx";
import HeaderCardWithActions from "components/Cards/HeaderCardWithActions.jsx";
// import IconButton from "components/CustomButtons/IconButton.jsx";

// icons
import AddAlert from "material-ui-icons/AddAlert";
import { FaRegClone as GroupIcon } from "react-icons/fa"

import { scmuserList } from "variables/general.jsx";
import scmUsersStyle from "assets/jss/material-dashboard-pro-react/views/scmUsersStyle";

class ScmUsers extends React.Component {

    state = {
        tableRowSelected: null,
        users: [],
        alert: {
            isShowAlert: false
        },
        newUser: []
    }

    constructor(props) {
        super(props);
        this.state = {
            users: scmuserList.dataRows.map((prop, key) => {
                return ({
                    id: key,
                    name: prop[0],
                    privilege: prop[1]                 
                })
            }),
            newUser: []
        };
    }

    showNotification(type, message) {
        //if (!this.state[alert]) {
        var x = {};
        x[alert] = { isShowAlert: true, color: type, message: message }
        this.setState({
            alert: { isShowAlert: true, color: type, message: message }
        });
        setTimeout(
            this.destroyNotification.bind(this),
            6000,
            type,
            message
        );
    }

    destroyNotification = (type, message) => {
        var x = { alert: { isShowAlert: false, color: type, message: message } };
        this.setState(x);
    }

    handleSelectconnectionprofile = (rowInfo) => {
        this.setState({
            selectedconnectprofile: rowInfo.index
        })
    }

    handleSelectThinClientGroup = (rowInfo) => {
        this.setState({
            selectedGroup: rowInfo.index
        })
    }

    profileactivate = () => {
        this.setState({
            isSelect: 0
        });
    }

    onSelectTableRow = (rowInfo) => {
        this.setState({
            tableRowSelected: rowInfo.index
        })
    }


    handleAddUserChange = name => event => {
        var newUser = this.state.newUser;
        newUser[name] = event.target.value;
        this.setState({
            newUser
        });
    }

    handleAddUserSubmit = () => {
        const { users, newUser } = this.state;
        var newUsers = users;
        newUsers.unshift({ name: newUser['name'], privilege: newUser['privilege']})
        this.setState({
            users: newUsers
        });
    }

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
            <HeaderCardWithActions
                    headerColor="purple"
                    cardTitle="SCM Users Configuration"
                    cardSubtitle="Create, Edit or Delete SCM User"
                content={
            <div>
                <GridContainer direction="column" justify="center">
                    <ItemGrid>
                        <GridContainer justify="center">
                            <ItemGrid xs={6}>
                                <form>

                                    <GridContainer justify="space-around">
                                        <ItemGrid xs={11} sm={11} md={10}>
                                            <CustomInput
                                                id="Name"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    value: this.state.newUser.name ? this.state.newUser["name"] : '',
                                                    placeholder: "Name",
                                                    onChange: this.handleAddUserChange('name')
                                                }}
                                            />
                                        </ItemGrid>
                                        <ItemGrid xs={11} sm={11} md={10}>
                                            <CustomInput
                                                id="Password"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    value: this.state.newUser.password ? this.state.newUser["password"] : '',
                                                    type: "password",
                                                    placeholder: "Password",
                                                    onChange: this.handleAddUserChange('password')
                                                }}
                                            />
                                        </ItemGrid>
                                        <ItemGrid xs={11} sm={11} md={10}>
                                            <CustomInput
                                                id="ConfPassword"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    value: this.state.newUser.confpassword ? this.state.newUser["confpassword"] : '',
                                                    type: "password",
                                                    placeholder: "Confirm Password",
                                                    onChange: this.handleAddUserChange('confpassword')
                                                }}
                                            />
                                        </ItemGrid>
                                        <ItemGrid xs={11} sm={11} md={10}>
                                            <FormControl>
                                                <InputLabel shrink htmlFor="privilege">Privilege</InputLabel>
                                                <Select
                                                    style={{ width: 500 }}

                                                    value={this.state.newUser.privilege ? this.state.newUser.privilege : ""}
                                                    onChange={this.handleAddUserChange('privilege')}
                                                    inputProps={{
                                                        name: 'Privilege',
                                                        id: 'privilege',
                                                    }}
                                                >
                                                    <MenuItem value="Administrator (Read/Write)">Administrator (Read/Write)</MenuItem>
                                                    <MenuItem value="User (Read)">User (Read)</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </ItemGrid>
                                   
                                        <ItemGrid xs={11} sm={11} md={11}>
                                            <center><Button onClick={this.handleAddUserSubmit} color="warning">Add</Button></center>
                                        </ItemGrid>
                                    </GridContainer>

                                </form>
                            </ItemGrid>
                        </GridContainer>
                    </ItemGrid>
                    <ItemGrid>
                        <IconCard
                            icon={GroupIcon}
                            title="SCM Users"
                            iconColor="red"
                            content={

                                <CustomTable columns={[
                                    {
                                        Header: "Name",
                                        accessor: "name",
                                        minWidth: 50,
                                        Filter: ({filter, onChange}) => (
                                            <input type='text'
                                            placeholder="Search Name"
                                            value={filter ? filter.value : ''}
                                            onChange={event => onChange(event.target.value)}
                                            />
                                        )
                                    },
                                    {
                                        Header: "Privilege",
                                        accessor: "privilege",
                                        minWidth: 50,
                                        Filter: ({filter, onChange}) => (
                                            <input type='text'
                                            placeholder="Search Privilege"
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
                                    data={this.state.users}
                                    height="45vh"
                                    selected={this.state.tableRowSelected}
                                    onSelect={this.onSelectTableRow}
                                    actions={actions}
                                />
                            }
                        />

                    </ItemGrid>

                </GridContainer>
                <Snackbar
                    place="bl"
                    color={this.state.alert && this.state.alert.color ? this.state.alert.color : undefined}
                    icon={AddAlert}
                    message={this.state.alert && this.state.alert.message ? this.state.alert.message : ''}
                    open={this.state.alert && this.state.alert.isShowAlert ? this.state.alert.isShowAlert : false}
                    closeNotification={() => this.setState({ alert: { isShowAlert: false } })}
                    close
                />
            </div>
             } 
                               
             />
        );
    }
}

ScmUsers.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(scmUsersStyle)(ScmUsers);



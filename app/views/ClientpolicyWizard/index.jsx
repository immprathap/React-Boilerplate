import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import Edit from "material-ui-icons/Edit";
import DeleteIcon from 'material-ui-icons/Delete';
import IconButton from "material-ui/IconButton";


// core components
import DeploymentWizard from "components/DeploymentWizard";
import AddClientPolicy from "components/AddClientPolicy";
import Snackbar from "components/Snackbar/Snackbar.jsx";
import IconCard from "components/Cards/IconCard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import CustomTable from "components/CustomTable";
import Button from "components/CustomButtons/Button.jsx";
// import IconButton from "components/CustomButtons/IconButton.jsx";


// icons
import AddAlert from "material-ui-icons/AddAlert";
import { FaRegClone as GroupIcon } from "react-icons/fa"


import { ClientPolicy, UserGroupNameClientPolicy } from "variables/general.jsx";
import clientpolicyWizardStyle from "assets/jss/material-dashboard-pro-react/views/clientpolicyWizardStyle";

class ClientPolicyWizard extends React.Component {

    state = {
        selectedGroup: null,
        selectedGroup2: null,
        restore_configuration: false,
        force_update: false,
        patch_update: false,
        newClientpolicy: [],
        alert: {
            isShowAlert: false
        },
        //Clientpolicy: []
    }

    constructor(props) {
        super(props);
        this.state = {
            
            ClientPolicy: ClientPolicy.dataRows.map((prop, key) => {
                return ({
                    id: key,
                    policyname: prop[0],
                    description: prop[1]
                })
            }),
            UserGroupNameClientPolicy: UserGroupNameClientPolicy.dataRows.map((prop, key) => {
                return ({
                    id: key,
                    name: prop[0],
                    account: prop[1],
                    domain: prop[2],
                    validity: prop[3],
                    policy: prop[4],
                    type: prop[5],
                    mychecked: false,
                })
            }),
            // mychecked: false,
            newClientpolicy: [],
            newUserGroupNameClientPolicy: [],
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

    handleSelectPolicy = (rowInfo) => {
        this.setState({
            selectedPolicy: rowInfo.index
        })
    }

    handleSelectThinClientGroup = (rowInfo) => {
        this.setState({
            selectedGroup: rowInfo.index
        })
    }
    
    handleSelectnull = (rowInfo) => {
        this.setState({
            selectedGroup2: rowInfo.index
        })
    }

    handlePolicyChange = name => event => {
        var newClientpolicy = this.state.newClientpolicy;
        newClientpolicy[name] = event.target.value;
        this.setState({
            newClientpolicy
        });
    }

    handlePolicyUpload = () => {
        const { ClientPolicy, newClientpolicy } = this.state;
        var newClientpolicylist = ClientPolicy;
        newClientpolicylist.unshift({policyname: newClientpolicy['policyname'], description: newClientpolicy['description'],     uploadedon: new Date().toLocaleString()})
        this.setState({
            ClientPolicy: newClientpolicylist
        });

        
    }

    handleStepperFinished = (isDeployment) => {
        if (isDeployment) {
            this.showNotification("success", "Client Policy deployment task added into task engine");
        } else {
            window.location.href = '/explorer';
        }
    }
    handleAccountSelectFinished = () => {
            this.showNotification("success", "Profile Got Applied On Selected Accounts");
      
    }

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
        const Clientpolicypermission = (
            <AddClientPolicy
                values={this.state.newClientpolicy}
                tableData={this.state.ClientPolicy}
                tableRowSelected={this.state.selectedPolicy}
                onChange={this.handlePolicyChange}
                onUpload={this.handlePolicyUpload}
                onSelectTableRow={this.handleSelectPolicy}
            />
        );

        const AdTable = (
            <GridContainer justify="center">
                <ItemGrid xs={8}>
                <IconCard
                        icon={GroupIcon}
                        title="List of Accounts"
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
                                                onChange={this.handleChange(original.value)}
                                            />
                                        );
                                    },
                                },
                                {
                                    Header: "Account Name",
                                    accessor: "account",
                                    minWidth: 50,
                                    Filter: ({filter, onChange}) => (
                                        <input type='text'
                                        placeholder="Search Account Name"
                                        value={filter ? filter.value : ''}
                                        onChange={event => onChange(event.target.value)}
                                        />
                                    )
                                },
                                {
                                    Header: "Type",
                                    accessor: "type",
                                    minWidth: 50,
                                    filterMethod: (filter, row) => {
                                        if (filter.value === "all") {
                                          return true;
                                        }
                                        if (filter.value === '0') {
                                          return row[filter.id] === "User";
                                        }
                                        else if (filter.value === '1') {
                                            return row[filter.id] === "Group";
                                          }
                                      },
                                      Filter: ({ filter, onChange }) =>
                                        <select
                                            onChange={event => onChange(event.target.value)}
                                            style={{ width: "100%" }}
                                            value={filter ? filter.value : "all"}
                                        >
                                            <option value="all">All</option>
                                            <option value="0">User</option>
                                            <option value="1">Group</option>
                                        </select>
                                }
                               
                                
                                ]}
                                data={this.state.UserGroupNameClientPolicy}
                                height="55vh"
                                // selected={this.state.selectedGroup}
                                // onSelect={this.handleSelectThinClientGroup}
                                selected={this.state.selectedGroup2}
                                onSelect={this.handleSelectnull}
                                
                            />
                        }
                    />
                    <form>
                        <Grid container justify="space-around"></Grid>
                        <Grid item xs={11} sm={11} md={5} />
                        <Grid item xs={11} sm={11} md={11}>
                            <center><Button onClick={this.handleAccountSelectFinished} color="warning">Apply</Button></center>
                        </Grid>
                    </form>
                </ItemGrid>
            </GridContainer>                   
                
        );

        const AddCompleteTable = (
            <GridContainer justify="center">
                <ItemGrid xs={12}>
                <IconCard
                        icon={GroupIcon}
                        title="List of User/Group Name"
                        iconColor="red"
                      content={
                            
                            <CustomTable columns={[
                                {
                                    Header: "User Or Group Name",
                                    accessor: "name",
                                    minWidth: 50,
                                    Filter: ({filter, onChange}) => (
                                        <input type='text'
                                        placeholder="Search User Or Group Name"
                                        value={filter ? filter.value : ''}
                                        onChange={event => onChange(event.target.value)}
                                        />
                                    )
                                },
                                {
                                    Header: "Account Name",
                                    accessor: "account",
                                    minWidth: 50,
                                    Filter: ({filter, onChange}) => (
                                        <input type='text'
                                        placeholder="Search Account Name"
                                        value={filter ? filter.value : ''}
                                        onChange={event => onChange(event.target.value)}
                                        />
                                    )
                                },
                                {
                                    Header: "Domain",
                                    accessor: "domain",
                                    minWidth: 50,
                                    Filter: ({filter, onChange}) => (
                                        <input type='text'
                                        placeholder="Search Domain"
                                        value={filter ? filter.value : ''}
                                        onChange={event => onChange(event.target.value)}
                                        />
                                    )
                                },
                                {
                                    Header: "Validity",
                                    accessor: "validity",
                                    minWidth: 50,
                                    filterMethod: (filter, row) => {
                                        if (filter.value === "all") {
                                          return true;
                                        }
                                        if (filter.value === '0') {
                                          return row[filter.id] === "Ok";
                                        }
                                        else if (filter.value === '1') {
                                            return row[filter.id] === "Missing";
                                          }
                                      },
                                      Filter: ({ filter, onChange }) =>
                                        <select
                                            onChange={event => onChange(event.target.value)}
                                            style={{ width: "100%" }}
                                            value={filter ? filter.value : "all"}
                                        >
                                            <option value="all">All</option>
                                            <option value="0">Ok</option>
                                            <option value="1">Missing</option>
                                        </select>
                                },
                                {
                                    Header: "Policy",
                                    accessor: "policy",
                                    minWidth: 50,
                                    filterMethod: (filter, row) => {
                                        if (filter.value === "all") {
                                          return true;
                                        }
                                        if (filter.value === '0') {
                                          return row[filter.id] === "Guest (Lowest Priority)";
                                        }
                                        else if (filter.value === '1') {
                                            return row[filter.id] === "Administrator(Highest Priority)";
                                          }
                                      },
                                      Filter: ({ filter, onChange }) =>
                                        <select
                                            onChange={event => onChange(event.target.value)}
                                            style={{ width: "100%" }}
                                            value={filter ? filter.value : "all"}
                                        >
                                            <option value="all">All</option>
                                            <option value="0">Guest (Lowest Priority)</option>
                                            <option value="1">Administrator(Highest Priority)</option>
                                        </select>
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
                                data={this.state.UserGroupNameClientPolicy}
                                height="55vh"
                                selected={this.state.selectedGroup}
                                onSelect={this.handleSelectThinClientGroup}
                            />
                        }
                    />
                </ItemGrid>
            </GridContainer>
        );


    
        

        return (
            <div>
                <DeploymentWizard
                    steps={['Client Policy Repository', 'All Accounts of AD server', 'All Users/Groups Name']}
                    stepsContent={
                        [
                            Clientpolicypermission,
                            AdTable,
                            AddCompleteTable,
                            
                        ]
                    }
                    stepsDescription={
                        [
                            "Create a Client Policy",
                            "Select the Account Name(s)",
                            "Select a Group/User Name"
                        ]
                    }
                    onFinish={this.handleStepperFinished}
                />
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
        );
    }
}

ClientPolicyWizard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(clientpolicyWizardStyle)(ClientPolicyWizard);

import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import DeploymentWizard from "components/DeploymentWizard";
import AddConecProfile from "components/AddConecProfile";
import CustomTable from "components/CustomTable";
import IconCard from "components/Cards/IconCard.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";
// import IconButton from "components/CustomButtons/IconButton.jsx";

// icons
import AddAlert from "material-ui-icons/AddAlert";
import { FaRegClone as GroupIcon } from "react-icons/fa"
import { FaBan as Icon } from "react-icons/fa";
import { FaBullseye as Icon2 } from "react-icons/fa";
import { FaCheck as Icon3 } from "react-icons/fa";


import { thinClientGroups, ConnectionProfiles, AppliedConnectionProfiles } from "variables/general.jsx";
import connectionprofileWizardStyle from "assets/jss/material-dashboard-pro-react/views/connectionprofileWizardStyle";

class ConnectionProfileWizard extends React.Component {

    state = {
        selectedGroup: null,
        restore_configuration: false,
        force_update: false,
        patch_update: false,
        newConnectionProfile: [],
        alert: {
            isShowAlert: false
        },
    }

    constructor(props) {
        super(props);
        this.state = {
            data: thinClientGroups.dataRows.map((prop, key) => {
                return ({
                    id: key,
                    groupname: prop[0],
                    description: prop[1]
                })
            }),
            profiledata: AppliedConnectionProfiles.dataRows.map((prop, key) => {
                return ({
                    id: key,
                    name: prop[0],
                    protocol: prop[1],
                    description: prop[2],
                    domain_name: prop[3],
                    isSelect: 0
                })
            }),
            ConnectionProfiles: ConnectionProfiles.dataRows.map((prop, key) => {
                return ({
                    id: key,
                    name: prop[0],
                    protocol: prop[1],
                    description: prop[2],
                    domain_name: prop[3]
                })
            }),
            newConnectionProfile: []
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

    handleconnectionprofileChange = name => event => {
        var newConnectionProfile = this.state.newConnectionProfile;
        newConnectionProfile[name] = event.target.value;
        this.setState({
            newConnectionProfile
        });
    }

    handleconnectionprofileUpload = () => {
        const { ConnectionProfiles, newConnectionProfile, profiledata } = this.state;
        var newConnectionProfilelist = ConnectionProfiles;
        newConnectionProfilelist.unshift({name: newConnectionProfile['name'], protocol: newConnectionProfile['protocol'],  description: newConnectionProfile['description'], domain_name: newConnectionProfile['domain_name'],   uploadedon: new Date().toLocaleString()})
        this.setState({
            ConnectionProfiles: newConnectionProfilelist
        });

        var newConnectionProfilelist2 = profiledata;
        newConnectionProfilelist2.unshift({name: newConnectionProfile['name'], protocol: newConnectionProfile['protocol'],  description: newConnectionProfile['description'], domain_name: newConnectionProfile['domain_name'],   uploadedon: new Date().toLocaleString()})
        this.setState({
            profiledata: newConnectionProfilelist2
        });
    }

    handleStepperFinished = (isDeployment) => {
        if (isDeployment) {
            this.showNotification("success", "Connection Profile deployment task added into task engine");
        } else {
            window.location.href = '/explorer';
        }
    }

    render() {
        
        const { classes } = this.props;
        const connectionRepository = (
            <AddConecProfile
                values={this.state.newConnectionProfile}
                tableData={this.state.ConnectionProfiles}
                profiledata={this.state.profiledata}
                tableRowSelected={this.state.selectedconnectprofile}
                onChange={this.handleconnectionprofileChange}
                onUpload={this.handleconnectionprofileUpload}
                onSelectTableRow={this.handleSelectconnectionprofile}
            />
        );

        const thinClientGroups = (
            <GridContainer justify="center">
                <ItemGrid xs={8}>
                    <IconCard
                        icon={GroupIcon}
                        title="List of Thinclient Groups"
                        iconColor="red"
                        content={

                            <CustomTable columns={[
                                {
                                    Header: "Group Name",
                                    accessor: "groupname",
                                    minWidth: 50,
                                    Filter: ({filter, onChange}) => (
                                        <input type='text'
                                        placeholder="Search Group Name"
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
                                }]}
                                data={this.state.data}
                                height="55vh"
                                selected={this.state.selectedGroup}
                                onSelect={this.handleSelectThinClientGroup}
                            />
                        }
                    />

                </ItemGrid>
            </GridContainer>
        );

        const appliedprofiles = (
            <GridContainer justify="center">
                <ItemGrid xs={8}>
                <IconCard
                        icon={GroupIcon}
                        title="List of Applied Connection Profiles"
                        iconColor="red"
                      content={
                            
                            <CustomTable columns={[
                                {
                                    Header: "Applied Connection Profile(s)",
                                    accessor: "name",
                                    minWidth: 50,
                                    Filter: ({filter, onChange}) => (
                                        <input type='text'
                                        placeholder="Search Applied Connection Profile(s)"
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
                                    Header: "Action",
                                    accessor: "isSelect",
                                    minWidth: 50,
                                     Cell: row => row.value === 0 ? (
                                       <div>
                                       <Icon2 className={classes.healthIconNormal} onClick={this.profileactivate}/>
                                       &nbsp;
                                         <Icon className={classes.healthIconDanger} />     
                                     </div>
                                         
                                     ) : 
                                     (  
                                        <div>
                                        <Icon3 className={classes.healthIconNormal}/>   
                                      </div>

                                     )

                                  }
                                
                                ]}
                                data={this.state.profiledata}
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
                    steps={['Conection Profile Repository', 'Thinclient Group', 'Applied Connection Profiles']}
                    stepsContent={
                        [
                            connectionRepository,
                            thinClientGroups,
                            appliedprofiles,
                            
                        ]
                    }
                    stepsDescription={
                        [
                            "Create or Select a Connection Profile",
                            "Select a ThinClient Group",
                            "Select an Applied Connection Profile",
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

ConnectionProfileWizard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(connectionprofileWizardStyle)(ConnectionProfileWizard);

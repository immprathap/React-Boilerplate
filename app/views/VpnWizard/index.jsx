import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import DeploymentWizard from "components/DeploymentWizard";
import AddVpnProfile from "components/AddVpnProfile";
import CustomTable from "components/CustomTable";
import IconCard from "components/Cards/IconCard.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";
import PillButtons from "components/CustomButtons/PillButtons.jsx";
import HeaderCardWithActions from "components/Cards/HeaderCardWithActions.jsx";
// import IconButton from "components/CustomButtons/IconButton.jsx";


// icons
import AddAlert from "material-ui-icons/AddAlert";
import deleteicon from "@material-ui/icons/Delete";
import { FaRegClone as GroupIcon } from "react-icons/fa"

import { thinClientGroups, VpnProfiles, AppliedVpnProfiles } from "variables/general.jsx";
import vpnWizardStyle from "assets/jss/material-dashboard-pro-react/views/vpnWizardStyle";

class VpnWizard extends React.Component {

    state = {
        selectedGroup: null,
        restore_configuration: false,
        force_update: false,
        patch_update: false,
        newVPNProfile: [],
        alert: {
            isShowAlert: false
        },
        //VPNProfiles: []
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
            profiledata: AppliedVpnProfiles.dataRows.map((prop, key) => {
                return ({
                    id: key,
                    ProfileName: prop[0],
                    protocol: prop[1],
                    ServerIP: prop[2],
                    group: prop[3]
                })
            }),
            VpnProfiles: VpnProfiles.dataRows.map((prop, key) => {
                return ({
                    id: key,
                    profile_name: prop[0],
                    protocol: prop[1],
                    server_ip: prop[2],
                    group: prop[3],
                    mychecked: false,
                })
            }),
            newVPNProfile: []
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

    handleSelectvpnprofile = (rowInfo) => {
        this.setState({
            selectedvpnprofile: rowInfo.index
        })
    }

    handleSelectThinClientGroup = (rowInfo) => {
        this.setState({
            selectedGroup: rowInfo.index
        })
    }

    handlevpnprofileChange = name => event => {
        var newVPNProfile = this.state.newVPNProfile;
        newVPNProfile[name] = event.target.value;
        this.setState({
            newVPNProfile
        });
    }

    handlevpnprofileUpload = () => {
        const { VpnProfiles, newVPNProfile, profiledata } = this.state;
        var newVPNProfilelist = VpnProfiles;
        newVPNProfilelist.unshift({profile_name: newVPNProfile['profile_name'], protocol: newVPNProfile['protocol'],  server_ip: newVPNProfile['server_ip'], group: newVPNProfile['group_name'],   uploadedon: new Date().toLocaleString()})
        this.setState({
            VpnProfiles: newVPNProfilelist
        });

        var newVPNProfilelist2 = profiledata;
        newVPNProfilelist2.unshift({ProfileName: newVPNProfile['profile_name'], protocol: newVPNProfile['protocol'],  ServerIP: newVPNProfile['server_ip'], group: newVPNProfile['group_name'],   uploadedon: new Date().toLocaleString()})
        this.setState({
            profiledata: newVPNProfilelist2
        });
    }

    handleStepperFinished = (isDeployment) => {
        if (isDeployment) {
            this.showNotification("success", "VPN Profile deployment task added into task engine");
        } else {
            window.location.href = '/explorer';
        }
    }
    handleCheckboxChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
       
        const vpnRepository = (
            <AddVpnProfile
                values={this.state.newVPNProfile}
                tableData={this.state.VpnProfiles}
                tableRowSelected={this.state.selectedvpnprofile}
                onChange={this.handlevpnprofileChange}
                onUpload={this.handlevpnprofileUpload}
                onSelectTableRow={this.handleSelectvpnprofile}
                checkboxChange={this.handleCheckboxChange}
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
                                        placeholder="Search Group"
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
                                }
                            ]}
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
                <HeaderCardWithActions
                      headerColor="red"
                      cardTitle="List of Applied VPN profiles"
                      cardActions={(
                        <PillButtons
                        color="warning"
                        alignCenter
                        tabs={[
                          {
                            tabButton: "Delete All",
                            tabIcon: deleteicon
                          }
                        ]}
                      />)}
                      content={
                            
                            <CustomTable columns={[
                                {
                                    Header: "Applied VPN Profile(s)",
                                    accessor: "ProfileName",
                                    minWidth: 50,
                                    Filter: ({filter, onChange}) => (
                                        <input type='text'
                                        placeholder="Search Applied VPN Profiles"
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
                    steps={['VPN Profile Repository', 'Thinclient Group', 'Applied VPN Profiles']}
                    stepsContent={
                        [
                            vpnRepository,
                            thinClientGroups,
                            appliedprofiles,
                            
                        ]
                    }
                    stepsDescription={
                        [
                            "Create or Select a VPN Profile",
                            "Select a ThinClient Group",
                            "Select an Applied VPN Profile",
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

VpnWizard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(vpnWizardStyle)(VpnWizard);

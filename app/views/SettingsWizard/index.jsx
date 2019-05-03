import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import DeploymentWizard from "components/DeploymentWizard";
import SettingsRepo from "components/SettingsRepo";
import SettingGroups from "components/CustomTable";
import IconCard from "components/Cards/IconCard.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";
// import IconButton from "components/CustomButtons/IconButton.jsx";



// icons
import AddAlert from "material-ui-icons/AddAlert";
import { FaRegClone as GroupIcon } from "react-icons/fa"

import { thinClientGroups ,Settingsrepo} from "variables/general.jsx";
import firmwareWizardStyle from "assets/jss/material-dashboard-pro-react/views/firmwareWizardStyle";

class SettingsWizard extends React.Component {

    state = {
        selectedGroup: null,
        force_update: false,
        patch_update: false,
        newSettingsInfo: [],
        alert: {
            isShowAlert: false
        },
       // repoList: []
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
            newSettingsInfo: [],
           // repoList: [],
            repoList: Settingsrepo.dataRows.map((prop, key) => {
                return ({
                    id: key,
                    name: prop[0],
                    description: prop[1],
                   
                })
            }),
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

    handleSelectSetting = (rowInfo) => {
        this.setState({
            selectedSetting: rowInfo.index
        })
    }

    handleSelectThinClientGroup = (rowInfo) => {
        this.setState({
            selectedGroup: rowInfo.index
        })
    }



    handleSettingsrepoChange = name => event => {
        var newSettingsInfo = this.state.newSettingsInfo;
        newSettingsInfo[name] = event.target.value;
        this.setState({
            newSettingsInfo
        });
    }

    handleSettingsrepoAdd = () => {

        const { repoList, newSettingsInfo } = this.state;
        var newRepoList = repoList;
        newRepoList.unshift({name: newSettingsInfo['settings_name'], description: newSettingsInfo['settings_desc']})
        this.setState({
            repoList: newRepoList
        });
    }

    handleStepperFinished = (isDeployment) => {
        if (isDeployment) {
            this.showNotification("success", "Settings deployment task added into task engine");
        } else {
            window.location.href = '/explorer';
        }
    }

    render() {
       // console.log(this.state.repoList);
      
        const SettingsRepository = (
            <SettingsRepo
                values={this.state.newSettingsInfo}
                tableData={this.state.repoList}
                tableRowSelected={this.state.selectedSetting}
                onChange={this.handleSettingsrepoChange}
                onUpload={this.handleSettingsrepoAdd}
                onSelectTableRow={this.handleSelectSetting}
            />
        );

        const thinClientGroups = (
            <GridContainer justify="center">
                <ItemGrid xs={8}>
                    <IconCard
                        icon={GroupIcon}
                        title="List of ThinClient Groups"
                        iconColor="red"
                        content={

                            <SettingGroups columns={[
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


       

        return (
            <div>
                <DeploymentWizard
                    steps={['Settings Repository', 'ThinClient Group' ]}
                    stepsContent={
                        [
                            SettingsRepository,
                            thinClientGroups
                           
                        ]
                    }
                    stepsDescription={
                        [
                            "Create or Select Settings",
                            "Select a ThinClient Group"
                           
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

SettingsWizard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(firmwareWizardStyle)(SettingsWizard);

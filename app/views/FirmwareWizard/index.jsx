import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import DeploymentWizard from "components/DeploymentWizard";
import FirmwareRepo from "components/FirmwareRepo";
import CustomTable from "components/CustomTable";
import FirmwareRestoreConfig from "components/FirmwareRestoreConfig";
import Scheduler from "components/Scheduler";
import IconCard from "components/Cards/IconCard.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";
// import IconButton from "components/CustomButtons/IconButton.jsx";


// icons
import AddAlert from "material-ui-icons/AddAlert";
import { FaRegClone as GroupIcon } from "react-icons/fa"

import { thinClientGroups, firmwareList } from "variables/general.jsx";
import firmwareWizardStyle from "assets/jss/material-dashboard-pro-react/views/firmwareWizardStyle";

class FirmwareWizard extends React.Component {

    state = {
        selectedGroup: null,
        restore_configuration: false,
        force_update: false,
        patch_update: false,
        newFirmwareInfo: [],
        alert: {
            isShowAlert: false
        },
    }

    constructor(props) {
        super(props);
        this.state = {
            firmwareList: firmwareList.dataRows.map((prop, key) => {
                return ({
                    id: key,
                    firmwarename: prop[0],
                    uploadedfile: prop[1],
                    description: prop[2],
                    uploadedon: prop[3]
                    
                })
            }),
            data: thinClientGroups.dataRows.map((prop, key) => {
                return ({
                    id: key,
                    groupname: prop[0],
                    description: prop[1],

                })
            }),
            newFirmwareInfo: []
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

    handleSelectFirmware = (rowInfo) => {
        this.setState({
            selectedFirmware: rowInfo.index
        })
    }

    handleSelectThinClientGroup = (rowInfo) => {
        this.setState({
            selectedGroup: rowInfo.index
        })
    }

    handleScheduleChange = (date) => {
        this.setState({ scheduledDate: date });
    }

    handleFirmwareConfigChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    handleFirmwarerepoChange = name => event => {
        var newFirmwareInfo = this.state.newFirmwareInfo;
        newFirmwareInfo[name] = event.target.value;
        this.setState({
            newFirmwareInfo
        });
    }

    handleFirmwarerepoUpload = () => {
        const { firmwareList, newFirmwareInfo } = this.state;
        var newFirmwareList = firmwareList;
        newFirmwareList.unshift({firmwarename: newFirmwareInfo['firmwarename'], uploadedfile: 'file name', description: newFirmwareInfo['description'], uploadedon: new Date().toLocaleString()})
        this.setState({
            firmwareList: newFirmwareList
        });
    }

    handleStepperFinished = (isDeployment) => {
        if (isDeployment) {
            this.showNotification("success", "Firmware deployment task added into task engine");
        } else {
            window.location.href = '/explorer';
        }
    }

    render() {
        
        const firmwareRepository = (
            <FirmwareRepo
                values={this.state.newFirmwareInfo}
                tableData={this.state.firmwareList}
                tableRowSelected={this.state.selectedFirmware}
                onChange={this.handleFirmwarerepoChange}
                onUpload={this.handleFirmwarerepoUpload}
                onSelectTableRow={this.handleSelectFirmware}
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

        const restoreConfiguration = (
            <GridContainer justify="center">
                <ItemGrid xs={10}>
                    <FirmwareRestoreConfig
                        checkedRestoreConfiguration={this.state.restore_configuration}
                        checkedForceUpdate={this.state.force_update}
                        checkedPatchUpdate={this.state.patch_update}
                        onHandleChange={this.handleFirmwareConfigChange}
                    />

                </ItemGrid>
            </GridContainer>
        );

        const scheduler = (
            <Scheduler
                scheduledDate={this.state.scheduledDate}
                onChange={this.handleScheduleChange}
            />
        );

        return (
            <div>
                <DeploymentWizard
                    steps={['Firmware Repository', 'Select Thinclient Group', 'Retore Configuration', 'Scheduler']}
                    stepsContent={
                        [
                            firmwareRepository,
                            thinClientGroups,
                            restoreConfiguration,
                            scheduler
                        ]
                    }
                    stepsDescription={
                        [
                            "Create or Select Firmware",
                            "ThinClient Group for deployment",
                            "Deployment configuration options",
                            "Schedule for deployment"
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

FirmwareWizard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(firmwareWizardStyle)(FirmwareWizard);

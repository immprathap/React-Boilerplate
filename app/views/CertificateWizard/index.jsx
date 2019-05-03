import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import DeploymentWizard from "components/DeploymentWizard";
import CertificateRepo from "views/CertificateWizard/CertificateProfile";
import CustomTable from "components/CustomTable";
import ApplyCertificate from "views/CertificateWizard/ApplyCertificate";
import IconCard from "components/Cards/IconCard.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";
import Scheduler from "components/Scheduler";
// import IconButton from "components/CustomButtons/IconButton.jsx";


// icons
import AddAlert from "material-ui-icons/AddAlert";
import { FaRegClone as GroupIcon } from "react-icons/fa"

import { thinClientGroups, certificateList } from "variables/general.jsx";
import CertificateWizardStyle from "assets/jss/material-dashboard-pro-react/views/firmwareWizardStyle";

class CertificateWizard extends React.Component {

    state = {
        selectedGroup: null,
        restore_configuration: false,
        force_update: false,
        patch_update: false,
        newCertificateInfo: [],
        alert: {
            isShowAlert: false
        },
        //certificateList: [],
        CertificateType:'',
        Certificate1Type:null
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
            certificateList: certificateList.dataRows.map((prop, key) => {
                return ({
                    id: key,
                    name: prop[0],
                    type: prop[1],
                    uploadedfile: prop[2],
                    description: prop[3],
                    uploadedon:prop[4]
                })
            }),
           // certificateList: certificateList.dataRows,
            newCertificateInfo: []
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

    handleSelectCertificate = (rowInfo) => {
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

    
    handleCertificatedetailsChange = name => event => {
        var newCertificateInfo = this.state.newCertificateInfo;
        newCertificateInfo[name] = event.target.value;
        this.setState({
            newCertificateInfo
        });
    }

    handleCertificateUpload = () => {
        const { certificateList, newCertificateInfo } = this.state;
        var newcertificateList = certificateList;
        newcertificateList.unshift({name: newCertificateInfo['certificate_name'],type:newCertificateInfo['type'], uploadedfile: 'file name', description: newCertificateInfo['certificate_desc'], uploadedon: new Date().toLocaleString()})
        this.setState({
            certificateList: newcertificateList
        });
    }

    handleStepperFinished = (isDeployment) => {
        if (isDeployment) {
            this.showNotification("success", "Certificate deployment task added into task engine");
        } else {
            window.location.href = '/explorer';
        }
    }
    handleCertificateChange=type=>event=>{
        var newCertificateInfo = this.state.newCertificateInfo;
        newCertificateInfo["type"] = event.target.value;
        this.setState({
            CertificateType:event.target.value,
            newCertificateInfo,
        });
    }
    handleCertificateChange1=name=>event=>{
                this.setState({
            Certificate1Type:event.target.value
        });
    }

    render() {
        
        const AddCertificateProfile= (
            <CertificateRepo
                values={this.state.newCertificateInfo}
                tableData={this.state.certificateList}
                tableRowSelected={this.state.selectedFirmware}
                onChange={this.handleCertificatedetailsChange}
                onchangecertificate={this.handleCertificateChange}
                onUpload={this.handleCertificateUpload}
                onSelectTableRow={this.handleSelectCertificate}
                CertificateType={this.state.CertificateType}
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

        const AddCertificateTYpe = (
            <GridContainer justify="center">
                <ItemGrid xs={10}>
                    <ApplyCertificate
                        Certificate1Type={this.state.Certificate1Type}
                        onchangecertificate={this.handleCertificateChange1}
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
                    steps={['Certificate Repository', 'ThinClient Group', 'Select Certificate Type','Scheduler']}
                    stepsContent={
                        [
                            AddCertificateProfile,
                            thinClientGroups,
                            AddCertificateTYpe,
                            scheduler
                         
                        ]
                    }
                    stepsDescription={
                        [
                            "Create or Select Certificate",
                            "Select a ThinClient Group",
                            "Selection of Certificate Type",
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

CertificateWizard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(CertificateWizardStyle)(CertificateWizard);

import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

// core components
import ClientLib from "views/ClientLibrary/ClientLibrary";
import Snackbar from "components/Snackbar/Snackbar.jsx";
// import Button from "components/CustomButtons/Button.jsx";
// import Grid from '@material-ui/core/Grid';



// icons
import AddAlert from "material-ui-icons/AddAlert";


import {RepositoryList } from "variables/general.jsx";
import clientlibrarystyle from "assets/jss/material-dashboard-pro-react/views/firmwareWizardStyle";

class ClientLibrary extends React.Component {

    state = {
        selectedGroup: null,
        force_update: false,
        patch_update: false,
        newRepositoryInfo: [],
        alert: {
            isShowAlert: false
        },
        RepositoryList: [],
        RepositoryType:'',
        Certificate1Type:null
    }

    constructor(props) {
        super(props);
        this.state = {
            //RepositoryList: RepositoryList.dataRows,
            newRepositoryInfo: [],
            RepositoryList: RepositoryList.dataRows.map((prop, key) => {
                return ({
                    id: key,
                    name: prop[0],
                    uploadedfile: prop[1],
                    description: prop[2],
                    uploadedon:prop[2]
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

    handleSelectRepo = (rowInfo) => {
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

  
    handleClientrepoChange = name => event => {
        var newRepositoryInfo = this.state.newRepositoryInfo;
        newRepositoryInfo[name] = event.target.value;
        this.setState({
            newRepositoryInfo
        });
    }

    handleClientrepoUpload = () => {
        const { RepositoryList, newRepositoryInfo } = this.state;
        var newRepositoryList = RepositoryList;
        newRepositoryList.unshift({name: newRepositoryInfo['repository_name'],uploadedfile: 'file name', description: newRepositoryInfo['repository_desc'], uploadedon: new Date().toLocaleString()})
        this.setState({
            RepositoryList: newRepositoryList
        });
    }

    handleStepperFinished = (isDeployment) => {
                if (isDeployment) {
            this.showNotification("success", "Repository deployment task added into task engine");
        } else {
            window.location.href = '/explorer';
        }
    }
    handleClientChange=name=>event=>{
       
        this.setState({
            RepositoryType:event.target.value,
           
        });
    }
    
    render() {
             
                return (
            <div>
                <ClientLib
                values={this.state.newRepositoryInfo}
                tableData={this.state.RepositoryList}
                tableRowSelected={this.state.selectedFirmware}
                onChange={this.handleClientrepoChange}
                onchangecertificate={this.handleClientChange}
                onUpload={this.handleClientrepoUpload}
                onSelectTableRow={this.handleSelectRepo}
                RepositoryType={this.state.RepositoryType}
            />
            {/* <Grid container justify="space-around">

<Grid item xs={11} sm={11} md={5} />
<Grid item xs={11} sm={11} md={11}>
    <center><Button onClick={this.handleStepperFinished} color="info">Finish</Button></center>
</Grid>
</Grid> */}

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

ClientLibrary.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(clientlibrarystyle)(ClientLibrary);

import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Grid from '@material-ui/core/Grid';

// core components
import AddFtpProfile from "components/AddFtpProfile";
import HeaderCardWithActions from "components/Cards/HeaderCardWithActions.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";


// icons

import { FtpProfiles } from "variables/general.jsx";
import FtpDetailStyle from "assets/jss/material-dashboard-pro-react/views/FtpDetailStyle";
class FtpDetail extends React.Component {

    state = {
        newFtpProfiles: [],
        alert: {
            isShowAlert: false
        },
        //FtpProfiles: []
    }

    constructor(props) {
        super(props);
        this.state = {
            
            FtpProfiles: FtpProfiles.dataRows.map((prop, key) => {
                return ({
                    id: key,
                    ftpname: prop[0],
                    port: prop[1],
                    username: prop[2],
                    password: prop[3],
                    ftppath: prop[4]
                })
            }),
            newFtpProfiles: []
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

    handleSelectftpprofile = (rowInfo) => {
        this.setState({
            selectedftpprofile: rowInfo.index
        })
    }

   

    handleftpprofileChange = name => event => {
        var newFtpProfiles = this.state.newFtpProfiles;
        newFtpProfiles[name] = event.target.value;
        this.setState({
            newFtpProfiles
        });
    }

    handleftpprofileUpload = () => {
        const { FtpProfiles, newFtpProfiles} = this.state;
        var newFtpProfileslist = FtpProfiles;
        newFtpProfileslist.unshift({ftpname: newFtpProfiles['ftpname'], port: newFtpProfiles['port'],  username: newFtpProfiles['username'], password: newFtpProfiles['password'], ftppath: newFtpProfiles['ftppath'],   uploadedon: new Date().toLocaleString()})
        this.setState({
            FtpProfiles: newFtpProfileslist
        });
    }

    handleStepperFinished = () => {
            this.showNotification("success", "FTP Profile deployment task added into task engine");
        
    }
    

    render() {

        return (
                <HeaderCardWithActions
                    headerColor="purple"
                    cardTitle="FTP Configuration"
                    cardSubtitle="Create or Select FTP Profile"
                content={
                    <div>
                        <AddFtpProfile
                        values={this.state.newFtpProfiles}
                        tableData={this.state.FtpProfiles}
                        tableRowSelected={this.state.selectedftpprofile}
                        onChange={this.handleftpprofileChange}
                        onUpload={this.handleftpprofileUpload}
                        onSelectTableRow={this.handleSelectftpprofile}
                        />
                        <GridContainer justify="center">
                        <Grid item xs={11} sm={11} md={11}>
                            <center><Button onClick={this.handleStepperFinished} color="success">Apply</Button></center>
                        </Grid>
                        </GridContainer>
                    </div>
                } 
                
                               
            />
        );
    }
}

FtpDetail.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(FtpDetailStyle)(FtpDetail);

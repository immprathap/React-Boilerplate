import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";
import Button from "components/CustomButtons/Button.jsx";
import FileUpload from "components/CustomUpload/FileUpload";
import HeaderCardWithActions from "components/Cards/HeaderCardWithActions.jsx";

// icons
import AddAlert from "material-ui-icons/AddAlert";

import sslManageStyle from "assets/jss/material-dashboard-pro-react/views/sslManageStyle.jsx";

class SslManage extends React.Component {

    state = {
        alert: {
            isShowAlert: false
        },
        
    }

    constructor(props) {
        super(props);
        this.state = {
       
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


    handleSslManageUpload = () => {
        
    }

    handleStepperFinished = (isDeployment) => {
        if (isDeployment) {
            this.showNotification("success", "SSL certificate added into task engine");
        } else {
            window.location.href = '/explorer';
        }
    }

    render() {
        return (
            <div>
                
            <GridContainer direction="column" justify="center">
                <ItemGrid>
                    <GridContainer justify="center">
                    <ItemGrid xs={12} sm={12} md={12}>
                        <HeaderCardWithActions
                      headerColor="red"
                      cardTitle="Manage SSL Certificates"
                      cardSubtitle="Please choose the certificate file"
                 
                          content={
                            <form>
                            <Grid container direction="column" alignItems="center" justify="center">
                                <FileUpload />
                                <br />
                                <Typography variant="caption">
                                    Note: Select file using browse botton. Valid extensions(img,zip,tar,gz)
                                 </Typography>
                                </Grid>
                                <Grid container justify="space-around">
                                    
                                    <Grid item xs={11} sm={11} md={5} />
                                    <Grid item xs={11} sm={11} md={11}>
                                        <center><Button onClick={this.props.onUpload} color="warning">Upload</Button></center>
                                    </Grid>
                                </Grid>
                          </form>
                          }
                         />   
                        </ItemGrid>
                    </GridContainer>
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
        );
    }
}

SslManage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(sslManageStyle)(SslManage);

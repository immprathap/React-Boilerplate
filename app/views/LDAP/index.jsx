import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";


// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
//import HeaderCardWithActions from "components/Cards/HeaderCardWithActions.jsx";
import IconCard from "components/Cards/IconCard.jsx";


// icons
import AddAlert from "material-ui-icons/AddAlert";
import { FaRegClone as GroupIcon } from "react-icons/fa"

import { Ldapinfo } from "variables/general.jsx"

import Ldapstyle from "assets/jss/material-dashboard-pro-react/views/firmwareWizardStyle";

class Ldap extends React.Component {

    state = {
        alert: {
            isShowAlert: false
        },
        password: '',


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




    handleStepperFinished = (isDeployment) => {
        if (isDeployment) {
            this.showNotification("success", "LDAP Configuration saved successfully");
        } else {
            window.location.href = '/explorer';
        }
    }
    handleOnChangepassword = (e) => {


    }
    handleCheckboxChange = () => {

    }

    render() {
        return (
            <div>

                <GridContainer direction="column" justify="center">
                    <ItemGrid>
                        <GridContainer justify="center">
                            <ItemGrid sm={12} md={6}>
                                <IconCard
                                    icon={GroupIcon}
                                    title="LDAP Configuration"
                                    iconColor="red"
                                    //cardSubtitle="&nbsp;"
                                    content={
                                        <form>
                                            <Grid container direction="column" alignItems="center" justify="center">

                                                {/* <Typography>
                                                    View the LDAP configuration below and enter the LDAP authentication password and click Save.
                                                </Typography> */}
                                                {/* <Typography>
                                                    Note:Invalid or incomplete information will result in authentication issues.
                                               </Typography> */}
                                                <Typography>
                                                    The information below will be used for AD authentication by SnapVDI Client Manager (SCM).
                                                </Typography>
                                                <br />



                                                <TextField
                                                    id="standard-search"
                                                    label="Host/IP Address"
                                                    type="search"
                                                    fullWidth
                                                    disabled
                                                    value={Ldapinfo.Host}
                                                    margin="normal"
                                                />
                                                <TextField
                                                    id="standard-search"
                                                    label="Port"
                                                    type="search"
                                                    fullWidth
                                                    disabled
                                                    value={Ldapinfo.Port}
                                                    margin="normal"
                                                />
                                                <TextField
                                                    id="standard-search"
                                                    label="Account Domain Name"
                                                    type="search"
                                                    fullWidth
                                                    disabled
                                                    value={Ldapinfo.AccountDomainName}
                                                    margin="normal"
                                                />
                                                <TextField
                                                    id="standard-search"
                                                    label=" Bind DN"
                                                    type="search"
                                                    fullWidth
                                                    disabled
                                                    value={Ldapinfo.BindDN}
                                                    margin="normal"
                                                />
                                                <TextField
                                                    id="standard-search"
                                                    label=" Base DN/ Searchbase"
                                                    type="search"
                                                    fullWidth
                                                    disabled
                                                    value={Ldapinfo.BaseDN}
                                                    margin="normal"
                                                />
                                                <CustomInput
                                                    id="password"
                                                    formControlProps={{
                                                        fullWidth: true,
                                                        //className: classes.customFormControlClasses
                                                    }}
                                                    inputProps={{
                                                        // value: this.state.password,
                                                        //  onChange: this.handleOnChangepassword,
                                                        type: "password",
                                                        placeholder: "Password"
                                                    }}
                                                />
                                                 <Grid
                                                container
                                                direction="row"
                                                justify="flex-start"
                                                alignItems="flex-start"
                                                 >
                                                <div >
                                                    {/* Allow Empty Password  &nbsp; */}
                                                                
                                                <FormControlLabel
                                                        control={
                                                        <Checkbox
                                                            //checked={}
                                                            onChange={this.handleCheckboxChange}
                                                            value="isAD"
                                                            color="primary"
                                                        />
                                                    }
                                                    label={
                                                        <label>
                                                          Allow Empty Password
                                                        </label>
                                                      }
                                                />
                                                </div>
                                                </Grid>




                                                <Typography variant="caption">
                                                    Note:Invalid or incomplete information will result in authentication issues.
                                                                </Typography>
                                            </Grid>
                                            <Grid container justify="space-around">

                                                <Grid item xs={11} sm={11} md={5} />
                                                <Grid item xs={11} sm={11} md={11}>
                                                    <center><Button onClick={this.handleStepperFinished} color="info">Apply</Button></center>
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

Ldap.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(Ldapstyle)(Ldap);

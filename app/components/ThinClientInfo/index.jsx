import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";

// icons
import { TiKey as KeyIcon } from "react-icons/ti";
import { FaHeart as HealthIcon } from "react-icons/fa";
import ResetIcon from "material-ui-icons/SettingsBackupRestore";
import PowerIcon from "material-ui-icons/PowerSettingsNew";
import SettingIcon from "material-ui-icons/Settings";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Switch from '@material-ui/core/Switch';
import Tooltip from '@material-ui/core/Tooltip';
import CircularProgress from '@material-ui/core/CircularProgress';


// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import PillButtons from "components/CustomButtons/PillButtons.jsx";

import thinClientInfoStyle from "assets/jss/material-dashboard-pro-react/components/thinClientInfoStyle";

class ThinClientInfo extends React.Component {

    state = {
        activeStep: 0,
        power: false,
        powerProgress: 0,
        lock: false,
        lockProgress: 0
    };

    handleClose = () => {
        this.props.onClose(this.props.selectedValue);
    };

    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }));
    };
    
    handlePowerChange = name => event => {
        this.setState({ [name]: event.target.checked });
        this.setState({ powerProgress: 1});
        setTimeout(
            function() {
                this.setState({powerProgress: 0});
            }
            .bind(this),
            3000
        );
      };

      handleLockChange = name => event => {
        this.setState({ [name]: event.target.checked });
        this.setState({ lockProgress: 1});
        setTimeout(
            function() {
                this.setState({lockProgress: 0});
            }
            .bind(this),
            3000
        );
      };

    render() {
        const { classes, thinClients, onClose, ...other } = this.props;
        const { activeStep } = this.state;
        return (
            <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
                <DialogTitle id="simple-dialog-title" classes={{ root: classes.dialogTitle }}>
                    <Grid container alignItems="center">
                        <ItemGrid xs={9}>
                            <PillButtons
                                color="warning"
                                alignCenter
                                tabs={[
                                    {
                                        tabButton: "Password",
                                        tabIcon: KeyIcon
                                    },
                                    {
                                        tabButton: "Factory Reset",
                                        tabIcon: ResetIcon
                                    },
                                    {
                                        tabButton: "Restart",
                                        tabIcon: PowerIcon
                                    },
                                    {
                                        tabButton: "Settings",
                                        tabIcon: SettingIcon
                                    }
                                ]}
                            />
                        </ItemGrid>
                        <ItemGrid xs={3}>
                            {/* <Tooltip title={ thinClients[activeStep][3] === 0 ? "Reachable" : thinClients[activeStep][3] === 1 ? "UnReachable" : "Busy"} aria-label="health-status">
                                <Avatar classes={{ colorDefault: classes.avatarColorDefault }} className={classes.avatar}>
                                    <HealthIcon className={thinClients[activeStep][3] === 0 ? classes.healthIconNormal : thinClients[activeStep][3] === 1 ? classes.healthIconAbnormal : classes.healthIconDanger} />
                                </Avatar>
                            </Tooltip> */}
                            <Tooltip title={ thinClients[activeStep][8] === 7 ? "UnReachable" : thinClients[activeStep][8] === 3 ? "Busy" : thinClients[activeStep][8] === 4 ? "Busy" : thinClients[activeStep][8] === 5 ? "Busy" :"Reachable" } aria-label="health-status">
                                <Avatar classes={{ colorDefault: classes.avatarColorDefault }} className={classes.avatar}>
                                    <HealthIcon className={thinClients[activeStep][8] === 7 ? classes.healthIconDanger: thinClients[activeStep][8] === 3 ? classes.healthIconAbnormal: thinClients[activeStep][8] === 4 ? classes.healthIconAbnormal : thinClients[activeStep][8] === 5 ? classes.healthIconAbnormal : classes.healthIconNormal} />
                                </Avatar>
                            </Tooltip>
                        </ItemGrid>
                    </Grid>
                </DialogTitle>
                <div className={classes.root}>
                    <SwipeableViews
                        axis="x"
                        index={activeStep}
                    //onChangeIndex={this.handleChangeIndex}
                    >
                        {thinClients.map((thinclient, index) => (
                            <Paper key={index} square className={classes.content}>
                                <Typography className={classes.contentTitle} variant="subtitle1" gutterBottom>
                                    {thinclient[0]}
                                </Typography>
                                <div className={classes.contentDesc}>
                                    <GridContainer alignItems="center">
                                        {/* <ItemGrid xs={5}>
                                            <Typography variant="body1" gutterBottom>
                                                Device
                                            </Typography>
                                        </ItemGrid>
                                        <ItemGrid xs={7}>
                                            <Typography variant="body1" gutterBottom>
                                                {thinclient[0]}
                                            </Typography>
                                        </ItemGrid> */}
                                        <ItemGrid xs={5}>
                                            <Typography variant="body1" gutterBottom>
                                                IP Address
                                            </Typography>
                                        </ItemGrid>
                                        <ItemGrid xs={7}>
                                            <Typography variant="body1" gutterBottom>
                                                {thinclient[1]}
                                            </Typography>
                                        </ItemGrid>
                                        <ItemGrid xs={5}>
                                            <Typography variant="body1" gutterBottom>
                                                MAC Address
                                            </Typography>
                                        </ItemGrid>
                                        <ItemGrid xs={7}>
                                            <Typography variant="body1" gutterBottom>
                                                {thinclient[2]}
                                            </Typography>
                                        </ItemGrid>
                                        <ItemGrid xs={5}>
                                            <Typography variant="body1" gutterBottom>
                                                Firmware Version
                                            </Typography>
                                        </ItemGrid>
                                        <ItemGrid xs={7}>
                                            <Typography variant="body1" gutterBottom>
                                                {thinclient[4]}
                                            </Typography>
                                        </ItemGrid>
                                        <ItemGrid xs={5}>
                                            <Typography variant="body1" gutterBottom>
                                                Firmware Date
                                            </Typography>
                                        </ItemGrid>
                                        <ItemGrid xs={7}>
                                            <Typography variant="body1" gutterBottom>
                                                {thinclient[5]}
                                            </Typography>
                                        </ItemGrid>
                                        <ItemGrid xs={5}>
                                            <Typography variant="body1" gutterBottom>
                                                Power
                                            </Typography>
                                        </ItemGrid>
                                        <ItemGrid xs={4}>
                                            <Switch
                                                // checked={thinclient[6]}
                                                checked={this.state.power} onChange={this.handlePowerChange('power')} value="power"
                                            />
                                        </ItemGrid>
                                        <ItemGrid xs={3}>
                                            {this.state.powerProgress=== 1?(<CircularProgress className={classes.progress} size={20} thickness={4}/>):""}
                                            </ItemGrid>
                                        <ItemGrid xs={5}>
                                            <Typography variant="body1" gutterBottom>
                                                Lock
                                            </Typography>
                                        </ItemGrid>
                                        <ItemGrid xs={4}>
                                            <Switch
                                                // checked={thinclient[7]}
                                                checked={this.state.lock} onChange={this.handleLockChange('lock')} value="lock"
                                            />
                                        </ItemGrid>
                                        <ItemGrid xs={3}>
                                            {this.state.lockProgress=== 1?(<CircularProgress className={classes.progress} size={20} thickness={4}/>):""}
                                            </ItemGrid>
                                    </GridContainer>
                                </div>
                            </Paper>
                        )
                        )}
                    </SwipeableViews>
                    <MobileStepper
                        steps={thinClients.length}
                        position="static"
                        activeStep={activeStep}
                        classes={{root:classes.mobileStepperRoot}}
                        nextButton={
                            <Button size="small" onClick={this.handleNext} disabled={activeStep === thinClients.length - 1}>
                                Next
                        {/*theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />*/}
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                                {/*theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />*/}
                                Back
                            </Button>
                        }
                    />
                </div>
            </Dialog>
        );
    }
}

ThinClientInfo.propTypes = {
    classes: PropTypes.object.isRequired,
    thinClients: PropTypes.arrayOf(PropTypes.array).isRequired,
    onClose: PropTypes.func,
};

export default withStyles(thinClientInfoStyle)(ThinClientInfo);
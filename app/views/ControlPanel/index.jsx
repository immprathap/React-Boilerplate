import React from "react";
import PropTypes from "prop-types";
// router
import { withRouter } from "react-router-dom";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import PanelCard from "components/Cards/PanelCard.jsx";

// icons
import { Search as SearchIcon, Security as SecurityIcon, Cloud as ColudIcon, LibraryBooks as LibraryIcon } from "@material-ui/icons";
import { FaUsers as UsersIcon, FaUsersCog as UserSettingsIcon } from 'react-icons/fa';

import controlPanelStyle from "assets/jss/material-dashboard-pro-react/views/controlPanelStyle";

class ControlPanel extends React.Component {
    state = {
        expandedPanels: {
            getstarted: true,
            scmusers: true
        }
    }

    handleExpansionPanelChange = panel => (event, expanded) => {
        var expandedPanels = this.state.expandedPanels;
        expandedPanels[panel] = expanded
        this.setState({
            expandedPanels
        });
    };

    handlePanelClick = panel => {
        this.props.history.push(panel);
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <ExpansionPanel classes={{ root: classes.expansionPanelRoot }} onChange={this.handleExpansionPanelChange('getstarted')} expanded={this.state.expandedPanels['getstarted'] ? true : false}>
                    <ExpansionPanelSummary classes={{content: classes.expansionPanelSummary}} expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Get Started</Typography>
                        <Typography className={classes.secondaryHeading}>Primary configuration, like Discovery, etc..</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <GridContainer justify="space-around">
                            <ItemGrid xs={12} sm={4} md={2}>
                                <PanelCard
                                    chart={
                                        <SearchIcon classes={{ root: classes.panelCardIcon }} />
                                    }
                                    hover
                                    chartColor="blue"
                                    title="Discovery"
                                    text={
                                        <span className={classes.panelCardDescription}>
                                            Discover the devices in the network
                                        </span>
                                    }
                                    onClick={this.handlePanelClick.bind(this, '/Home/control_panel/discovery')}
                                />
                            </ItemGrid>
                            <ItemGrid xs={12} sm={4} md={2}>
                                <PanelCard
                                    chart={
                                        <SecurityIcon classes={{ root: classes.panelCardIcon }} />
                                    }
                                    hover
                                    chartColor="red"
                                    title="Security"
                                    text={
                                        <span>
                                            Upload Certificate for Secured Web Session
                                        </span>
                                    }
                                    onClick={this.handlePanelClick.bind(this, '/Home/control_panel/Security_configuration')}
                                />
                            </ItemGrid>
                            <ItemGrid xs={12} sm={4} md={2}>
                                <PanelCard
                                    chart={
                                        <ColudIcon classes={{ root: classes.panelCardIcon }} />
                                    }
                                    hover
                                    chartColor="green"
                                    title="FTP"
                                    text={
                                        <span>
                                            Configure FTP details for SCM
                                        </span>
                                    }
                                    onClick={this.handlePanelClick.bind(this, '/Home/control_panel/FTP_configuration')}
                                />
                            </ItemGrid>
                            <ItemGrid xs={12} sm={4} md={2}>
                                <PanelCard
                                    chart={
                                        <LibraryIcon classes={{ root: classes.panelCardIcon }} />
                                    }
                                    hover
                                    chartColor="orange"
                                    title="Client Library"
                                    text={
                                        <span>
                                            Upload files to repository
                                        </span>
                                    }
                                    onClick={this.handlePanelClick.bind(this, '/Home/control_panel/Client_library')}
                                />
                            </ItemGrid>
                        </GridContainer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel classes={{ root: classes.expansionPanelRoot }} onChange={this.handleExpansionPanelChange('scmusers')} expanded={this.state.expandedPanels['scmusers'] ? true : false}>
                    <ExpansionPanelSummary classes={{content: classes.expansionPanelSummary}} expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>SCM User configuration</Typography>
                        <Typography className={classes.secondaryHeading}>User settings for SnapVDI Client Manager</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <GridContainer justify="space-around">
                            <ItemGrid xs={12} sm={4} md={2}>
                                <PanelCard
                                    chart={
                                        <UsersIcon className={classes.panelCardFaIcon } />
                                    }
                                    hover
                                    chartColor="rose"
                                    title="SCM Users"
                                    text={
                                        <span>
                                            Manage users for SCM
                                        </span>
                                    }
                                    onClick={this.handlePanelClick.bind(this, '/Home/control_panel/SCM_users')}
                                />
                            </ItemGrid>
                            <ItemGrid xs={12} sm={4} md={2}>
                                <PanelCard
                                    chart={
                                        <UserSettingsIcon className={ classes.panelCardFaIcon } />
                                    }
                                    hover
                                    chartColor="purple"
                                    title="LDAP"
                                    text={
                                        <span>
                                            LDAP authentication management
                                        </span>
                                    }
                                    onClick={this.handlePanelClick.bind(this, '/Home/control_panel/LDAP_configuration')}
                                />
                            </ItemGrid>
                            <ItemGrid xs={12} sm={4} md={2}/>
                            <ItemGrid xs={12} sm={4} md={2}/>
                        </GridContainer>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}

ControlPanel.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default withStyles(controlPanelStyle)(withRouter(ControlPanel));

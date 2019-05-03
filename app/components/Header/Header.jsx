import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { Route, Link } from "react-router-dom";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
// import Button from "material-ui/Button";
import Hidden from "material-ui/Hidden";
import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// material-ui icons
import Menu from "material-ui-icons/Menu";
import MoreVert from "material-ui-icons/MoreVert";
import ViewList from "material-ui-icons/ViewList";

// core components
import HeaderLinks from "./HeaderLinks";
import CustomIconButton from "components/CustomButtons/IconButton.jsx";

import headerStyle from "assets/jss/material-dashboard-pro-react/components/headerStyle.jsx";

function Header({ ...props }) {
  /*function makeBrand() {
    var name;
    props.routes.map((prop, key) => {
      if (prop.collapse) {
        prop.views.map((prop, key) => {
          if (prop.path === props.location.pathname) {
            name = prop.name;
          }
          return null;
        });
      }
      if (prop.path === props.location.pathname) {
        name = prop.name;
      }
      return null;
    });
    return name;
  }*/

  const crumb = (part, partIndex, parts) => {
    const path = ['', ...parts.slice(0, partIndex + 1)].join("/");
    part = part.replace(/_/g, ' ');
    part = part.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
    return <Link key={path} to={path}>{part}</Link>
  }

  const Breadcrumb = () => <Route path="*" render={props => {
    let parts = props.location.pathname.split("/");
    let place = parts[parts.length - 1];
    place = place.replace(/_/g, ' ');
    place = place.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
    parts = parts.slice(1, parts.length - 1);
    return (
      <Paper square elevation={0} className={classes.breadcrumbsPaper}>
        <Breadcrumbs>{parts.map(crumb)}<Typography>{place.charAt(0).toUpperCase() + place.slice(1)}</Typography></Breadcrumbs>
      </Paper>
    );
  }} />

  const { classes, color, rtlActive } = props;
  const appBarClasses = cx({
    [" " + classes[color]]: color
  });
  const sidebarMinimize =
    classes.sidebarMinimize +
    " " +
    cx({
      [classes.sidebarMinimizeRTL]: rtlActive
    });

  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <Hidden smDown>
          <div className={sidebarMinimize}>
            {props.miniActive ? (
              <CustomIconButton color="white" onClick={props.sidebarMinimize}>
                <ViewList className={classes.sidebarMiniIcon} />
              </CustomIconButton>
            ) : (
                <CustomIconButton color="white" onClick={props.sidebarMinimize}>
                  <MoreVert className={classes.sidebarMiniIcon} />
                </CustomIconButton>
              )}
          </div>
        </Hidden>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
          {/*<Button href="#" className={classes.title}>
            {makeBrand()}
            </Button>*/}
          <Breadcrumb />
        </div>
        <Hidden smDown implementation="css">
          <HeaderLinks rtlActive={rtlActive} />
        </Hidden>
        <Hidden mdUp>
          <IconButton
            className={classes.appResponsive}
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool
};

export default withStyles(headerStyle)(Header);

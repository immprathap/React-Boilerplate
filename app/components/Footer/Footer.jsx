import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
// import { Link } from "react-router-dom";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// import List from "material-ui/List";
// import ListItem from "material-ui/List/ListItem";

// Dashboard routes
// import dashboardRoutes from "routes/dashboard.jsx";

import footerStyle from "assets/jss/material-dashboard-pro-react/components/footerStyle";

function Footer({ ...props }) {
  const { classes, fluid, white, rtlActive } = props;
  var container = cx({
    [classes.container]: !fluid,
    [classes.containerFluid]: fluid,
    [classes.whiteColor]: white
  });
  var anchor =
    classes.a +
    cx({
      [" " + classes.whiteColor]: white
    });
  /*var block = cx({
    [classes.block]: true,
    [classes.whiteColor]: white
  })*/
  return (
    <footer className={classes.footer}>
      <div className={container}>
        {/* <div className={classes.left}>
          <List className={classes.list}>
           {dashboardRoutes.map((prop, key) => {
            return (
              prop.isInFooter?
            <ListItem key={key} className={classes.inlineBlock}>
              <Link to={prop.path}>{prop.name}</Link>
            </ListItem>:null
            );
          })
          } 
          </List>
        </div> */}
         <p className={classes.left}>
          <a target="blank" href="https://snapvdi.com/" className={anchor}>
            About Page
          </a>
          {rtlActive
            ? ", مصنوعة مع الحب لشبكة الإنترنت أفضل"
            : ""}
        </p>
        <p className={classes.right}>
          &copy; {1900 + new Date().getYear()}{" "}
          <a target="blank" href="https://amzetta.com" className={anchor}>
            {rtlActive ? "توقيت الإبداعية" : "AmZetta Technologies"}
          </a>
          {rtlActive
            ? ", مصنوعة مع الحب لشبكة الإنترنت أفضل"
            : ""}
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  fluid: PropTypes.bool,
  white: PropTypes.bool,
  rtlActive: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);

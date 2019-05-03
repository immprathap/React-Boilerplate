// ##############################
// // // RegisterPage view styles
// #############################

import { container } from "assets/jss/material-dashboard-react-plus.jsx";
import green from '@material-ui/core/colors/green';
import customCheckboxRadioSwitch from "assets/jss/customCheckboxRadioSwitch.jsx";
// images
import stepperbg from 'assets/img/stepper-bg.jpeg';

const registerPageStyle = {
  container: {
    ...container,
    position: "relative",
    zIndex: "3",
    paddingTop: "15vh",
    backgroundImage: "url('" + stepperbg + "')",
    width:"100% !important",
    minHeight: "calc(100vh)"
  },
  cardClasses: {
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    marginBottom: "100px",
    padding: "20px 0px"
  },
  center: {
    textAlign: "center"
  },
  right: {
    textAlign: "right"
  },
  left: {
    textAlign: "left"
  },
  form: {
    marginTop: "20px",
    padding: "0 20px",
    position: "relative"
  },
  socialTitle: {
    fontSize: "18px"
  },
  inputAdornment: {
    marginRight: "18px",
    top: "18px",
    position: "relative",
  },
  inputAdornmentIcon: {
    color: "#555"
  },
  customFormControlClasses: {
    margin: "0 12px"
  },
  checkboxLabelControl: {
    margin: "0"
  },
  checkboxLabel: {
    marginLeft: "6px",
    color: "rgba(0, 0, 0, 0.26)"
  },
  ...customCheckboxRadioSwitch,
  cardTitle: {
    fontSize: "2.6em"
  },
  circularProgresswrapper: {
    //margin: theme.spacing.unit,
    position: 'relative',
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    marginTop: 17,
    marginLeft: 10,
  },
  cardHidden: {
    opacity: "0",
    //transform: "translate3d(0, 0, 0)",
    transform: "scale(1.2,1.2)", // @prathap added
  },
  poweredbyLogo: {
    marginTop: "20px"
  },
  amiLogo: {
    width:'90px',
    height: '35px'
  }
};

export default registerPageStyle;

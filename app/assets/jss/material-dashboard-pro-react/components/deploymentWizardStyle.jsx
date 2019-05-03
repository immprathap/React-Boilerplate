
import {
    primaryColor,
    dangerColor,
    successColor,
    roseColor,
    infoColor,
    //warningColor
  } from "assets/jss/material-dashboard-pro-react.jsx";

const deploymentWizardStyle = (theme) => ({
    primaryColor,
    dangerColor,
    successColor,
    roseColor,
    infoColor,
    warningColorlabelContainer: {
        "& $alternativeLabel": {
          marginTop: 0
        }
      },
      step: {
        fontSize:"40px",
        //marginLeft:"-4px",
        "& $completed": {
          color: "lightgreen"
        },
        "& $active": {
          color: "red"
        },
        "& $disabled": {
          color: "red"
        }
      },
      stepButtonRoot: {
          width: "auto"
      },
      active: {}, //needed so that the &$active tag works
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
  stepLabelActive: {
    color: "green !important",
  },
});

export default deploymentWizardStyle;
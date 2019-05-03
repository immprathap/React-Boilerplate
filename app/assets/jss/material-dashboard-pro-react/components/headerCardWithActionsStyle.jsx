// ##############################
// // // RegularCard styles
// #############################

import {
  card,
  cardHeader,
  defaultFont,
  orangeCardHeader,
  greenCardHeader,
  redCardHeader,
  blueCardHeader,
  purpleCardHeader,
  roseCardHeader
} from "assets/jss/material-dashboard-pro-react.jsx";

const headerCardStyle = {
  card,
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardHeaderParent: {
    padding: "10px 16px 0",
  },
  cardHeader: {
    ...cardHeader,
    ...defaultFont,
    padding: "10px",
    fontSize: "22px",
    display: "inline-block",
    margin: "-40px 0px 0",
  },
  cardPlainHeader: {
    marginLeft: 0,
    marginRight: 0
  },
  orangeCardHeader,
  greenCardHeader,
  redCardHeader,
  blueCardHeader,
  purpleCardHeader,
  roseCardHeader,
  cardTitle: {
    color: "#FFFFFF",
    marginTop: "0",
    marginBottom: "3px",
    ...defaultFont,
    fontSize: "0.8em",
  },
  cardSubtitle: {
    marginBottom: "0",
    color: "rgba(255, 255, 255, 0.62)",
    fontSize: "12px"
  },
  cardActions: {
    padding: "14px",
    display: "block",
    height: "auto"
  },
  cardContent: {
    padding: "0 20px 15px",
    position: "relative"
  },
  left: {
    textAlign: "left"
  },
  right: {
    textAlign: "right"
  },
  center: {
    textAlign: "center"
  },
  avatarColorDefault: {
      backgroundColor: "transparent !important",
  },
  deviceIcon: {
    fill: "purple"
  }
};

export default headerCardStyle;

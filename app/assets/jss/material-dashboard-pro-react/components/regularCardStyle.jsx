// ##############################
// // // RegularCard styles
// #############################

import { card, defaultFont } from "assets/jss/material-dashboard-react-plus.jsx";

const regularCardStyle = {
  card: {
    ...card,
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)", 
    paddingBottom: "5px",
    //transform: "translate3d(0, 0, 0)",
    //transition: "all 200ms linear" // @prathap changed fom 300ms
    transition: "all 0.3s", // @prathap added
    transform: "scale(0.9,0.9)", // @prathap added
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardHeader: {
    padding: "15px 20px 0",
    zIndex: "3"
  },
  cardTitle: {
    ...defaultFont,
    color: "#3C4858",
    textDecoration: "none",
    marginTop: "0",
    marginBottom: "3px",
    fontSize: "1.3em",
    "& small": {
      fontWeight: "400",
      lineHeight: "1",
      color: "#777"
    }
  },
  right: {
    textAlign: "right"
  },
  left: {
    textAlign: "left"
  },
  center: {
    textAlign: "center"
  },
  cardSubtitle: {
    ...defaultFont,
    color: "#999999",
    fontSize: "14px",
    margin: "0 0 10px"
  },
  cardContent: {
    padding: "15px 20px 5px 20px !important",
    position: "relative"
  }
};

export default regularCardStyle;

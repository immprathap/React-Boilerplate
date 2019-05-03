import {
    defaultFont,
    // dangerColor,
    primaryColor,
  } from "assets/jss/material-dashboard-pro-react.jsx";
 
const explorerStyle = theme => ({
    pageSubcategoriesTitle: {
        color: "#3C4858",
        textDecoration: "none",
        textAlign: "center"
    },
    cardDescription: {
        fontSize: "12px",
        color: "grey"
    },
    avatar: {
        width: "unset !important",
        height: "unset !important",
        fontSize: "1rem !important"
    },
    avatarColorDefault: {
        backgroundColor: "transparent !important",
    },
    healthIconNormal: {
        fill: "green"
    },
    healthIconAbnormal: {
        fill: "orange"
    },
    healthIconDanger: {
        // fill: "#f44336"
        fill: "grey"
    },

    devicestatus0: {
        color: "#666666",
        fontWeight: 'bold',
    },
    devicestatus1: {
        color: "#FB9E00",
        fontWeight: 'bold',
    },
    devicestatus2: {
        // fill: "#f44336"
        color: "#68BC00",
        fontWeight: 'bold',
    },
    // devicestatus3: {
    //     color: "#FA28FF"
    // },
    // devicestatus4: {
    //     color: "#FB9E00"
    // },
    // devicestatus5: {
    //     // fill: "#f44336"
    //     color: "#D33115"
    // },
    // devicestatus6: {
    //     // fill: "#f44336"
    //     color: "#194D33"
    // },
    remoteScreenIcon: {
        // fill: "#f44336"
        fill: "#757575"
    },
    headerstyle: {
        // fill: "#f44336"
        fontSize: "15px !important"
    },
    popper: {
        // fill: "#f44336"
        zIndex: 1
    },

    devicesBatch: {
        
    zIndex: "4",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: "-5px",
      border: "1px solid #FFF",
      right: "-18px",
      fontSize: "9px",
      background: primaryColor,
      color: "#FFFFFF",
      minWidth: "18px",
      height: "18px",
      borderRadius: "14px",
      textAlign: "center",
      lineHeight: "17px",
      verticalAlign: "middle",
      display: "block"
    },
    [theme.breakpoints.down("sm")]: {
      ...defaultFont,
      fontSize: "14px",
      marginRight: "8px"
    }
    },
    tiIconStyle:{
        width:"25px",
        height:"25px"
    },
    faIconStyle:{
        width:"20px",
        height:"20px"
    },
    faIconSmallStyle:{
        width:"15px",
        height:"15px"
    },
    muiIconStyle:{
        width: "18px",
        height: "18px",
        color: "grey"
    }
});
  
export default explorerStyle;
  
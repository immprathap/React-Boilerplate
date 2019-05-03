
import {
    primaryColor,
    dangerColor,
    successColor,
    infoColor
} from "assets/jss/material-dashboard-pro-react.jsx";

const taskListItemStyle = {
    cardAvatar: {
        width: "30px !important",
        height: "30px !important",
        color: '#fff',
        backgroundColor: infoColor + " !important",
        borderRadius: "0 !important",
        fontSize: "14px !important"
    },
    cardStatusAvatarRunning: {
        width: "30px !important",
        height: "30px !important",
        color: primaryColor + " !important",
        backgroundColor: "#fff !important"
    },
    cardStatusAvatarSuccess: {
        width: "30px !important",
        height: "30px !important",
        color: successColor + " !important",
        backgroundColor: "#fff !important"
    },
    cardStatusAvatarError: {
        width: "30px !important",
        height: "30px !important",
        color: dangerColor + " !important",
        backgroundColor: "#fff !important"
    },
    cardStatusAvatarIcon: {
        width: "18px !important",
        height: "18px !important",
    },
    cardHeader: {
        padding: "5px !important",
        height: "40px"
    },
    cardTitle: {
        fontSize: "12px !important",
        maxWidth: "200px"
    },
    cardSubheader: {
        fontSize: "8px !important"
    },
    cardContent: {
        padding: "5px 5px !important"
    },
    cardAction: {
        padding: "4px 4px",
        height: "40px"
    },
    icons: {
        width: "17px",
        height: "17px"
    },
    closeButton: {
        padding : "0px 10px"
    },
    button: {
        padding : "0px 10px !important",
        height: "28px",
        backgroundColor: "rgb(240, 240, 240) !important"
    },
    closeButtonIcon: {
        width: "20px",
        height: "20px"
    },
    buttonIcon: {
        width: "16px",
        height: "16px",
        color: "slategrey"
    },
    taskInfoHead: {
        textAlign: "right",
    },
    taskInfo: {
        textAlign: "left"
    }
}

export default taskListItemStyle;
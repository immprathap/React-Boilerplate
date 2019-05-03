const thinClientInfoStyle = (theme) => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
    dialogTitle: {
        backgroundColor: "rgb(200,200,200)",
        padding: "10px 0px !important"
    },
    avatar: {

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
        fill: "grey"
    },
    content: {
        backgroundColor: "white !important",
    },
    contentTitle: {
        textAlign: "center",
        padding: "15px 0px 0px"
    },
    contentDesc: {
        padding: "5px 20px"
    },
    progress: {
        margin: theme.spacing.unit * 2,
    },
    mobileStepperRoot: {
        backgroundColor:"rgb(200,200,200) !important"
    }
})

export default thinClientInfoStyle;
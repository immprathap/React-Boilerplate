const controlPanelStyle = (theme) => ({
    heading: {
        fontSize: theme.typography.pxToRem(15) + ' !important',
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(12) + ' !important',
        color: theme.palette.text.secondary + ' !important',
    },
    expansionPanelRoot: {
        backgroundColor: "transparent !important",
        boxShadow: "unset !important"
    },
    expansionPanelSummary: {
        display: "block !important"
    },
    panelCardIcon: {
        width: "2em !important",
        height: "2em !important",
        color: "white"
    },
    panelCardFaIcon: {
        width: "2.5em !important",
        height: "2.5em !important",
        color: "white"
    },
    panelCardDescription: {
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis"
    }
});

export default controlPanelStyle;
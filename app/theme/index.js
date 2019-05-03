import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: { main: '#3f51b5' }, // #9c27b0
        secondary: { main: '#43A6DF' },
        pink: { main: '#e91e63' },
        warning: { main: '#ff9800' },
        danger: { main: '#f44336' },
        success: { main: '#4caf50' },
        info: { main: '#00acc1' },
        grey: { main: '#999999' },
    },
    typography: {
        useNextVariants: true,
    },
    overrides: {
        MuiStepLabel: {
            label: {
                color: 'gray',
                '&$active': {
                    color: 'white',
                },
                '&$completed': {
                    color: 'gray',
                },
            },
        },
    },
});

export default theme;
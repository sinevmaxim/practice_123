import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#f9f7f1',
        },
        secondary: {
            main: '#ffc6bf',
        },
        third: {
            main: '#ff7fae',
        },
        fourth: {
            main: '#833e9',
        },
    },
    typography: {
        fontFamily: ['Roboto'],
    },
});

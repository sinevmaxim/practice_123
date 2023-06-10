import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
// import { store } from './redux/index.js';
// import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme.js';
// import Store from './store/store.js';
import { Context, store } from './context.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <Context.Provider value={{store}}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Context.Provider>
    // </React.StrictMode>
);

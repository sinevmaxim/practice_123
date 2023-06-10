import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
    Main,
    Login,
    Registration,
    CreateRentApplication,
    CreateProperty,
} from './pages/index.js';
import './App.scss';
import { store } from './context.js';

function App() {
    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.userStore.checkAuth();
        }
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                <Route path="/create-property" element={<CreateProperty />} />
                <Route
                    path="/create-rent-application"
                    element={<CreateRentApplication />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

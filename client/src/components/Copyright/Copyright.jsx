import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Copyright = () => {
    return (
        <Link color="inherit" to="/">
            <Typography variant="body2" color="secondary" align="center">
                {'Copyright © '}
                RENTI {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Link>
    );
};

export default Copyright;

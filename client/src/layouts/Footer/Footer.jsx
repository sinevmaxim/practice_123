import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from '../../components/Copyright/Copyright.jsx';

export const Footer = () => {
    return (
        <Box sx={{ p: 3 }} component="footer" color="secondary">
            <Typography
                variant="subtitle1"
                align="center"
                color="secondary"
                component="p"
            >
                You're welcome
            </Typography>
            <Copyright />
        </Box>
    );
};

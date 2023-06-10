import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context.js';
import { observer } from 'mobx-react-lite';
// const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
    const { store } = useContext(Context);
    console.log(store);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const onClickLogout = async () => {
        if (window.confirm('Are you sure you want to logout')) {
            store.userStore.logout();
        }
    };
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, mr: 2 }}>
                        <Link to="/">
                            <Typography
                                variant="h6"
                                noWrap
                                color="secondary"
                                sx={{
                                    fontWeight: 400,
                                    letterSpacing: '.2rem',
                                    textDecoration: 'none',
                                }}
                            >
                                RENTI
                            </Typography>
                        </Link>
                    </Box>

                    {store.userStore.isAuth ? (
                        <Box sx={{ flexGrow: 0, display: 'flex' }}>
                            <Box
                                sx={{
                                    display: { xs: 'none', sm: 'flex' },
                                }}
                            >
                                <Link to="/create-property">
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        sx={{
                                            mr: 2,
                                            display: 'flex',
                                        }}
                                        startIcon={<DomainAddIcon />}
                                    >
                                        Create property
                                    </Button>
                                </Link>
                            </Box>
                            <Box
                                sx={{
                                    display: { xs: 'none', sm: 'flex' },
                                }}
                            >
                                <Link to="/create-rent-application">
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        sx={{
                                            mr: 2,
                                            display: 'flex',
                                        }}
                                        startIcon={<DomainAddIcon />}
                                    >
                                        Create Rent Application
                                    </Button>
                                </Link>
                            </Box>

                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}
                                >
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/static/images/avatar/2.jpg"
                                    />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem
                                        key={setting}
                                        onClick={onClickLogout}
                                    >
                                        <Typography textAlign="center">
                                            {setting}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    ) : (
                        <Box sx={{ flexGrow: 0, display: 'flex' }}>
                            <Box>
                                <Link to="/login">
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        sx={{
                                            mr: 2,
                                            display: 'flex',
                                        }}
                                        startIcon={<LoginIcon />}
                                    >
                                        Login
                                    </Button>
                                </Link>
                            </Box>
                            <Box>
                                <Link to="/register">
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        sx={{
                                            mr: 2,
                                            display: 'flex',
                                        }}
                                        startIcon={<HowToRegIcon />}
                                    >
                                        Register
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default observer(Header);

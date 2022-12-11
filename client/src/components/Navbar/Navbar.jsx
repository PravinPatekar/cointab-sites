import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
// import Stack from '@mui/material/Stack';
import { NavLink } from "react-router-dom"

// const pages = ['Home', 'About Us', 'Careers', 'Blogs', 'Investers', 'Contacts Us', 'Help Center'];
const menusdata = [{ path: '/home', data: "Home" },
{ path: '/about', data: "About Us" },
{ path: '/careers', data: "Careers" },
{ path: '/blogs', data: "Blogs" },
{ path: '/investers', data: "Investers" },
{ path: '/contact', data: "Contact Us" },
{ path: '/help-center', data: "Help Center" }]
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    // };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };

    return (
        <AppBar position="fixed">
            <Container maxWidth="50" sx={{ bgcolor: '#FFFFFF' }}>
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex', color: '#483C32' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 10,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: '#483C32',
                            textDecoration: 'none',
                        }}
                    >
                        AAOOCHALE
                    </Typography>

                    <Box sx={{ flexGrow: 2, display: { xs: 'flex-end', md: 'none' }, alignItems: "flex-end" }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{ color: '#483C32' }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {menusdata.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" sx={{ color: '#483C32' }}>
                                        <NavLink to={page.path}
                                            style={{
                                                paddingLeft: 13,
                                                color: 'black',
                                                textDecoration: 'none',
                                            }}
                                        >
                                            {page.data}
                                        </NavLink>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none', color: '#483C32' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none', ml: '250' },
                            flexGrow: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: '#483C32',
                            textDecoration: 'none',
                        }}
                    >
                        AAOOCHALE
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {menusdata.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#483C32' }}
                            >
                                <NavLink to={page.path} style={{ paddingLeft: 13, textDecoration: 'none' }}>{page.data}</NavLink>
                            </Button>
                        ))}
                    </Box>
                    <Box>
                        <Button variant="outlined" sx={{ borderColor: '#483C32', color: '#483C32', }}>
                            <NavLink to="/login" underline="none" >
                                get start
                            </NavLink>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}
export default Navbar;


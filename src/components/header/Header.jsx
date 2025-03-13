import { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Switch, Box, Avatar, List, ListItem, useMediaQuery, Drawer, MenuItem, Button, TextField } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Logo from '/logo.png';
import useUIStore from '../../store/store';
import useSearchStore from '../../store/search';
import useContactStore from '../../store/contact';


const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { darkMode, themeColors, toggleDarkMode} = useUIStore();
    const { openSearchModal, closeSearchModal, setSearchInputValue, isSearchModalOpen, searchInputValue} = useSearchStore();
    const {openContactModal} = useContactStore()

    const isSmall = useMediaQuery('(max-width: 430px)');
    const isMedium = useMediaQuery('(max-width: 900px)');

    const handleSearchChange = (e) => {
        setSearchInputValue(e.target.value);
        
        if (e.target.value.length > 0 && !isSearchModalOpen) {
            openSearchModal();  // Modalni ochish
        } else if (e.target.value.length === 0 && isSearchModalOpen) {
            closeSearchModal(); // Modalni yopish
        }
    };

    const handleOpenContact = () => {
        console.log("Contact modal ochildi!");
        openContactModal();
    };
    

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const arrayLinks = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Genres', path: '/search' },
    ];

    return (
        <Box width="100%" height="12vh" position='fixed' top={0} zIndex={5}>
            <AppBar position="static" sx={{ width: '100%', height: '100%', backgroundColor: themeColors.background }}>
                <Toolbar sx={{ height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Logo & Search for larger screens */}
                    <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                        <Avatar src={Logo} alt="Logo" sx={{ width: isSmall || isMedium ? '50px' : '48px', height: '48px' }} />
                        {!isSmall && !isMedium && (
                            <Typography variant="h6" sx={{ color: themeColors.color, fontSize: '24px', ml: '8px' }}>
                                CineNova
                            </Typography>
                        )}
                    </Link>

                    {/* Search Input */}
                    <TextField
                        variant="outlined"
                        placeholder="Search..."
                        value={searchInputValue}
                        onChange={handleSearchChange} // Qidiruvni boshqarish
                        sx={{
                            backgroundColor: themeColors.inputBackground,
                            width: '200px',
                            '& .MuiInputBase-root': {
                                color: themeColors.color,
                            },
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '20px',
                                '&:focus': {
                                    borderColor: 'transparent',
                                },
                            },
                            '&:focus-within': {
                                width: '100%',
                                minWidth: '200px',
                                maxWidth: '300px',
                                transition: 'width 0.3s ease',
                                outline: 'none',
                                border: 'none',
                            },
                            '@media (max-width: 600px)': {
                                '&:focus-within': {
                                    width: '200px',
                                },
                            },
                        }}
                    />

                    {/* Desktop Menu */}
                    {!isSmall && !isMedium && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <List sx={{ display: 'flex', gap: '1rem', padding: 0 }}>
                                {arrayLinks.map((el, idx) => (
                                    <ListItem key={idx}>
                                        <Link to={el.path} style={{ textDecoration: 'none', color: themeColors.color, fontSize: '18px' }}>
                                            {el.title}
                                        </Link>
                                    </ListItem>
                                ))}
                                <ListItem sx={{ display: 'inline', padding: '0' }}>
                                    <Button onClick={handleOpenContact} sx={{ color: themeColors.color }}>
                                        Contact
                                    </Button>
                                </ListItem>
                                <ListItem sx={{ display: 'inline', padding: '0' }}>
                                    <Switch
                                        checked={darkMode}
                                        onChange={toggleDarkMode}
                                        sx={{
                                            '& .MuiSwitch-switchBase.Mui-checked': {
                                                color: themeColors.color,
                                            },
                                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                                backgroundColor: themeColors.background,
                                            },
                                        }}
                                    />
                                </ListItem>
                            </List>
                        </Box>
                    )}

                    {/* Mobile Menus */}
                    {isSmall || isMedium ? (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton sx={{ color: themeColors.color }} onClick={handleDrawerToggle}>
                                <FontAwesomeIcon icon={drawerOpen ? faTimes : faBars} />
                            </IconButton>
                        </Box>
                    ) : null}
                </Toolbar>
            </AppBar>

            {/* Mobile Menu Drawer */}
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                <Box sx={{
                    width: 250,
                    height : '100vh',
                    padding: '1rem',
                    backgroundColor: themeColors.background,
                    color: themeColors.color,
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb:'12px' }}>
                        <Avatar src={Logo} alt="Logo" sx={{ width: '40px', height: '40px' }} />
                        <Typography variant="h6" sx={{ color: themeColors.color, fontSize: '20px' }}>
                            CineNova
                        </Typography>
                        <IconButton sx={{ color: themeColors.color }} onClick={handleDrawerToggle}>
                            <FontAwesomeIcon icon={faTimes} />
                        </IconButton>
                    </Box>

                    {arrayLinks.map((el, idx) => (
                        <MenuItem key={idx} onClick={handleDrawerToggle}>
                            <Link to={el.path} style={{ textDecoration: 'none', color: themeColors.color }}>
                                {el.title}
                            </Link>
                        </MenuItem>
                    ))}

                    {/* Contact Button in Drawer */}
                    <MenuItem onClick={openContactModal}>
                        <Button sx={{ color: themeColors.color }}>
                            Contact
                        </Button>
                    </MenuItem>
                </Box>
            </Drawer>
        </Box>
    );
};

export default Header;

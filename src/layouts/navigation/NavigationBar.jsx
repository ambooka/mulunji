import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from '@mui/material';
import { AccountCircle, Notifications, MoreVert } from '@mui/icons-material';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {
  Modal,
  TextField,
  FormLabel,
  FormControl,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';

import Main from '../main';
import Iconify from '../../components/iconify';
import AccountPopover from '../common/account-popover';
import NotificationsPopover from "../common/notifications-popover";
import LanguagePopover from "../common/language-popover";
import Footer from "../common/Footer";

export default function NavigationBar({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation(); // Get current route
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [donationFrequency, setDonationFrequency] = useState('once');
  const [donationAmount, setDonationAmount] = useState('');

  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);

  const handleDonate = () => {
    console.log(`Donation frequency: ${donationFrequency}, amount: ${donationAmount}`);
    handleCloseModal();
  };

  const [isHidden, setIsHidden] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 100) {
        setIsHidden(false);
      } else {
        setIsHidden(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    zIndex: 1300,
  };

  const currentPath = location.pathname; // Get current path from location

  return (
      <>
        {isMobile ? (
            <>
              <Box sx={{ minHeight: 1, display: 'flex', flexDirection: 'column', width: '100%' }}>
                <Main>{children}</Main>
              </Box>
              <Footer />


              <AppBar sx={{ bgcolor: '#f1f3f4a9', color: 'black' }} position="fixed" style={{ top: 0, bottom: 'auto', width: '100%' }}>
                <Toolbar>
                  <Box display="flex" alignItems="center">
                    <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'black' }}>
                      Mulunji |
                    </Typography>
                    <img style={{ paddingLeft: 3 }} width="32" height="32" src="assets/logo.svg" alt="Logo" />
                  </Box>

                  <span style={{ paddingLeft: '50px' }} />


                  <Box sx={{ flexGrow: 1 }} />
                  <Button sx={{ mt: 1, bgcolor: '#e74c3c', fontSize: '0.5rem' }} variant="contained" onClick={handleOpenModal}>
                    Donate Now
                  </Button>
                  <NotificationsPopover />
                  <AccountPopover />
                </Toolbar>
              </AppBar>

              <BottomNavigation
                  showLabels
                  value={currentPath} // Set current path as the value
                  style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: theme.zIndex.appBar, width: '100%' }}
              >
                <BottomNavigationAction
                    component={Link}
                    to="/"
                    label="Home"
                    value="/"
                    icon={<Iconify icon="fluent:home-16-regular" />}
                />
                <BottomNavigationAction
                    component={Link}
                    to="/projects"
                    label="Projects"
                    value="/projects"
                    icon={<Iconify icon="ant-design:fund-projection-screen-outlined" />}
                />
                <BottomNavigationAction
                    component={Link}
                    label="Events"
                    to="/events"
                    value="/events"
                    icon={<Iconify icon="mdi:event-outline" />}
                />
                <BottomNavigationAction
                    component={Link}
                    to="/about"
                    label="About Us"
                    value="/about"
                    icon={<Iconify icon="uiw:user" />}
                />
              </BottomNavigation>
            </>
        ) : (
            <>
              <AppBar position="fixed" sx={{ bgcolor: '#f1f3f4a9', color: 'black' }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                  <Box display="flex" alignItems="center">
                    <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'black' }}>
                      Mulunji Foundation |
                    </Typography>
                    <img style={{ paddingLeft: 12 }} width="48" height="48" src="assets/logo.svg" alt="Logo" />
                  </Box>

                  <Box display="flex" alignItems="center">

                    <Button color={currentPath === '/' ? 'primary' : 'inherit'} component={Link} to="/">
                      Home
                    </Button>
                    <Button color={currentPath === '/projects' ? 'primary' : 'inherit'} component={Link} to="/projects">
                      Projects
                    </Button>
                    <Button color={currentPath === '/events' ? 'primary' : 'inherit'} component={Link} to="/events">
                      Events
                    </Button>
                    <Button color={currentPath === '/about' ? 'primary' : 'inherit'} component={Link} to="/about">
                      About Us
                    </Button>



                    <span style={{ paddingLeft: '50px' }} />
                    <Button variant="contained" sx={{ bgcolor: '#e74c3c', mr: 2 }} onClick={handleDonate}>
                      Donate Now
                    </Button>

                    <LanguagePopover />

                    <NotificationsPopover />

                    <AccountPopover />
                  </Box>
                </Toolbar>
              </AppBar>

              <Box sx={{ minHeight: 1, display: 'flex', flexDirection: { xs: 'column', lg: 'row' } }}>
                <Main>{children}</Main>
              </Box>
              <Footer/>

            </>
        )}

        <Modal
            open={showModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Donate to Our Cause
            </Typography>

            <FormControl component="fieldset" sx={{ mt: 2 }}>
              <FormLabel component="legend">Donation Frequency</FormLabel>
              <ToggleButtonGroup
                  value={donationFrequency}
                  exclusive
                  onChange={(event, newFrequency) => {
                    if (newFrequency !== null) {
                      setDonationFrequency(newFrequency);
                    }
                  }}
                  aria-label="donation frequency"
              >
                <ToggleButton value="once" aria-label="Once">
                  Once
                </ToggleButton>
                <ToggleButton value="monthly" aria-label="Monthly">
                  Monthly
                </ToggleButton>
              </ToggleButtonGroup>
            </FormControl>

            <TextField
                fullWidth
                label="Donation Amount"
                variant="outlined"
                value={donationAmount}
                onChange={(event) => setDonationAmount(event.target.value)}
                sx={{ mt: 2 }}
            />

            <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleDonate} disabled={!donationAmount}>
              Donate
            </Button>
          </Box>
        </Modal>
      </>
  );
}

NavigationBar.propTypes = {
  children: PropTypes.node.isRequired,
};

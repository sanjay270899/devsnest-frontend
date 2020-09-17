import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
import logo from '../images/logopng.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function Header() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = () => {
    localStorage.clear();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#1c484a' }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img src={logo} style={{ height: '35px' }} />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            style={{
              fontFamily: 'Quicksand',
              fontStyle: 'normal',
              fontSize: '25px',
            }}
          >
            Devsnest
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <AccountCircle style={{ color: '#fff' }} />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
                  <MenuItem onClick={handleClose} style={{ color: '#1c484a' }}>
                    Home
                  </MenuItem>
                </Link>
                <Link
                  to="/profile"
                  style={{ color: '#fff', textDecoration: 'none' }}
                >
                  <MenuItem onClick={handleClose} style={{ color: '#1c484a' }}>
                    Profile
                  </MenuItem>
                </Link>
                <Link
                  to="/settings"
                  style={{ color: '#fff', textDecoration: 'none' }}
                >
                  <MenuItem onClick={handleClose} style={{ color: '#1c484a' }}>
                    Settings
                  </MenuItem>
                </Link>
                <Link
                  to="/gbu"
                  style={{ color: '#fff', textDecoration: 'none' }}
                >
                  <MenuItem onClick={handleClose} style={{ color: '#1c484a' }}>
                    Gbu
                  </MenuItem>
                </Link>
                <Link
                  to="/mentor"
                  style={{ color: '#fff', textDecoration: 'none' }}
                >
                  <MenuItem onClick={handleClose} style={{ color: '#1c484a' }}>
                    Mentor Form
                  </MenuItem>
                </Link>
                <Link
                  to="/mentee"
                  style={{ color: '#fff', textDecoration: 'none' }}
                >
                  <MenuItem onClick={handleClose} style={{ color: '#1c484a' }}>
                    Mentee Form
                  </MenuItem>
                </Link>
                <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
                  <MenuItem onClick={handleClick} style={{ color: '#1c484a' }}>
                    Logout
                  </MenuItem>
                </Link>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

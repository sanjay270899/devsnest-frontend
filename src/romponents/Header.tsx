import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import FeedbackIcon from '@material-ui/icons/Feedback';
import ReactGA from 'react-ga';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  title: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClose = () => {
    ReactGA.event({
      category: 'Navigation',
      action: 'moved to a page',
    });
    setAnchorEl(null);
  };

  const handleClick = () => {
    localStorage.clear();
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="static"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
              Devnest
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="/profile" style={{ color: '#000', textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>

              <MenuItem onClick={handleClose} style={{ color: '#000' }}>
                Profile
              </MenuItem>
            </ListItem>
          </Link>
          <Link
            to="/settings"
            style={{
              color: '#000',
              textDecoration: 'none',
            }}
          >
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>

              <MenuItem onClick={handleClose} style={{ color: '#000' }}>
                Settings
              </MenuItem>
            </ListItem>
          </Link>
          <Link
            to="/gbu"
            style={{
              color: '#000',
              textDecoration: 'none',
            }}
          >
            <ListItem button>
              <ListItemIcon>
                <FeedbackIcon />
              </ListItemIcon>

              <MenuItem onClick={handleClose} style={{ color: '#000' }}>
                GBU
              </MenuItem>
            </ListItem>
          </Link>
          <Link
            to="/mentor"
            style={{
              color: '#000',
              textDecoration: 'none',
            }}
          >
            <ListItem button>
              <ListItemIcon>
                <FeedbackIcon />
              </ListItemIcon>

              <MenuItem onClick={handleClose} style={{ color: '#000' }}>
                Mentor Form
              </MenuItem>
            </ListItem>
          </Link>
          <Link
            to="/mentee"
            style={{
              color: '#000',
              textDecoration: 'none',
            }}
          >
            <ListItem button>
              <ListItemIcon>
                <FeedbackIcon />
              </ListItemIcon>

              <MenuItem onClick={handleClose} style={{ color: '#000' }}>
                Mentee Form
              </MenuItem>
            </ListItem>
          </Link>
          <Link
            to="/login"
            style={{
              color: '#000',
              textDecoration: 'none',
            }}
          >
            <ListItem button>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <MenuItem onClick={handleClick}>Logout</MenuItem>
            </ListItem>
          </Link>
        </List>

        <Divider />
      </Drawer>
    </div>
  );
}

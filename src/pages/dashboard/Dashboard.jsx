import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import '../dashboard/Dashboard.scss'
import TakeNote from "../../components/takeNote/TakeNote";
import Notes from "../notes/Notes";

import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Archive from "../archive/Archive";
import TrashNotes from "../trashNotes/TrashNotes";

import {
  Router, Switch ,Route
} from 'react-router-dom';

const drawerWidth = 240;


const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`
  }
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "white",
  boxShadow: "0px",
  border: "1px solid lightgray",
  color: "black",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));

export default function MiniDrawer() {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);



  let iconlist = [
    {
      icons: <LightbulbOutlinedIcon />,
      icnText: "Notes"
    },
    {
      icons: <NotificationsOutlinedIcon />,
      icnText: "Reminder"
    },

    {
      icons: <EditOutlinedIcon />,
      icnText: "Edit Labels"
    },

    {
      icons: <ArchiveOutlinedIcon />,
      icnText: "Archive"
    },

    {
      icons: < DeleteOutlinedIcon />,
      icnText: "Bin"
    }
  ];

  const handleDrawerOpen = () => {
    setOpen(!open);
  };



  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar class="heaadbar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          {/* <div className="searchIcon"> */}



            <Typography variant="h6" noWrap component="div">
              Keep
            </Typography> 
            <div class="search-bar" >
            {/* <SearchOutlinedIcon /> */}
              <input className="input-search" type="text" placeholder="Search"></input>
            </div>
            <div className="nav-right-icon">

              <RefreshOutlinedIcon />
              <ViewStreamOutlinedIcon />
              <SettingsOutlinedIcon />
              <AppsOutlinedIcon />
              <AccountCircleOutlinedIcon />

            </div>

          {/* </div> */}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>

        </DrawerHeader>
        <Divider />
        <List>
          {iconlist.map((text, index) => (
            <ListItem button key={text.icnText} >
              <ListItemIcon>
                {text.icons}
              </ListItemIcon>
              <ListItemText primary={text.icnText} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {/* <Router>
          <Switch>
            <Route path="/" exact component={Notes} />
            <Route path="/archive"  component={Archive}/>
            <Route path="/trashNotes"  component={TrashNotes}/>
          </Switch>
        </Router> */}
        {/* <Route path='/notes' component={Notes} /> */}
        <Notes />
        {/* <Archive/> */}
        {/* <TrashNotes/>*/}
        <Typography paragraph></Typography>
        <Typography paragraph></Typography>
      </Box>
    </Box>
  );
}
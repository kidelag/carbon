import React, { useState } from "react";
import styles from "./Menu.module.scss";
import logoTitle from "../../../assets/logo-carbon.png";

/* Icons */
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import TopicIcon from "@mui/icons-material/Topic";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SchoolIcon from "@mui/icons-material/School";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DashboardIcon from "@mui/icons-material/Dashboard";

import Badge from "@mui/material/Badge";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import Toolbar from "@mui/material/Toolbar";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { styled } from "@mui/material/styles";
import Rating, { IconContainerProps } from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRole,
  setState,
  initialState,
} from "../../../Redux/States/users";
import { Button, Stack } from "@mui/material";

interface Props {
  page?: string;
}

const drawWidth = 220;
const colorText = "white";

const listItemMenu = [
  /*{
    title: "Dashboard",
    link: "/",
    icon: <DashboardIcon />,
  },*/
  {
    title: "Dashboard",
    link: "/",
    icon: <DashboardIcon />,
  },
  {
    title: "Profil",
    link: "/profil",
    icon: <PersonIcon />,
  },
  // {
  //   title: "Progression",
  //   link: "/profile",
  //   icon: <ChecklistRtlIcon />,
  // },
  {
    title: "Consultants",
    link: "/consultants",
    icon: <PeopleIcon />,
  },
  {
    title: "Evénements",
    link: "/evenements",
    icon: <EmojiEventsIcon />,
  },
  // {
  //   title: "Formation",
  //   link: "/formations",
  //   icon: <SchoolIcon />,
  // },
  {
    title: "Documents",
    link: "/profile",
    icon: <TopicIcon />,
  },
  {
    title: "Actualités",
    link: "/profile",
    icon: <NewspaperIcon />,
  },
];

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
}));

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "Very Satisfied",
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

export const Menu: React.FC<Props> = ({ page }) => {
  const [mobileViewOpen, setMobileViewOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const role = useSelector(selectRole);

  const handleToggle = () => {
    setMobileViewOpen(!mobileViewOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("TOKEN");

    dispatch(setState(initialState));
  };

  const bgColor: any = {
    SUPPORT: "#EA4335",
    CONSULTANT: "#00BB7E",
    CLIENT: "#5B98D2",
  };

  const changePage = (newPage: string) => {
    navigate(newPage);
  };

  const responsiveDrawer = (
    <div style={{ backgroundColor: bgColor[role], height: "100%" }}>
      <div className={styles.title}>
        <img
          src={logoTitle}
          alt="Logo Carbon"
          onClick={() => {
            changePage("/");
          }}
        />
      </div>
      <List sx={{ backgroundColor: bgColor[role] }}>
        {listItemMenu.map((item, index) => (
          <ListItemButton
            key={index}
            sx={{
              color: colorText,
              paddingRight: page === item.title ? 0 : "",
            }}
            onClick={() => {
              changePage(item.link);
            }}
            className={page === item.title ? styles.itemOnSelected : ""}
          >
            <ListItemIcon
              sx={{
                color: page === item.title ? "red" : colorText,
                marginTop: page === item.title ? 0 : "",
                marginBottom: page === item.title ? 0 : "",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} />

            {/* <div style={{width: '20px', height: '70px', position: 'absolute'}}></div> */}
          </ListItemButton>
        ))}
      </List>

      <Stack
        direction="row"
        sx={{ margin: "2vh auto 0 auto", alignItems: "center" }}
      >
        <Button
          variant="contained"
          color="error"
          sx={{ margin: "0 auto" }}
          onClick={handleLogout}
        >
          Déconnexion
        </Button>
      </Stack>
    </div>
  );

  return (
    <div>
      <div>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawWidth}px)` },
              ml: { sm: `${drawWidth}px` },
              backgroundColor: "#fff",
            }}
          >
            <Toolbar sx={{ display: "flex" }}>
              <IconButton
                edge="start"
                onClick={handleToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>

              <Box
                sx={{
                  flex: "auto",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button variant="contained" onClick={() => setOpen(true)}>
                  <SentimentSatisfiedAltIcon />
                </Button>
                <IconButton edge="start" sx={{ ml: 2, mr: 2 }}>
                  <Badge badgeContent={4} color="error">
                    <NotificationsIcon color="action" />
                  </Badge>
                </IconButton>
                <Button variant="outlined">
                  <NightlightIcon />
                </Button>
              </Box>
              <div>
                <Dialog
                  open={open}
                  onClose={() => setOpen(false)}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Donnez nous votre humeur du moment"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText
                      id="alert-dialog-description"
                      sx={{ m: "1vh auto", textAlign: "center" }}
                    >
                      <StyledRating
                        name="highlight-selected-only"
                        defaultValue={3}
                        IconContainerComponent={IconContainer}
                        getLabelText={(value: number) =>
                          customIcons[value].label
                        }
                        highlightSelectedOnly
                      />
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setOpen(false)} autoFocus>
                      Envoyer
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: drawWidth, flexShrink: { sm: 0 }, border: 0 }}
          >
            <Drawer
              variant="temporary"
              open={mobileViewOpen}
              onClose={handleToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawWidth,
                  border: 0,
                },
              }}
            >
              {responsiveDrawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawWidth,
                  border: 0,
                },
              }}
              open
            >
              {responsiveDrawer}
            </Drawer>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Menu;

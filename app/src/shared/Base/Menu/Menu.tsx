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
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

interface Props {
  page?: string;
}

const drawWidth = 220;
const colorText = "white";

const listItemMenu = [
  {
    title: "Profil",
    link: "/profile",
    icon: <PersonIcon />,
  },
  {
    title: "Progression",
    link: "/profile",
    icon: <ChecklistRtlIcon />,
  },
  {
    title: "Catalogue",
    link: "/profile",
    icon: <PeopleIcon />,
  },
  {
    title: "Challenge",
    link: "/profile",
    icon: <EmojiEventsIcon />,
  },
  {
    title: "Formation",
    link: "/profile",
    icon: <SchoolIcon />,
  },
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

export const Menu: React.FC<Props> = ({ page }) => {
  const [backgroundColorMenu, setBackgoundColorMenu] =
    React.useState("#bd1f1f");
  const [mobileViewOpen, setMobileViewOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleToggle = () => {
    setMobileViewOpen(!mobileViewOpen);
  };

  const changePage = (newPage: string) => {
    navigate(newPage);
  };

  const responsiveDrawer = (
    <div style={{ backgroundColor: backgroundColorMenu, height: "100%" }}>
      <div className={styles.title}>
        <img src={logoTitle} alt="Logo Carbon" />
      </div>
      <List sx={{ backgroundColor: backgroundColorMenu }}>
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
      <Typography
        sx={{
          backgroundColor: "red",
          color: colorText,
          borderRadius: 10,
          textAlign: "center",
          padding: 1,
          margin: 2,
        }}
      >
        Déconnexion
      </Typography>
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
                <IconButton edge="start" sx={{ ml: 2 }}>
                  <Badge badgeContent={4} color="error">
                    <NotificationsIcon color="action" />
                  </Badge>
                </IconButton>
              </Box>
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

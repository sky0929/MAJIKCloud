import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Drawer = ({ opendrawer }) => {
  const [open, setOpen] = useState(true);
  const drawerWidth = 240;
  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: prop => prop !== "open"
  })(({ theme, opendrawer }) => ({
    "& .MuiDrawer-paper": {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      boxSizing: "border-box",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      ...(!opendrawer && {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(9),
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(9)
        }
      })
    }
  }));

  const menu = [
    /*     {
      label: "Inventory",
      url: "/"
    },
    {
      label: "Bills Of Materials",
      url: "/"
    },
    {
      label: "Production Control",
      url: "/products"
    },
    {
      label: "Configure To Order",
      url: "/"
    },
    {
      label: "Material Req Planning",
      url: "/"
    },
    {
      label: "Job Management",
      url: "/products"
    },
    {
      label: "WorkFlow",
      url: "/"
    }, */
    {
      label: "System Admin",
      url: "/system-admin",
      children: [
        {
          label: "User",
          url: "/system-admin/user"
        },
        {
          label: "Access Groups",
          url: "/system-admin/access-groups"
        },
        {
          label: "Profiles",
          url: "/system-admin/profiles"
        }
      ]
    }
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" opendrawer={opendrawer}>
        <Toolbar />
        <Box>
          <List>
            {menu.map((item, index) =>
              <React.Fragment>
                {item.children && item.children.length > 0
                  ? <React.Fragment>
                      <ListItemButton
                        onClick={() => {
                          setOpen(!open);
                        }}
                        key={item.label + index}
                      >
                        <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={item.label} />
                        {open ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse
                        in={open}
                        timeout="auto"
                        unmountOnExit
                        sx={{ pl: 4 }}
                      >
                        <List component="div" disablePadding>
                          {item.children.map((childItem, childIndex) => {
                            return (
                              <ListItem
                                component={Link}
                                to={childItem.url}
                                key={childItem.label + childIndex}
                              >
                                <ListItemIcon>
                                  {index % 2 === 0
                                    ? <InboxIcon />
                                    : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText
                                  primary={childItem.label}
                                  sx={{ color: "text.primary" }}
                                />
                              </ListItem>
                            );
                          })}
                        </List>
                      </Collapse>
                    </React.Fragment>
                  : <ListItem
                      component={Link}
                      to={item.url}
                      key={item.label + index}
                      sx={{
                        justifyContent: opendrawer ? "center" : "initial"
                      }}
                    >
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.label}
                        sx={{ color: "text.primary" }}
                      />
                    </ListItem>}
              </React.Fragment>
            )}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Drawer;

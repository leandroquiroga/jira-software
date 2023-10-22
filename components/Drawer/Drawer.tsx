/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
import React, { useState } from 'react'
import Drawer from "@mui/material/Drawer";
import { Box, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import { AutoAwesomeMotionOutlined, BackupTableOutlined, ReceiptLongOutlined, RocketLaunchOutlined, SailingOutlined, SettingsOutlined } from '@mui/icons-material';
import { ListItemComponents } from '..';

const KEYINIT = 0;
const arrayTitleIcon = ["Backlog", "Board", "Reports", "Release", "Settings"];

export const DrawerComponent = () => {

  const arrayIcon = [
    <AutoAwesomeMotionOutlined />,
    <BackupTableOutlined />,
    <ReceiptLongOutlined />,
    <RocketLaunchOutlined />,
    <SettingsOutlined />,
  ];

  const [openMenu, setOpenMenu] = useState<boolean>(true);

  const handleShowMenu = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={openMenu}
      onClose={handleShowMenu}>
      <Box sx={{ padding: "5px 10px" }}>
        <Typography variant="h5"> Menu Bar </Typography>
      </Box>
      {/* TODO: Mejorar este choclazo */}
      <List>
        {
          arrayIcon.map((value) => (
            <ListItemComponents key={KEYINIT + 1} children={value} />
          ))
        }
        {
          arrayTitleIcon.map((value) => (
           <Typography
            key={value}
            variant='subtitle2'
            >
            {value}
          </Typography>
      ))}
      </List>
    </Drawer>
  );
};


        // <ListItemIcon>
        //   <AutoAwesomeMotionOutlined />
        // </ListItemIcon>
        // <ListItemIcon>
        //   <BackupTableOutlined />
        // </ListItemIcon>
        // <ListItemIcon>
        //   <ReceiptLongOutlined />
        // </ListItemIcon>
        // <ListItemIcon>
        //   <SettingsOutlined />
        // </ListItemIcon>
        // <ListItemIcon>
        //   <SailingOutlined />
        // </ListItemIcon>
        // <ListItemIcon>
        //   <RocketLaunchOutlined />
        // </ListItemIcon>
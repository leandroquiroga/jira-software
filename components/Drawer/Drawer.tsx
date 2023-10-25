/* eslint-disable react/no-children-prop */
import React, { useContext, useState } from 'react'
import Drawer from "@mui/material/Drawer";
import { Box, List, Typography } from '@mui/material';
import { AutoAwesomeMotionOutlined, BackupTableOutlined, ReceiptLongOutlined, RocketLaunchOutlined, SettingsOutlined } from '@mui/icons-material';
import { ListItemComponents } from '..';
import { UiContext } from '@/context';

const KEYINIT = 0;

export const DrawerComponent = () => {

  const { sideMenuOpen, handleSideCloseMenu } = useContext(UiContext);

    const arrayIcon = [
      {
        children: <AutoAwesomeMotionOutlined />,
        title: "Backlog",
      },
      {
        children: <BackupTableOutlined />,
        title: "Board",
      },
      {
        children: <ReceiptLongOutlined />,
        title: "Reports",
      },
      {
        children: <RocketLaunchOutlined />,
        title: "Release",
      },
      {
        children: <SettingsOutlined />,
        title: "Settings",
      },
    ];
  
  
  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={sideMenuOpen}
      onClose={handleSideCloseMenu}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h5"> Menu Bar </Typography>
        </Box>
        <List sx={{ display: "flex", flexDirection: "column" }}>
          {arrayIcon.map(({ children, title }) => (
            <ListItemComponents
              key={KEYINIT + 1}
              children={children}
              title={title}
            />
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
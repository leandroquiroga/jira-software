import React, { useState } from 'react'
import Drawer from "@mui/material/Drawer";
import { Box, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import { AutoAwesomeMotionOutlined, BackupTableOutlined, ReceiptLongOutlined, RocketLaunchOutlined, SailingOutlined, SettingsOutlined } from '@mui/icons-material';

export const DrawerComponent = () => {

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
      <List sx={{display: 'flex', flexDirection: 'column'}}>
        <ListItemIcon>
          <AutoAwesomeMotionOutlined />
        </ListItemIcon>
        <ListItemIcon>
          <BackupTableOutlined />
        </ListItemIcon>
        <ListItemIcon>
          <ReceiptLongOutlined />
        </ListItemIcon>
        <ListItemIcon>
          <SettingsOutlined />
        </ListItemIcon>
        <ListItemIcon>
          <SailingOutlined />
        </ListItemIcon>
        <ListItemIcon>
          <RocketLaunchOutlined />
        </ListItemIcon>
      </List>
    </Drawer>
  );
};

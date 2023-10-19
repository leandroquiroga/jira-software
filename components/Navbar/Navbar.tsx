import React from "react"
import Image from "next/image";
import { AppBar, Box, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { ControlSwitch } from "@/components";

export const Navbar: React.FC = () => {

  const theme = useTheme();

  return ( 
    <AppBar position="static">
      <Toolbar sx={{display: "flex", justifyContent: 'space-between'}}>
        <Box sx={{ display: 'inherit', direction: 'row' }}>
          <IconButton size="large" edge="start" >
            <MenuOutlinedIcon />
          </IconButton>
          <Image src="/jira.ico" alt="icon-jira" width={40} height={40} />

          <Typography
            variant="subtitle1"
            color={`${theme.palette.mode === 'dark' && theme.palette.text}`}
            fontSize="20px"
            sx={{ m: 1 }}
          >
            Jira Software
          </Typography>
        </Box>

        <ControlSwitch />
      </Toolbar>
    </AppBar>
  );
}

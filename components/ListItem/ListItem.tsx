import React from 'react'
import { Divider, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import {ListItemProps} from '@/interfaces'


export const ListItemComponents: React.FC<ListItemProps> = ({ children, title }) => {
  return (
    <>
      <ListItem button>
        <ListItemIcon sx={{ cursor: "pointer" }}>
          {children}
          <ListItemText sx={{ ml: 1 }} primary={title} />
        </ListItemIcon>
      </ListItem>
      <Divider />
    </>
  );
};

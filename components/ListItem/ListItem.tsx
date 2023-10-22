import React from 'react'
import { ListItemIcon, Typography } from '@mui/material';
import { ListItemTitle } from '..';

interface ListItemProps {
  children: JSX.Element | JSX.Element[];
};

const KEYINIT = 0;

export const ListItemComponents = ({  children }: ListItemProps) => {
  console.log(children)
  return (
    <ListItemIcon>
      {children}
    </ListItemIcon>
  );
};

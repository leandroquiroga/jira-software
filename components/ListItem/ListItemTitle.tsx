import { Typography } from '@mui/material'
import React from 'react'

type Variant =
  | "button"
  | "body1"
  | "body2"
  | "caption"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "inherit"
  | "overline"
  | "subtitle1"
  | "subtitle2";

interface ListItemTitle {
  titleIcon: string;
  typeVariant: Variant;
}

export const ListItemTitle = ({ titleIcon, typeVariant }: ListItemTitle) => {
  return <Typography variant={typeVariant}> {titleIcon} </Typography>;
};

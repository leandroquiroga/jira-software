import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import { Entry } from '@/interfaces';

interface EntryCardProps {
  entry: Entry
}

export const EntryCard: React.FC<EntryCardProps> = ({ entry }) => {
  return (
    <Card sx={{ marginBottom: 1 }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.description}
          </Typography>
        </CardContent>

        <CardActions sx={{display:'flex', justifyContent: 'end'}}>
          <Typography variant='body2'>
            hace 20 minutos
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

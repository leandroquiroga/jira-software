import React, { DragEvent, useContext } from 'react'
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import { Entry } from '@/interfaces';
import { UiContext } from '@/context';

interface EntryCardProps {
  entry: Entry
}

export const EntryCard: React.FC<EntryCardProps> = ({ entry }) => {

  const { handleStartDragging, handleCloseDragging } = useContext(UiContext);

  const onDragStart = (event: DragEvent<HTMLDivElement>) => {

    event.dataTransfer.setData('uuid', entry._id)
    // TODO: Modificar el estado para saber que estoy haciendo drag

    handleStartDragging()
  };


  const onDragEnd = (event: DragEvent<HTMLDivElement>) => {
    // TODO: Cancelar on drag

    handleCloseDragging()
  };

  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.description}
          </Typography>
        </CardContent>

        <CardActions sx={{ display: "flex", justifyContent: "end" }}>
          <Typography variant="body2">hace 20 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

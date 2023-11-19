import React, { useContext, useMemo } from 'react'
import { List, Paper, useTheme } from "@mui/material";
import { EntriesContext, UiContext } from '@/context';
import { Entry, EntryStatus } from '@/interfaces';
import { EntryCard } from '../index';

import styles from './EntryList.module.css';

interface EntryListProps {
  status: EntryStatus
}

export const EntryList: React.FC<EntryListProps> = ({ status }) => {
  
  const theme = useTheme();
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, handleCloseDragging } = useContext(UiContext);

  // Se memoriza el valor cada vez que las entradas cambien.
  const entryStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries, status]
  );
  
  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => event.preventDefault(); 
  const onDropEntry = (event: React.DragEvent<HTMLDivElement>) => {
    const idEntry = event.dataTransfer.getData("uuid");

    const entry = entries.find(entry => entry._id === idEntry)!;
    
    const entryUpdated: Entry = { 
      ...entry,
      createdAt: Date.now(),
      status,
    }
    updateEntry(entryUpdated);
    handleCloseDragging()
  };

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.entry_list_dragging : ""}>
      <Paper
        sx={{
          height: "calc(100vh - 250px)",
          backgroundColor: "transparent",
          overflow: "auto",
          "&::-webkit-scrollbar": {
            width: "10px",
          },
          "&::-webkit-scrollbar-track": {
            background: `${theme.palette.background.default}`,
          },
          "&::-webkit-scrollbar-thumb": {
            background: `${
              theme.palette.mode === "dark"
                ? theme.palette.primary.dark
                : theme.palette.primary.light
            }`,
            border: `5px none ${
              theme.palette.mode === "dark"
                ? theme.palette.primary.dark
                : theme.palette.primary.light
            }`,
            borderRadius: "4px",
          },
          padding: 1,
        }}>
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: "all .3s" }}>
          {entryStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
}

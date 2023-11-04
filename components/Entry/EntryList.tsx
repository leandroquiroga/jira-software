import React, { useContext, useMemo } from 'react'
import { List, Paper, Typography, useTheme } from "@mui/material";
import { EntryCard } from '../index';
import { EntryStatus } from '@/interfaces';
import { EntriesContext } from '@/context';

interface EntryListProps {
  status: EntryStatus
}

export const EntryList: React.FC<EntryListProps> = ({status}) => {
  
  const { entries } = useContext(EntriesContext);

  // Se memoriza el valor cada vez que las entradas cambien.
  const entryStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );
  const theme = useTheme();
  return (
    <div>
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
          padding: 1 
        }}>
        {/* Todo va a cambiar dependiendo si estamos haciendo un drag and drop */}
        <List sx={{ opacity: 1}}>
          {
            entryStatus.map((entry) => (
              <EntryCard key={entry._id} entry={entry} />

            ))  
          }
        </List>
      </Paper>
    </div>
  );
}

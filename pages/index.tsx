import React from 'react';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import { ButtonModal, EntryList, Layout } from '@/components';

const HomePage = () => {
  
  return (
    <>
      <Layout>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: "calc(100vh - 100px)" }}>
              <CardHeader title="Pendientes" />
              <CardContent>
                <EntryList status="pending" />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ height: "calc(100vh - 100px)" }}>
              <CardHeader title="En progreso" />
              <CardContent>
                <EntryList status="in-progress" />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ height: "calc(100vh - 100px)" }}>
              <CardHeader title="Completadas" />
              <CardContent>
                <EntryList status="finished" />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Layout>
      <ButtonModal />
    </>
  );
}


export default HomePage;
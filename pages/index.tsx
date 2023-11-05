import { Button, Card, CardContent, CardHeader, Grid, IconButton, useTheme } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import { ButtonModal, Entry, EntryList, Layout } from '@/components';

const HomePage = () => {
  
  return (
    <>
      <Layout>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: "calc(100vh - 100px)" }}>
              <CardHeader title="Pendientes" />
              <CardContent>
                <Entry />
                <EntryList status="pending" />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ height: "calc(100vh - 100px)" }}>
              <CardHeader title="En progreso" />
              <CardContent>
                <Entry />
                <EntryList status="in-progress" />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ height: "calc(100vh - 100px)" }}>
              <CardHeader title="Completadas" />
              <CardContent>
                <Entry />
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
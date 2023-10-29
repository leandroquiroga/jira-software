import { Card, CardContent, CardHeader, Grid, useTheme } from '@mui/material';
import { EntryList, Layout } from '@/components';

const HomePage = () => {

  const theme = useTheme();
  
  return (
    <>
      <Layout>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: "calc(100vh - 100px)" }}>
              <CardHeader title="Pendientes" />
              <CardContent>
                <EntryList />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ height: "calc(100vh - 100px)" }}>
              <CardHeader title="En Progreso" />
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ height: "calc(100vh - 100px)" }}>
              <CardHeader title="Completadas" />
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}


export default HomePage;
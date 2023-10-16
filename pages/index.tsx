import { Typography, useTheme } from '@mui/material';
import { Layout } from '@/components';

const HomePage = () => {

  const theme = useTheme();

  console.log(theme)
  return (
    <>
      <Layout>
        <Typography
          variant="h3"
          color={`${
            theme.palette.mode === "dark" ? '#FBFBFE' : "#202020"
          }`}>
          Hola Mundo
        </Typography>
      </Layout>
    </>
  );
}


export default HomePage;
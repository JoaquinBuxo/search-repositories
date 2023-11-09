import Header from './components/Header';
import RepositoryList from './components/RepositoryList';
import Footer from './components/Footer';
import { Container, Box } from '@mui/material';

export default function Home() {
  return (
    <>
      <Header />
      <Container maxWidth='xl'>
        <Box my={4}>
          <RepositoryList />
        </Box>
      </Container>
      <Footer />
    </>
  );
}

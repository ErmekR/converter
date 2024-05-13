import Container from '@material-ui/core/Container';
import MainRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar';

function App() {

  return (
    <Container maxWidth="md">
      <Router>
        <Navbar />
        <MainRoutes />
      </Router>
    </Container>
  );
}

export default App;

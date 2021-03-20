import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu';

import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Menu />
        <Routes />
        <GlobalStyles />
      </div>
    </Router>
  );
}

export default App;

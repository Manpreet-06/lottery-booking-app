import './App.css';
import RouterConfig from './navigation/RouterConfig';
import Layout from './pages/Layout/Layout';
import LoginForm from './pages/Login/LoginForm';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
     {/* <Layout /> */}
     {/* <LoginForm /> */}
     <RouterConfig />
     </Router>
    </div>
  );
}

export default App;

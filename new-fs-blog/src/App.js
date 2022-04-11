import './App.css';
import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Settings from './pages/Settings/Settings';
import Signup from './pages/Signup/Signup';
import Single from './pages/Single/Single';
import Write from './pages/Write/Write';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {

  const user = false;

  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/signup'>
          {user ? <Home/> : <Signup />}
        </Route>
        <Route exact path='/login'>
          {user ? <Home/> : <Login />}
        </Route>
        <Route exact path='/write'>
          {user ? <Write /> : <Signup />}
        </Route>
        <Route exact path='/settings'>
          {user ? <Settings /> : <Signup />}
        </Route>
        <Route exact path='/post/:postId'>
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

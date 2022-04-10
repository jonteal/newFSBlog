import './App.css';
import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Settings from './pages/Settings/Settings';
import Signup from './pages/Signup/Signup';
import Single from './pages/Single/Single';
import Write from './pages/Write/Write';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Signup />
    </div>
  );
}

export default App;

import './App.css';
import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home/Home';
import Single from './pages/Single/Single';
import Write from './pages/Write/Write';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Write />
    </div>
  );
}

export default App;

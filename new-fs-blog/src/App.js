import './App.css';
import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home/Home';
import Single from './pages/Single/Single';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Single />
    </div>
  );
}

export default App;

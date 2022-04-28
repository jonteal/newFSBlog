// import Topbar from './components/Topbar/Topbar';
// import Home from './pages/Home/Home';
// import Login from './pages/Login/Login';
// import Settings from './pages/Settings/Settings';
// import Register from './pages/Register/Register';
// import Single from './pages/Single/Single';
// import Write from './pages/Write/Write';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';
// import { useContext } from 'react';
// import { Context } from './context/Context';

// function App() {

//   const {user} = useContext(Context);

//   return (
//     <Router>
//       <Topbar />
//       <Switch>
//         <Route exact path='/'>
//           <Home />
//         </Route>
//         <Route exact path='/register'>
//           {user ? <Home/> : <Register />}
//         </Route>
//         <Route exact path='/login'>
//           {user ? <Home/> : <Login />}
//         </Route>
//         <Route exact path='/write'>
//           {user ? <Write /> : <Register />}
//         </Route>
//         <Route exact path='/settings'>
//           {user ? <Settings /> : <Register />}
//         </Route>
//         <Route exact path='/post/:postId'>
//           <Single />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// export default App;


import Home from "./pages/Home/Home";
import TopBar from "./components/Topbar/Topbar";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
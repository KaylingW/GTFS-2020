import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import SignUp from './SignUp';
import * as serviceWorker from './serviceWorker';
import Navbar from "./Components/navbar/Navbar";
import GlobalStyle from './Components/Styles/Global';

const Routing = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <Router>
      <Navbar
        navbarState={navbarOpen}
        handleNavbar={() => setNavbarOpen(prevState => !prevState)}
      />
      
      <GlobalStyle />
      <div style={{ marginTop: '50px' }}>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </Router>
  )
}

ReactDOM.render(<Routing />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

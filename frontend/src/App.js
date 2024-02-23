import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import UserProfile from './components/UserProfile';
// Other imports

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/profile" component={UserProfile} />
          {/* Other routes */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
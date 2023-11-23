import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import'./index.css'
import Topics from './Topics'; // Replace with your actual Topics component
import Resources from './Resources'; // Replace with your actual Resources component
import Support from './Support'; // Replace with your actual Support component
import Login from './components/Login'; // Replace with your actual Login component
function App() {

  return (
<Router>
      <Switch>
        <Route path="/topics" component={Topics} />
        <Route path="/resources" component={Resources} />
        <Route path="/support" component={Support} />
        <Route path="/" component={Home} />
      </Switch>
</Router>
  );
}

export default App();

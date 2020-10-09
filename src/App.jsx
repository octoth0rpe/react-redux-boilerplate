import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import Page1 from 'pages/Page1';
import Page2 from 'pages/Page2'; 

const App = () => (
  <>
    <header>
      <nav>
        <Link to="/">Page 1</Link> | 
        <Link to="/page2">Page 2</Link>
      </nav>
    </header>
    <Switch>
      <Route exact path="/" component={Page1} />
      <Route exact path="/page2" component={Page2} />
    </Switch>
  </>
);

export default App;

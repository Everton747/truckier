import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from './pages/Index';
import Error from './pages/Error';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index}></Route>
        <Route component={Error}></Route>
      </Switch>
    </BrowserRouter>
  );
}

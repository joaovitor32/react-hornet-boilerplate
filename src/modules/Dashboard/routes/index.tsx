import React from 'react';
import { Switch } from 'react-router';

import Route from '../../../routes/Routes';
import Dashboard from '../pages/main';

const PostRoute: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard}/>
  </Switch>
);

export default PostRoute;
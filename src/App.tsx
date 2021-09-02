import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalRoute from './routes';

const App: React.FC = () => (
  <BrowserRouter>
      <GlobalRoute />
  </BrowserRouter>
);

export default App;
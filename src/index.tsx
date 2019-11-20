import React from 'react';
import ReactDOM from 'react-dom';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import './index.css';
import environment from './environment';
import routes from './routes';
import RoutingContext from './routing/RoutingContext';
import createRouter from './routing/createRouter';
import RouterRenderer from './routing/RouteRenderer';

// Uses the custom router setup to define a router instanace that we can pass through context
// @ts-ignore
const router = createRouter(routes);

// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
  <RelayEnvironmentProvider environment={environment}>
    <RoutingContext.Provider value={router.context}>
      {/* Render the active route */}
      <RouterRenderer />
    </RoutingContext.Provider>
  </RelayEnvironmentProvider>,
);

import JSResource from './JSResource';
import { preloadQuery } from 'react-relay/hooks';
import environment from './environment';
import { IRoutesDefinition } from './routing/types';

const routes: Array<IRoutesDefinition> = [
  {
    component: JSResource('Root', () => import('./Root')),
    prepare: (params: any) => {
      const query = require('./__generated__/RootQuery.graphql').default;
      return {
        query: preloadQuery(
            environment,
            query,
            {
                // owner: 'facebook',
                // name: 'relay',
            },
          // The fetchPolicy allows us to specify whether to render from cached
          // data if possible (store-or-network) or only fetch from network
          // (network-only).
          { fetchPolicy: 'store-or-network' },
        ),
      };
    },
    routes: [
      {
        path: '/',
        exact: true,
        /**
         * A lazy reference to the component for the home route. Note that we intentionally don't
         * use React.lazy here: that would start loading the component only when it's rendered.
         * By using a custom alternative we can start loading the code instantly. This is
         * especially useful with nested routes, where React.lazy would not fetch the
         * component until its parents code/data had loaded. Nested route support isn't
         * implemented in our mini-router yet, but one can imagine iterating over all
         * the matched route entries and calling .load() on each of their components.
         */
        component: JSResource('HomeRoot', () => import('./HomeRoot')),
        /**
         * A function to prepare the data for the `component` in parallel with loading
         * that component code. The actual data to fetch is defined by the component
         * itself - here we just reference a description of the data - the generated
         * query.
         */
        prepare: (params: any) => {
          const query = require('./__generated__/HomeRootSpaceshipsQuery.graphql').default
          return {
            query: preloadQuery(
              environment,
              query,
              {
                owner: 'facebook',
                name: 'relay',
              },
              // The fetchPolicy allows us to specify whether to render from cached
              // data if possible (store-or-network) or only fetch from network
              // (network-only).
              { fetchPolicy: 'store-or-network' },
            ),
          };
        },
      },
      {
        path: '/spaceship/:id',
        exact: true,
        component: JSResource('SpaceshipDetailRoot', () => import('./SpaceshipDetailRoot')), 
        prepare: (params: any) => {
          const query = require('./__generated__/SpaceshipDetailRootQuery.graphql').default
          return {
            query: preloadQuery(
              environment,
              query,
              {
                id: params.id
              },
              // The fetchPolicy allows us to specify whether to render from cached
              // data if possible (store-or-network) or only fetch from network
              // (network-only).
              { fetchPolicy: 'store-or-network' },
            ),
          };
        }
      }
    ],
  },
];

export default routes;

import { graphql } from 'babel-plugin-relay/macro';
import React from 'react';
import SpaceshipListItem from './Spaceship';
import { PreparedRoutedQuery } from './routing/types';
import { HomeRootSpaceshipsQueryResponse, HomeRootSpaceshipsQueryVariables } from './__generated__/HomeRootSpaceshipsQuery.graphql';
import { usePreparedRouteData } from './routing/usePreparedRouteData';

/**
 * The root component for the home route.
 */
export default function HomeRoot(props: PreparedRoutedQuery<HomeRootSpaceshipsQueryResponse, HomeRootSpaceshipsQueryVariables>) {
  // Defines *what* data the component needs via a query. The responsibility of
  // actually fetching this data belongs to the route definition: it calls
  // preloadQuery() with the query and variables, and the result is passed
  // on props.prepared.spaceshipsQuery - see src/routes.js
  const data = usePreparedRouteData(
    props, 
    graphql`
      query HomeRootSpaceshipsQuery {
        spaceships {
          # Compose the data dependencies of child components
          # by spreading their fragments:
          ...SpaceshipsListItem_spaceship
        }
      }
    `
    )

  const { spaceships } = data;

  if (!spaceships || !spaceships.length) return 'No spaceship found.'

  return (
    <ul>
      {spaceships.map((spaceship, i) => (
        <li key={`spaceship-list-item-${i}`}>
          <SpaceshipListItem {...spaceship}/>
        </li>
      ))}
    </ul>
  )
}

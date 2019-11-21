import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { usePreparedRouteData } from './routing/usePreparedRouteData';
import { PreparedRoutedQuery } from './routing/types';
import { SpaceshipDetailRootQueryResponse, SpaceshipDetailRootQueryVariables } from './__generated__/SpaceshipDetailRootQuery.graphql';

export default function SpaceshipDetailRoot(props: PreparedRoutedQuery<SpaceshipDetailRootQueryResponse, SpaceshipDetailRootQueryVariables>) {
  const data = usePreparedRouteData(
    props, 
    graphql`
        query SpaceshipDetailRootQuery($id: ID!) {
            spaceship(id: $id) {
                ... on Spaceship {
                    id
                    name
                    commander {
                        id
                        name
                    }
                }
            }
        }
    `)

    if (!data.spaceship) return `Spaceship with id ${props.routeData.params.id} not found.`

    return (
        <div>
            <h3>{data.spaceship.name}</h3>
            <h5>Commander is {data.spaceship.commander ? data.spaceship.commander.name : '(unknown)'}</h5>
            <p>Welcome on board ;)</p>
        </div>
    )
}
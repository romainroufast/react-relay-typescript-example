// Example.js
import React from 'react';
import { QueryRenderer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro'
import environment from './environment'
import { ExampleQuery, ExampleQueryResponse } from "./__generated__/ExampleQuery.graphql"

const Spaceships = (props: ExampleQueryResponse) => {
    return (
      <div>
        <h4>Spaceships rendered by Relay <small>(see schema.graphql)</small></h4>
        {props.spaceships && props.spaceships.length > 0 && props.spaceships.map(s => s !== null && <div key={`spaceship-${s.id}`}>{s.name}</div>)}
      </div>      
    )
}
  
const Example = () => {
  return (
    <QueryRenderer<ExampleQuery>
      environment={environment}
      query={graphql`
        query ExampleQuery{
          spaceships {
            id,
            name,
            commander {
              id, 
              name
            }
          }
        }
      `}
      render={({ props }) => {
        if (props) {
          return <Spaceships {...props} />
        }
        return <div>Loading</div>
      }}
      variables={{}}
    />
  );
}
export default Example

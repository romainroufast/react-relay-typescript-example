import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { RootQueryResponse } from './__generated__/RootQuery.graphql';
import { PreparedRoutedQuery } from './routing/types';
import { usePreparedRouteData } from './routing/usePreparedRouteData'

const { Suspense } = React;


export default function Root(props: PreparedRoutedQuery<RootQueryResponse>) {
  // Defines *what* data the component needs via a query. The responsibility of
  // actually fetching this data belongs to the route definition: it calls
  // preloadQuery() with the query and variables, and the result is passed
  // on props.prepared.query - see src/routes.js
  const data = usePreparedRouteData<RootQueryResponse>(
    props, 
    graphql`
      query RootQuery {
        spaceships {
            id
            name
            commander {
                id
                name
            }
        }
      }
    `)
  const { spaceships } = data;

  console.log(spaceships)

  return (
    <div className="root">
      <header className="header">
        Spaceships
      </header>
      <section className="content">
        {/* Wrap the child in a Suspense boundary to allow rendering the 
        layout even if the main content isn't ready */}
        <Suspense fallback={'Loading...'}>{props.children}</Suspense>
      </section>
    </div>
  );
}

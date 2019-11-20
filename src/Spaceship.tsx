import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay/hooks';
import React from 'react';
// import { SpaceshipsListItem_spaceship } from './__generated__/SpaceshipsListItem_spaceship.graphql'
import Link from './routing/Link';

/**
 * Renders a single item (issue) in the issues list.
 */
export default function SpaceshipListItem(props: any) {
  // Given a reference to a specific issue - props.issue - define *what*
  // data the component needs about the issue in order to render it.
  // Note that Relay will only give the component access to the exact fields
  // defined in the fragment. Relay will also subscribe for updates to just
  // those fields, updating the component if the values change due to a mutation
  // or the data being refetched.
  const spaceship = useFragment(
    graphql`
      fragment SpaceshipsListItem_spaceship on Spaceship {
        id
        name
        commander {
            id
            name
        }
      }
    `,
    props.spaceship,
  );

  // Describe how to render the data:
  return <Link to={`/spaceship/${spaceship.id}`}>{spaceship.name}</Link>;
}

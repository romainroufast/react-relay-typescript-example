import { graphql } from 'babel-plugin-relay/macro'

const spaceshipFragment = graphql`
  fragment SpaceshipFragment on Spaceship {
    id
    name
    commander {
      id
      name
    }
  }
`;

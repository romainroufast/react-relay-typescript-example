/// <reference types="react-scripts" />
/// <reference types="react/experimental" />
declare module 'babel-plugin-relay/macro' {
	export { graphql, useFragment, usePreloadedQuery, RelayEnvironmentProvider } from 'react-relay/hooks'
}
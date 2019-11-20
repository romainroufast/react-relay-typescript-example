// import { usePreloadedQuery } from 'babel-plugin-relay/macro';
import { GraphQLTaggedNode } from 'relay-runtime';
import { PreparedRoutedQuery } from './types';
import { usePreloadedQuery } from 'react-relay/hooks';

export function usePreparedRouteData<T>(props: PreparedRoutedQuery<T>, gqlQuery: GraphQLTaggedNode): T {
    const data = usePreloadedQuery(gqlQuery, props.prepared.query)

    return data as T
}
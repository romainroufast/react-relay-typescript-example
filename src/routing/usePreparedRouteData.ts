// import { usePreloadedQuery } from 'babel-plugin-relay/macro';
import { GraphQLTaggedNode } from 'relay-runtime';
import { PreparedRoutedQuery } from './types';
import { usePreloadedQuery } from 'react-relay/hooks';

export function usePreparedRouteData<T, U>(props: PreparedRoutedQuery<T, U>, gqlQuery: GraphQLTaggedNode): T {
    const data = usePreloadedQuery(gqlQuery, props.prepared.query)

    return data as T
}
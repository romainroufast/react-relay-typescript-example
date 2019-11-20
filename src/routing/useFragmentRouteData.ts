import { GraphQLTaggedNode } from 'relay-runtime';
import { FragmentQuery } from './types';
import { useFragment } from 'react-relay/hooks';

export function useFragmentRouteData<T>(fragmentQuery: FragmentQuery<T>, gqlQuery: GraphQLTaggedNode): T {
    const data = useFragment(gqlQuery, fragmentQuery)

    return data as T
}
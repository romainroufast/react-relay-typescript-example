import React from 'react'
import { PreloadedQuery, EnvironmentProviderOptions } from "react-relay/lib/relay-experimental/EntryPointTypes";
import { OperationType } from "relay-runtime";
import { History, Location } from 'history';
import { IJSResource } from '../types';
import { RouteConfig } from 'react-router-config';

export interface IRouteMatchedEntry {
    component: React.ReactNode,
    prepared: {
        query: PreloadedQuery<OperationType, EnvironmentProviderOptions>
    },
    routeData: match<{}>
}

export interface IRouteDefinition {
    path: string,
    exact: boolean,
    component: IJSResource,
    prepare(params: any): {
        query: PreloadedQuery<OperationType, EnvironmentProviderOptions>
    },
}

export interface IRoutesDefinition extends RouteConfig {
    component: IJSResource,
    routes: IRouteDefinition[],
    prepare(params: any): {
        query: PreloadedQuery<OperationType, EnvironmentProviderOptions>
    },
}

export interface IRouteComponent {
    component: any,
    prepared: {
        query: PreloadedQuery<OperationType, EnvironmentProviderOptions>
    },
    routeData: match<{}>,
    children?: React.ReactNode,
}

export interface PreparedRoutedQuery<T> {
    dataType: T,
    children: React.ReactNode,
    prepared: {
        query: PreloadedQuery<OperationType, EnvironmentProviderOptions>
    },
    routeData: match<{}>
}

export interface IRouteEntry {
    location: Location<any>,
    entries: Array<IRouteMatchedEntry>;
}

export interface ICustomRouter {
    cleanup: Function,
    context: IRoutingContext
}

export interface IRoutingContext {
    history: History<any>,
    get(): IRouteEntry,
    preloadCode(pathname: string): any,
    preload(pathname: string): any,
    subscribe(cb: any): any
}

export interface ILink {
    children: React.ReactNode,
    to: string
}

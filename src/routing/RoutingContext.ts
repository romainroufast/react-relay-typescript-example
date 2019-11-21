import React from 'react';
import { IRoutingContext } from './types';

// @ts-ignore
const RoutingContext = React.createContext<IRoutingContext>(null);

/**
 * A custom context instance for our router type
 */
export default RoutingContext;
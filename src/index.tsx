import * as React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import Home from './screens/home';
import Products from './screens/products';
import Creditors from './screens/creditors';
import Registry from './screens/registry';

import { color } from './constants';

export default createBottomTabNavigator(
    {
        Home,
        Products,
        Creditors,
        Registry,
    },
    {
        tabBarOptions: {
            activeTintColor: color.dark,
            inactiveTintColor: color.light,
        },
    },
);

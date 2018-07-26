import * as React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import Home from './screens/home';
import Products from './screens/products';
import Creditors from './screens/creditors';
import Records from './screens/records';

import { color } from './constants';

export default createBottomTabNavigator(
    {
        Home,
        Products,
        Creditors,
        Records,
    },
    {
        tabBarOptions: {
            activeTintColor: color.dark,
            inactiveTintColor: color.light,
        },
        initialRouteName: 'Records',
    },
);

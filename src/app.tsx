import * as React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Home, Products, Creditors, Stats } from './index';
import { color } from './constants';

export default createBottomTabNavigator(
    {
        Home,
        Products,
        Creditors,
        Stats,
    },
    {
        tabBarOptions: {
            activeTintColor: color.dark,
            inactiveTintColor: color.light,
        },
    },
);

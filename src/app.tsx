import * as React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Home, Products, Creditors, Stats } from './index';

export default createBottomTabNavigator({
    Home,
    Products,
    Creditors,
    Stats,
});

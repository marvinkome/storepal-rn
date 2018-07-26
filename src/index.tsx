import * as React from 'react';
import { Icon } from 'react-native-elements';
import {
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';

import Home from './screens/home';
import Products from './screens/products';
import Creditors from './screens/creditors';
import Records from './screens/records';
import NewSale from './screens/newSale';
import NewProduct from './screens/newProduct';
import EditProduct from './screens/editProduct';
import CreditorItem from './screens/creditorsItems';
import PayDebt from './screens/payDebts';

import { color } from './constants';

export default createBottomTabNavigator(
    {
        Home: createStackNavigator({
            Home,
            NewSale,
            NewProduct
        }),
        Products: createStackNavigator({
            Products,
            EditProduct
        }),
        Creditors: createStackNavigator({
            Creditors,
            CreditorItem,
            PayDebt
        }),
        Records
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                if (routeName === 'Home') {
                    const iconName = `ios-home${focused ? '' : '-outline'}`;
                    return (
                        <Icon
                            name={iconName}
                            type="ionicon"
                            color={tintColor || ''}
                        />
                    );
                }

                if (routeName === 'Products') {
                    const iconName = `ios-cart${focused ? '' : '-outline'}`;
                    return (
                        <Icon
                            name={iconName}
                            type="ionicon"
                            color={tintColor || ''}
                        />
                    );
                }

                if (routeName === 'Creditors') {
                    const iconName = `ios-contact${focused ? '' : '-outline'}`;
                    return (
                        <Icon
                            name={iconName}
                            type="ionicon"
                            color={tintColor || ''}
                        />
                    );
                }
                return null;
            }
        }),
        tabBarOptions: {
            activeTintColor: color.dark,
            inactiveTintColor: color.light
        }
    }
);

import * as React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { StatusBar, View } from 'react-native';
import { Icon } from 'react-native-elements';
import {
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';

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

const Navigation = createBottomTabNavigator(
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

class MainApp extends React.Component {
    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <View style={{ flex: 1 }}>
                        <StatusBar
                            backgroundColor={color.light}
                            translucent={true}
                        />
                        <Navigation />
                    </View>
                </PersistGate>
            </Provider>
        );
    }
}

export default MainApp;

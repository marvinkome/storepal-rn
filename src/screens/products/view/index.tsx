import * as React from 'react';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import { View, Text } from 'react-native';

import Listing from '../../../components/listings';
import SearchBar from '../../../components/searchBar';
import { viewStyles as styles } from './styles';

class ScreenView extends React.Component<NavigationInjectedProps> {
    goToEditProductPage = () => {
        this.props.navigation.navigate('EditProduct');
    };
    render() {
        const productData = [
            {
                name: 'Ford Ranger',
                id: '0',
                price: 10,
                quantity: 12
            },
            {
                name: 'Cheese',
                id: '1',
                price: 10,
                quantity: 12
            }
        ];
        return (
            <View style={styles.background}>
                <SearchBar placeholder="Search products..." />
                <Listing
                    items={productData}
                    rightButton={{
                        title: 'Edit',
                        onPress: this.goToEditProductPage
                    }}
                    type="product"
                />
            </View>
        );
    }
}

export default withNavigation(ScreenView);

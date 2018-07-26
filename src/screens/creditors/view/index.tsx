import * as React from 'react';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { View, Text } from 'react-native';

import Listing from '../../../components/listings';
import SearchBar from '../../../components/searchBar';
import { viewStyles as styles } from './styles';

class ScreenView extends React.Component<NavigationInjectedProps> {
    goToCreditorsItemsPage = () => {
        this.props.navigation.navigate('CreditorItem');
    };
    render() {
        const productData = [
            {
                name: 'Rachel Smith',
                id: '0',
                price: 100,
                quantity: 2
            },
            {
                name: 'John Doe',
                id: '1',
                price: 10,
                quantity: 4
            }
        ];
        return (
            <View style={styles.background}>
                <SearchBar placeholder="Search creditors..." />
                <Listing
                    items={productData}
                    rightButton={{
                        title: 'View Items',
                        onPress: this.goToCreditorsItemsPage
                    }}
                    type="creditor"
                />
            </View>
        );
    }
}

export default withNavigation(ScreenView);

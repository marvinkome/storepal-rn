import * as React from 'react';
import { View, Text } from 'react-native';

import Listing from '../../../components/listings';
import SearchBar from '../../../components/searchBar';
import { viewStyles as styles } from './styles';

export default class ScreenView extends React.Component {
    render() {
        const productData = [
            {
                name: 'Rachel Smith',
                id: '0',
                price: 100,
                quantity: 2,
            },
            {
                name: 'John Doe',
                id: '1',
                price: 10,
                quantity: 4,
            },
        ];
        return (
            <View style={styles.background}>
                <SearchBar placeholder="Search creditors..." />
                <Listing
                    items={productData}
                    rightButton={{ title: 'View Items', onPress: () => null }}
                    creditors={true}
                />
            </View>
        );
    }
}

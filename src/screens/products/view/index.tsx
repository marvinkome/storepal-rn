import * as React from 'react';
import { View, Text } from 'react-native';

import Listing from '../../../components/listings';
import { viewStyles as styles } from './styles';

export default class ScreenView extends React.Component {
    render() {
        const productData = [
            {
                name: 'Ford Ranger',
                id: '0',
                price: 10,
                quantity: 12,
            },
            {
                name: 'Cheese',
                id: '1',
                price: 10,
                quantity: 12,
            },
        ];
        return (
            <View style={styles.background}>
                <Listing
                    items={productData}
                    rightButton={{ title: 'Edit', onPress: () => null }}
                />
            </View>
        );
    }
}

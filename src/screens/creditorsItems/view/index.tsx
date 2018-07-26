import * as React from 'react';
import { View, Text } from 'react-native';

import Listing from '../../../components/listings';
import { viewStyles as styles } from './styles';

export default class ScreenView extends React.Component {
    render() {
        const productData = [
            {
                name: 'Milk',
                id: '0',
                price: 100
            },
            {
                name: 'Cheese',
                id: '1',
                price: 10
            }
        ];
        return (
            <View style={styles.background}>
                <Listing
                    items={productData}
                    rightButton={{ title: 'Paid', onPress: () => null }}
                    type="creditor-item"
                />
            </View>
        );
    }
}

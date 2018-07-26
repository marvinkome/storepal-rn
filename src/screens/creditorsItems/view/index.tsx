import * as React from 'react';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { View, Text } from 'react-native';

import Listing from '../../../components/listings';
import { viewStyles as styles } from './styles';

class ScreenView extends React.Component<NavigationInjectedProps> {
    goToPayDebtsPage = () => {
        this.props.navigation.navigate('PayDebt');
    };
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
                    rightButton={{
                        title: 'Paid',
                        onPress: this.goToPayDebtsPage
                    }}
                    type="creditor-item"
                />
            </View>
        );
    }
}

export default withNavigation(ScreenView);

import * as React from 'react';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { View, Text } from 'react-native';
import { viewStyles as styles } from './styles';
import Card from './cards';

export class ScreenView extends React.Component<NavigationInjectedProps> {
    goToAddNewSalePage = () => {
        this.props.navigation.navigate('NewSale');
    };
    goToAddNewProductPage = () => {
        this.props.navigation.navigate('NewProduct');
    };
    render() {
        return (
            <View style={styles.container}>
                <Card type="sales" onPress={this.goToAddNewSalePage} />
                <Card type="purchase" onPress={this.goToAddNewProductPage} />
            </View>
        );
    }
}

export default withNavigation(ScreenView);

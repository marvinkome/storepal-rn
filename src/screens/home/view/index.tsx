import * as React from 'react';
import { View, Text } from 'react-native';
import { viewStyles as styles } from './styles';
import Card from './cards';

export default class ScreenView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Card type="sales" />
                <Card type="purchase" />
            </View>
        );
    }
}

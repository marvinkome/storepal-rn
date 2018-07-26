import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

import AddNewForm from './form';
import { viewStyles as styles } from './styles';

export default class ScreenView extends React.Component {
    onPress = () => null;
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Sale ID: 12-45</Text>
                </View>
                <AddNewForm />
                <Button
                    title="Add"
                    onPress={this.onPress}
                    buttonStyle={styles.button}
                    textStyle={styles.buttonText}
                />
            </ScrollView>
        );
    }
}

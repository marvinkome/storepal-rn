import * as React from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, CheckBox } from 'react-native-elements';
import { formStyles as styles } from './styles';

const AddNewForm = () => {
    return (
        <View>
            <View style={styles.inputContainer}>
                <FormInput placeholder="Product Name" />
            </View>
            <View style={styles.inputContainer}>
                <FormInput placeholder="Price" keyboardType="numeric" />
            </View>
            <View style={styles.inputContainer}>
                <FormInput placeholder="Quantity" keyboardType="numeric" />
            </View>
        </View>
    );
};

export default AddNewForm;

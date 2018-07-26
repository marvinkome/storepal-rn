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
                <FormInput placeholder="Quantity Sold" keyboardType="numeric" />
            </View>
            <View style={styles.inputContainer}>
                <FormInput placeholder="Amount Paid" keyboardType="numeric" />
            </View>
            <View style={styles.inputContainer}>
                <FormInput placeholder="Creditor Name" />
            </View>
            <View style={styles.inputContainer}>
                <CheckBox
                    checked={true}
                    title="This transaction will be marked as credit"
                />
            </View>
        </View>
    );
};

export default AddNewForm;

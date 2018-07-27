import * as React from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, CheckBox } from 'react-native-elements';
import { formStyles as styles } from './styles';

type Props = {
    onChange: (e: string, field: 'name' | 'price' | 'quantity') => void;
};

const AddNewForm = (props: Props) => {
    const changeName = (text: string) => props.onChange(text, 'name');
    const changePrice = (text: string) => props.onChange(text, 'price');
    const changeQuantity = (text: string) => props.onChange(text, 'quantity');

    return (
        <View>
            <View style={styles.inputContainer}>
                <FormInput
                    placeholder="Product Name"
                    onChangeText={changeName}
                />
            </View>
            <View style={styles.inputContainer}>
                <FormInput
                    placeholder="Price"
                    keyboardType="numeric"
                    onChangeText={changePrice}
                />
            </View>
            <View style={styles.inputContainer}>
                <FormInput
                    placeholder="Quantity"
                    keyboardType="numeric"
                    onChangeText={changeQuantity}
                />
            </View>
        </View>
    );
};

export default AddNewForm;

import * as React from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, CheckBox } from 'react-native-elements';
import { formStyles as styles } from './styles';

type Props = {
    defaultValue: {
        product_name: string;
        product_price: number;
    };
    onChange: (text: string, field: string) => void;
};

const AddNewForm = ({ onChange, defaultValue }: Props) => {
    return (
        <View>
            <View style={styles.inputContainer}>
                <FormInput
                    onChangeText={(text) => onChange(text, 'name')}
                    placeholder="Product Name"
                    value={defaultValue.product_name}
                />
            </View>
            <View style={styles.inputContainer}>
                <FormInput
                    onChangeText={(text) => onChange(text, 'price')}
                    placeholder="Price"
                    keyboardType="numeric"
                    value={String(defaultValue.product_price)}
                />
            </View>
        </View>
    );
};

export default AddNewForm;

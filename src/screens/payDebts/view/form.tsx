import * as React from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, CheckBox } from 'react-native-elements';
import { formStyles as styles } from './styles';

type Props = {
    onChange: (text: string) => void;
};

const AddNewForm = ({ onChange }: Props) => {
    return (
        <View>
            <View style={styles.inputContainer}>
                <FormInput
                    placeholder="Amount Paid"
                    keyboardType="numeric"
                    onChangeText={onChange}
                />
            </View>
        </View>
    );
};

export default AddNewForm;

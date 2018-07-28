import * as React from 'react';
import { View, Text } from 'react-native';
import {
    FormLabel,
    FormInput,
    CheckBox,
    FormValidationMessage
} from 'react-native-elements';
import { formStyles as styles } from './styles';

type field = 'product_name' | 'quantity' | 'amount_paid' | 'creditor_name';

type Props = {
    onChange: (text: string, field: field) => void;
    onCreditPress: () => void;
    shouldBeCredit: boolean;
    productNameValidation: string;
    quantityValidation: string;
    willBeCredit: boolean;
};

const AddNewForm = (props: Props) => {
    return (
        <View>
            {props.productNameValidation.length > 0 && (
                <FormValidationMessage>
                    {props.productNameValidation}
                </FormValidationMessage>
            )}
            <View style={styles.inputContainer}>
                <FormInput
                    placeholder="Product Name"
                    onChangeText={(text) =>
                        props.onChange(text, 'product_name')
                    }
                />
            </View>

            {props.quantityValidation.length > 0 && (
                <FormValidationMessage>
                    {props.quantityValidation}
                </FormValidationMessage>
            )}
            <View style={styles.inputContainer}>
                <FormInput
                    placeholder="Quantity Sold"
                    keyboardType="numeric"
                    onChangeText={(text) => props.onChange(text, 'quantity')}
                />
            </View>

            <View style={styles.inputContainer}>
                <FormInput
                    placeholder="Amount Paid"
                    keyboardType="numeric"
                    onChangeText={(text) => props.onChange(text, 'amount_paid')}
                />
            </View>

            {props.shouldBeCredit && (
                <React.Fragment>
                    <View style={styles.inputContainer}>
                        <CheckBox
                            onPress={props.onCreditPress}
                            checked={props.willBeCredit}
                            title="This transaction will be marked as credit"
                        />
                    </View>

                    {props.willBeCredit && (
                        <View style={styles.inputContainer}>
                            <FormInput
                                placeholder="Creditor Name"
                                onChangeText={(text) =>
                                    props.onChange(text, 'creditor_name')
                                }
                            />
                        </View>
                    )}
                </React.Fragment>
            )}
        </View>
    );
};

export default AddNewForm;

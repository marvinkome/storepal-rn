import * as React from 'react';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { View, Text, ScrollView, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

import { sellProduct } from '../../../store/actionCreators/products';
import { Products, Sales } from '../../../dataTypes';
import AddNewForm from './form';
import { viewStyles as styles } from './styles';

type fieldType = 'product_name' | 'quantity' | 'amount_paid' | 'creditor_name';

type Props = {
    products: Products[];
    sellProduct: (sale: Sales) => void;
};

type State = {
    credit_checked: boolean;
    product_id: string;
    product_name: string;
    product_price: number;
    product_quantity: number;
    product_error: string;
    quantity: number;
    quantity_error: string;
    amount_paid: number;
    requiredAmount: number;
    creditor_name?: string;
};

class ScreenView extends React.Component<
    Props & NavigationInjectedProps,
    State
> {
    constructor(props: any) {
        super(props);

        this.state = {
            product_id: '',
            product_name: '',
            product_price: 0,
            product_quantity: 0,
            product_error: '',
            credit_checked: false,
            quantity: 0,
            quantity_error: '',
            amount_paid: 0,
            requiredAmount: 0
        };
    }
    onChange = (text: string, field: fieldType) => {
        if (field === 'product_name') {
            // search for the product
            text = text.toLowerCase();

            const product = this.props.products.filter(
                (item) => item.name.toLowerCase() === text
            );

            if (product.length) {
                // update state
                this.setState({
                    product_error: '',
                    product_id: product[0].id,
                    product_name: product[0].name,
                    product_price: product[0].price,
                    product_quantity: product[0].quantity,
                    requiredAmount: product[0].price
                });
            } else {
                this.setState({
                    product_error: 'Product not found'
                });
            }
        } else if (field === 'creditor_name') {
            this.setState({
                creditor_name: text
            });
        } else {
            const intText = Number(text);

            if (field === 'quantity') {
                // make sure quantity is enough
                if (intText > this.state.product_quantity) {
                    return this.setState({
                        quantity_error: 'Product quantity not enough'
                    });
                }

                // recalculate required amount

                this.setState({
                    requiredAmount: this.state.product_price * intText,
                    quantity_error: ''
                });
            }

            // @ts-ignore
            this.setState({ [field]: intText });
        }
    };
    onCreditPress = () => {
        this.setState({
            credit_checked: !this.state.credit_checked
        });
    };
    onPress = () => {
        const {
            product_name,
            product_error,
            product_id: id,
            quantity,
            amount_paid,
            requiredAmount,
            credit_checked,
            product_price,
            creditor_name
        } = this.state;

        if (product_name.length && !product_error.length) {
            const changeRemaining = amount_paid - requiredAmount;

            // sale data
            let sale: Sales = {
                id,
                product_name,
                quantity_sold: quantity,
                date_sold: Date.now(),
                amount_paid,
                change_remaining: changeRemaining,
                on_credit: credit_checked
            };

            if (credit_checked) {
                if (!creditor_name || !creditor_name.length) {
                    return ToastAndroid.show(
                        'Please you have to add the creditor name',
                        ToastAndroid.LONG
                    );
                }
                const amountOwing = requiredAmount - amount_paid;

                const creditor = creditor_name;

                sale = {
                    ...sale,
                    amount_owing: amountOwing,
                    creditor_name: creditor
                };
            }

            this.props.sellProduct(sale);
            ToastAndroid.show('Sale has been recorded', ToastAndroid.SHORT);
            this.props.navigation.goBack();
        } else {
            ToastAndroid.show('No Product was selected', ToastAndroid.LONG);
        }
    };
    render() {
        const {
            product_error,
            quantity_error,
            requiredAmount,
            amount_paid
        } = this.state;
        const beCredit = amount_paid < requiredAmount;

        return (
            <ScrollView style={styles.container}>
                <AddNewForm
                    productNameValidation={this.state.product_error}
                    quantityValidation={this.state.quantity_error}
                    onChange={this.onChange}
                    onCreditPress={this.onCreditPress}
                    shouldBeCredit={beCredit}
                    willBeCredit={this.state.credit_checked}
                />
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

const mapStateToProps = (state: any) => ({
    products: state.products
});

const mapDispatchToProps = (dispatch: any) => ({
    sellProduct: (sale: any) => dispatch(sellProduct(sale))
});

export default withNavigation(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(ScreenView)
);

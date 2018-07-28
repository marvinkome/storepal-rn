import * as React from 'react';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { View, Text, ScrollView, ToastAndroid } from 'react-native';
import { Button } from 'react-native-elements';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';

import { Products } from '../../../dataTypes';
import { addProduct } from '../../../store/actions';

import AddNewForm from './form';
import { viewStyles as styles } from './styles';

type Props = {
    addProducts: (prod: Products) => void;
};

type State = {
    product: Products;
};

class ScreenView extends React.Component<
    Props & NavigationInjectedProps,
    State
> {
    constructor(props: any) {
        super(props);

        this.state = {
            product: {
                id: '',
                name: '',
                price: 0,
                quantity: 0
            }
        };
    }
    onInputChange = (e: string, field: 'name' | 'price' | 'quantity') => {
        if (field === 'name') {
            this.setState((prevState) => ({
                product: {
                    ...prevState.product,
                    name: e
                }
            }));
        } else {
            this.setState((prevState) => ({
                product: {
                    ...prevState.product,
                    [field]: Number(e)
                }
            }));
        }
    };
    onPress = () => {
        const product = {
            ...this.state.product,
            id: uuid()
        };

        this.props.addProducts(product);
        ToastAndroid.show('Product added', ToastAndroid.SHORT);
        this.props.navigation.goBack();
    };
    render() {
        return (
            <ScrollView style={styles.container}>
                <AddNewForm onChange={this.onInputChange} />
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

const mapDispatchToProps = (dispatch: any) => ({
    addProducts: (product: Products) => dispatch(addProduct(product))
});

export default withNavigation(
    connect(
        null,
        mapDispatchToProps
    )(ScreenView)
);

import * as React from 'react';
import { View, Text, ScrollView, ToastAndroid } from 'react-native';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

import { editProduct } from '../../../store/actions';
import { Products } from '../../../dataTypes';
import AddNewForm from './form';
import { viewStyles as styles } from './styles';

type Props = {
    products: Products[];
    editProduct: (data: { id: string; name: string; price: number }) => void;
};

type State = {
    product_id: string;
    product_name: string;
    product_price: number;
};

class ScreenView extends React.Component<
    NavigationInjectedProps & Props,
    State
> {
    constructor(props: NavigationInjectedProps & Props) {
        super(props);

        const productId = props.navigation.getParam('id');
        const product = props.products.filter(
            (item) => item.id === productId
        )[0];

        this.state = {
            product_id: product.id,
            product_name: product.name,
            product_price: product.price
        };
    }
    onChange = (text: string, field: string) => {
        if (field === 'name') {
            this.setState({ product_name: text });
        } else {
            this.setState({ product_price: Number(text) });
        }
    };
    onPress = () => {
        const { product_name, product_price, product_id } = this.state;
        const data = {
            id: product_id,
            name: product_name,
            price: product_price
        };

        this.props.editProduct(data);
        ToastAndroid.show('Product edited', ToastAndroid.SHORT);
        this.props.navigation.goBack();
    };
    render() {
        const { product_name, product_price } = this.state;
        return (
            <ScrollView style={styles.container}>
                <AddNewForm
                    onChange={this.onChange}
                    defaultValue={{ product_name, product_price }}
                />
                <Button
                    title="Edit"
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
    editProduct: (data: any) => dispatch(editProduct(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withNavigation(ScreenView));

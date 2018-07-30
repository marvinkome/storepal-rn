import * as React from 'react';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { View, Text, ToastAndroid } from 'react-native';

import { deleteProduct } from '../../../store/actions';
import { Products } from '../../../dataTypes';
import Listing from '../../../components/listings';
import SearchBar from '../../../components/searchBar';
import { viewStyles as styles } from './styles';

type Props = {
    deleteProduct: (id: string) => void;
    products: Products[];
};

type State = {
    searchText: string;
    products: Products[];
};

class ScreenView extends React.Component<
    NavigationInjectedProps & Props,
    State
> {
    constructor(props: NavigationInjectedProps & Props) {
        super(props);

        this.state = {
            searchText: '',
            products: props.products
        };
    }

    onSearchChange = (text: string) => {
        this.setState({
            searchText: text
        });
    };

    filterForSearch = (data: Products[], text: string) => {
        if (text.length) {
            // filter products
            return data.filter(
                (product) => product.name.toLowerCase() === text.toLowerCase()
            );
        } else {
            return data;
        }
    };

    goToEditProductPage = (id: string) => {
        this.setState({
            searchText: ''
        });

        this.props.navigation.navigate('EditProduct', {
            id
        });
    };

    deleteItem = (id: string) => {
        this.props.deleteProduct(id);
        ToastAndroid.show('Item deleted', ToastAndroid.LONG);
    };

    renderSubtitle = (style: any, price: number, quantity: number) => {
        return (
            <View style={style.container}>
                <Text>Price: ${price}</Text>
                <Text style={style.text}>Qty: {quantity}</Text>
            </View>
        );
    };

    render() {
        const products = this.filterForSearch(
            this.props.products,
            this.state.searchText
        );

        return (
            <View style={styles.background}>
                <SearchBar
                    value={this.state.searchText}
                    onChange={this.onSearchChange}
                    placeholder="Search products..."
                />
                <Listing
                    subtitle={this.renderSubtitle}
                    items={products}
                    type="product"
                    deleteAble={true}
                    onSwipe={this.deleteItem}
                    rightButton={{
                        title: 'Edit',
                        onPress: this.goToEditProductPage
                    }}
                />
            </View>
        );
    }
}

const mapStateToProps = (state: any) => ({
    products: state.products
});

const mapDispatchToProps = (dispatch: any) => ({
    deleteProduct: (id: any) => dispatch(deleteProduct(id))
});

export default withNavigation(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(ScreenView)
);

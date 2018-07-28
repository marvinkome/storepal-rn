import * as React from 'react';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import { Products } from '../../../dataTypes';
import Listing from '../../../components/listings';
import SearchBar from '../../../components/searchBar';
import { viewStyles as styles } from './styles';

type Props = {
    products: Products[];
};

type State = {
    products: Products[];
};

class ScreenView extends React.Component<
    NavigationInjectedProps & Props,
    State
> {
    constructor(props: NavigationInjectedProps & Props) {
        super(props);

        this.state = {
            products: props.products
        };
    }
    onSearchChange = (text: string) => {
        const { products } = this.props;

        if (text.length) {
            // filter products
            const newProducts = products.filter(
                (product) => product.name.toLowerCase() === text.toLowerCase()
            );

            this.setState({
                products: newProducts
            });
        } else {
            this.setState({
                products
            });
        }
    };
    onClearText = () => {
        this.setState({
            products: this.props.products
        });
    };
    goToEditProductPage = () => {
        this.props.navigation.navigate('EditProduct');
    };
    render() {
        const { products } = this.state;

        return (
            <View style={styles.background}>
                <SearchBar
                    onChange={this.onSearchChange}
                    onClear={this.onClearText}
                    placeholder="Search products..."
                />
                <Listing
                    items={products}
                    rightButton={{
                        title: 'Edit',
                        onPress: this.goToEditProductPage
                    }}
                    type="product"
                />
            </View>
        );
    }
}

const mapStateToProps = (state: any) => ({
    products: state.products
});

export default connect(mapStateToProps)(withNavigation(ScreenView));

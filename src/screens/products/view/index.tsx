import * as React from 'react';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { View, Text, ToastAndroid } from 'react-native';

import { Products } from '../../../dataTypes';
import Listing from '../../../components/listings';
import SearchBar from '../../../components/searchBar';
import { viewStyles as styles } from './styles';

type Props = {
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

export default withNavigation(connect(mapStateToProps)(ScreenView));

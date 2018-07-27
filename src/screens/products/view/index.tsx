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

class ScreenView extends React.Component<NavigationInjectedProps & Props> {
    goToEditProductPage = () => {
        this.props.navigation.navigate('EditProduct');
    };
    render() {
        const { products } = this.props;

        return (
            <View style={styles.background}>
                <SearchBar placeholder="Search products..." />
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

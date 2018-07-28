import * as React from 'react';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import { Creditors } from '../../../dataTypes';
import Listing from '../../../components/listings';
import SearchBar from '../../../components/searchBar';
import { viewStyles as styles } from './styles';

type Props = {
    creditors: Creditors[];
};

type State = {
    searchText: string;
};

class ScreenView extends React.Component<
    NavigationInjectedProps & Props,
    State
> {
    state = { searchText: '' };

    onSearch = (text: string) => {
        this.setState({
            searchText: text
        });
    };

    filterForSearch = (data: Creditors[], text: string) => {
        if (text.length) {
            // filter products
            return data.filter(
                (creditor) => creditor.name.toLowerCase() === text.toLowerCase()
            );
        } else {
            return data;
        }
    };

    goToCreditorsItemsPage = (id: string) => {
        this.props.navigation.navigate('CreditorItem', {
            name: id
        });
    };

    render() {
        const data = this.filterForSearch(
            this.props.creditors,
            this.state.searchText
        );

        return (
            <View style={styles.background}>
                <SearchBar
                    value={this.state.searchText}
                    onChange={this.onSearch}
                    placeholder="Search creditors..."
                />
                <Listing
                    items={data}
                    rightButton={{
                        title: 'View Items',
                        onPress: this.goToCreditorsItemsPage
                    }}
                    type="creditor"
                />
            </View>
        );
    }
}

const mapStateToProps = (state: any) => ({
    creditors: state.creditors
});

export default connect(mapStateToProps)(withNavigation(ScreenView));

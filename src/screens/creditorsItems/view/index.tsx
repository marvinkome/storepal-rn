import * as React from 'react';
import { connect } from 'react-redux';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { View, Text } from 'react-native';

import { Creditors } from '../../../dataTypes';
import Listing from '../../../components/listings';
import { viewStyles as styles } from './styles';

type Props = {
    creditors: Creditors[];
};

class ScreenView extends React.Component<NavigationInjectedProps & Props> {
    goToPayDebtsPage = (productId: string) => {
        const creditorName = this.props.navigation.getParam('name');
        this.props.navigation.navigate('PayDebt', {
            creditorName,
            productId
        });
    };
    render() {
        const creditor = this.props.navigation.getParam('name');
        const productData = this.props.creditors.filter(
            (item) => item.name === creditor
        )[0].items_owing;

        return (
            <View style={styles.background}>
                <Listing
                    items={productData}
                    rightButton={{
                        title: 'Paid',
                        onPress: this.goToPayDebtsPage
                    }}
                    type="creditor-item"
                />
            </View>
        );
    }
}

const mapStateToProps = (state: any) => ({
    creditors: state.creditors
});

export default connect(mapStateToProps)(withNavigation(ScreenView));

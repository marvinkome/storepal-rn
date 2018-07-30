import * as React from 'react';
import { connect } from 'react-redux';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { View, Text } from 'react-native';

import { formatDate } from '../../../lib/helpers';
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

    renderSubtitle = (style: any, amountOwing: number, date: number) => {
        return (
            <View style={style.container}>
                <Text>Owing: ${amountOwing},</Text>
                <Text style={style.text}>On: {formatDate(date)}</Text>
            </View>
        );
    };

    render() {
        const creditor = this.props.navigation.getParam('name');
        const product = this.props.creditors.filter(
            (item) => item.name === creditor
        )[0];
        const productData = product ? product.items_owing : null;

        return (
            <View style={styles.background}>
                <Listing
                    subtitle={this.renderSubtitle}
                    items={productData || undefined}
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

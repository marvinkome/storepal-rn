import * as React from 'react';
import { connect } from 'react-redux';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

import { payDebt } from '../../../store/actions';
import AddNewForm from './form';
import { viewStyles as styles } from './styles';

type P = {
    payDebt: (
        data: {
            product_id: string;
            creditor: string;
            amount_paid: number;
        }
    ) => void;
};

type S = {
    amount_paid: number;
};

class ScreenView extends React.Component<P & NavigationInjectedProps, S> {
    state = { amount_paid: 0 };

    onChange = (text: string) => {
        this.setState({
            amount_paid: Number(text)
        });
    };

    onPress = () => {
        const productId = this.props.navigation.getParam('productId');
        const creditor = this.props.navigation.getParam('creditorName');
        const { amount_paid } = this.state;

        this.props.payDebt({
            product_id: productId,
            creditor,
            amount_paid
        });

        this.props.navigation.navigate('Creditors');
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <AddNewForm onChange={this.onChange} />
                <Button
                    title="Process"
                    onPress={this.onPress}
                    buttonStyle={styles.button}
                    textStyle={styles.buttonText}
                />
            </ScrollView>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    payDebt: (data: any) => dispatch(payDebt(data))
});

export default connect(
    null,
    mapDispatchToProps
)(withNavigation(ScreenView));

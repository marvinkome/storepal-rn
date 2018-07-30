import * as React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { ButtonGroup } from 'react-native-elements';

import { Sales } from '../../../dataTypes';
import { Record, CreditRecord } from './records';
import { viewStyle as styles } from './styles';

type Props = {
    sales: Sales[];
};

type State = {
    selectedIndex: number;
};

class ScreenView extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            selectedIndex: 0
        };
    }
    changeIndex = (index: number) => {
        this.setState({
            selectedIndex: index
        });
    };
    showNoItem = () => {
        return (
            <View style={styles.showNoItems}>
                <Text>No data available</Text>
            </View>
        );
    };
    showNormalRecords = () => {
        const record = this.props.sales.reduce((total: any[], item) => {
            if (!item.on_credit) {
                total.push({
                    item: item.product_name,
                    quantity: item.quantity_sold,
                    date: item.date_sold,
                    recieved: item.amount_paid
                });
            }

            return total;
        }, []);

        return record.length
            ? record.map((data, index) => <Record key={index} data={data} />)
            : this.showNoItem();
    };
    showCreditRecords = () => {
        const record = this.props.sales.reduce((total: any[], item) => {
            if (item.on_credit) {
                total.push({
                    item: item.product_name,
                    quantity: item.quantity_sold,
                    date: item.date_sold,
                    creditor: item.creditor_name,
                    amountOwing: item.amount_owing
                });
            }

            return total;
        }, []);

        return record.length
            ? record.map((data, index) => (
                  <CreditRecord key={index} data={data} />
              ))
            : this.showNoItem();
    };
    render() {
        const buttons = ['Product Sold', 'Products sold on credit'];

        return (
            <View style={styles.container}>
                <ButtonGroup
                    onPress={this.changeIndex}
                    selectedIndex={this.state.selectedIndex}
                    buttons={buttons}
                    containerStyle={styles.btnContainer}
                />
                {this.state.selectedIndex === 0
                    ? this.showNormalRecords()
                    : this.showCreditRecords()}
            </View>
        );
    }
}

const mapStateToProps = (state: any) => ({
    sales: state.sales
});

export default connect(mapStateToProps)(ScreenView);

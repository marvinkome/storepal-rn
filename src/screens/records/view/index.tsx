import * as React from 'react';
import { Text, View } from 'react-native';
import { ButtonGroup } from 'react-native-elements';

import { Record, CreditRecord } from './records';
import { viewStyle as styles } from './styles';

type state = {
    selectedIndex: number;
};

export default class ScreenView extends React.Component<{}, state> {
    constructor(props: any) {
        super(props);

        this.state = {
            selectedIndex: 0,
        };
    }
    changeIndex = (index: number) => {
        this.setState({
            selectedIndex: index,
        });
    };
    showNormalRecords = () => {
        const recordData = [
            {
                item: 'Ford Ranger',
                quantity: 4,
                date: 'Fri Mar 4 2018',
                recieved: 20,
            },
            {
                item: 'Cheese',
                quantity: 2,
                date: 'Fri Mar 4 2018',
                recieved: 20,
            },
            {
                item: 'Milk',
                quantity: 1,
                date: 'Fri Mar 4 2018',
                recieved: 20,
            },
        ];

        return recordData.map((data, index) => (
            <Record key={index} data={data} />
        ));
    };
    showCreditRecords = () => {
        const recordData = [
            {
                item: 'Ford Ranger',
                quantity: 4,
                date: 'Fri Mar 4 2018',
                creditor: 'Rachel',
                amountOwing: 50,
            },
            {
                item: 'Milk',
                quantity: 4,
                date: 'Fri Mar 4 2018',
                creditor: 'John',
                amountOwing: 30,
            },
        ];
        return recordData.map((data, index) => (
            <CreditRecord key={index} data={data} />
        ));
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

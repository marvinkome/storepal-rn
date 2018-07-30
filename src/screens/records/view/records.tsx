import * as React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

import { formatDate } from '../../../lib/helpers';
import { recordStyle as styles } from './styles';

type recordCardProp = {
    data: {
        item: string;
        quantity: number;
        date: number;
    };
    secondaryElem: JSX.Element;
};

type recordProp = {
    data: {
        item: string;
        quantity: number;
        date: number;
        recieved: number;
        change?: number;
    };
};

type creditRecordProp = {
    data: {
        item: string;
        quantity: number;
        date: number;
        creditor: string;
        amountOwing: number;
    };
};

const RecordCard = ({ data, secondaryElem }: recordCardProp) => {
    return (
        <Card
            title={data.item}
            containerStyle={styles.container}
            titleStyle={styles.title}
            dividerStyle={styles.divider}
        >
            <View>
                <Text style={styles.secondaryText}>
                    Sold {data.quantity}pcs on {formatDate(data.date)}
                </Text>
                {secondaryElem}
            </View>
        </Card>
    );
};

export const Record = ({ data }: recordProp) => {
    return (
        <RecordCard
            data={data}
            secondaryElem={
                <Text style={styles.secondaryText}>
                    Recieved ${data.recieved}. Change ${data.change || 0}
                </Text>
            }
        />
    );
};

export const CreditRecord = ({ data }: creditRecordProp) => {
    return (
        <RecordCard
            data={data}
            secondaryElem={
                <Text style={styles.secondaryText}>
                    To {data.creditor} on credit. Owing ${data.amountOwing}
                </Text>
            }
        />
    );
};

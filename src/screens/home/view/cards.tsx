import * as React from 'react';
import { View } from 'react-native';
import { Card, Text, Icon, Button } from 'react-native-elements';

import { cardStyles as styles } from './styles';

type Props = {
    type: 'purchase' | 'sales';
    onPress: () => void;
};

const ViewCard = ({ type, onPress }: Props) => {
    const icon = type === 'sales' ? 'ios-cash' : 'truck-delivery';
    const iconType = type === 'sales' ? 'ionicon' : 'material-community';
    const buttonRight = {
        name: 'plus',
        type: 'feather',
        style: styles.buttonText
    };

    return (
        <Card
            title={type.toUpperCase()}
            containerStyle={styles.container}
            wrapperStyle={styles.wrapper}
            dividerStyle={styles.divider}
            titleStyle={styles.text}
        >
            <View>
                <Icon name={icon} type={iconType} iconStyle={styles.icon} />
                <Button
                    title={'ADD NEW'}
                    iconRight={buttonRight}
                    onPress={onPress}
                    buttonStyle={styles.button}
                    textStyle={styles.buttonText}
                />
            </View>
        </Card>
    );
};

export default ViewCard;

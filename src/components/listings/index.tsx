import * as React from 'react';
import { View, Text } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';
import { viewStyles as styles } from './styles';

type Prop = {
    items: Array<{
        id: string;
        name: string;
        price: number;
        quantity: number;
    }>;
    rightButton?: {
        title: string;
        onPress: () => void;
    };
    creditors?: boolean;
};

const ShowSubtitle = (item: {
    creditors?: boolean;
    price: number;
    quantity: number;
}) => {
    return item.creditors ? (
        <React.Fragment>
            <Text>Qwing: ${item.price}</Text>
            <Text style={styles.quantityText}>Items: {item.quantity}</Text>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <Text>Price: ${item.price}</Text>
            <Text style={styles.quantityText}>Qty: {item.quantity}</Text>
        </React.Fragment>
    );
};

export const Listing = ({ items, rightButton, creditors }: Prop) => {
    return (
        <List containerStyle={styles.container}>
            {items.map((item) => {
                return (
                    <ListItem
                        key={item.id}
                        title={item.name}
                        titleStyle={styles.title}
                        rightIcon={
                            rightButton ? (
                                <Button
                                    title={rightButton.title}
                                    onPress={rightButton.onPress}
                                    buttonStyle={styles.editButton}
                                    textStyle={styles.editButtonText}
                                />
                            ) : (
                                <Text />
                            )
                        }
                        subtitle={
                            <View style={styles.subtitleContainer}>
                                <ShowSubtitle
                                    creditors={creditors}
                                    price={item.price}
                                    quantity={item.quantity}
                                />
                            </View>
                        }
                    />
                );
            })}
        </List>
    );
};

export default Listing;

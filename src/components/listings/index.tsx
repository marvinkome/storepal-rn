import * as React from 'react';
import { View, Text } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';
import { viewStyles as styles } from './styles';

type Prop = {
    items: Array<{
        id: string;
        name: string;
        price: number;
        quantity?: number;
        date?: string;
    }>;
    rightButton?: {
        title: string;
        onPress: () => void;
    };
    type: 'product' | 'creditor' | 'creditor-item';
};

const ShowSubtitle = (item: {
    type: 'product' | 'creditor' | 'creditor-item';
    price: number;
    quantity?: number;
    date?: string;
}) => {
    if (item.type === 'product') {
        return (
            <React.Fragment>
                <Text>Price: ${item.price}</Text>
                <Text style={styles.quantityText}>Qty: {item.quantity}</Text>
            </React.Fragment>
        );
    } else if (item.type === 'creditor') {
        return (
            <React.Fragment>
                <Text>Items: {item.quantity}</Text>
                <Text style={styles.quantityText}>Owing: ${item.price}</Text>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <Text>Owing: ${item.price}</Text>
            </React.Fragment>
        );
    }
};

export const Listing = ({ items, rightButton, type }: Prop) => {
    const renderItems = () => {
        return items.map((item) => {
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
                                type={type}
                                price={item.price}
                                quantity={item.quantity}
                                date={item.date}
                            />
                        </View>
                    }
                />
            );
        });
    };

    const renderNoItems = () => {
        let title = 'You have no products yet';

        if (type === 'creditor') {
            title = 'You have no creditors yet';
        }

        if (type === 'creditor-item') {
            title = 'All debts have been paid';
        }

        return (
            <ListItem
                title="You have no products yet"
                titleStyle={styles.title}
                rightIcon={<Text />}
            />
        );
    };

    return (
        <List containerStyle={styles.container}>
            {items.length ? renderItems() : renderNoItems()}
        </List>
    );
};

export default Listing;

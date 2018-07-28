import * as React from 'react';
import { View, Text } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';
import { formatDate } from '../../lib/helpers';
import { viewStyles as styles } from './styles';

type Prop = {
    items: Array<{
        name: string;
        product_id?: string;
        amount_owing?: number;
        date_purchased?: number;
        id?: string;
        price?: number;
        quantity?: number;
        total_ammount_owing?: number;
        items_owing?: any[];
    }>;
    rightButton?: {
        title: string;
        onPress: (id: string) => void;
    };
    type: 'product' | 'creditor' | 'creditor-item';
};

const ShowSubtitle = (item: {
    type: 'product' | 'creditor' | 'creditor-item';
    price: number;
    quantity?: number;
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
        const date = formatDate(item.quantity || 0);
        return (
            <React.Fragment>
                <Text>Owing: ${item.price},</Text>
                <Text style={styles.quantityText}>On: {date}</Text>
            </React.Fragment>
        );
    }
};

export const Listing = ({ items, rightButton, type }: Prop) => {
    const renderItems = () => {
        return items.map((item, index) => {
            const name = item.name;
            const price =
                item.price ||
                item.total_ammount_owing ||
                item.amount_owing ||
                0;
            const quantity =
                item.quantity ||
                (item.items_owing ? item.items_owing.length : 0) ||
                item.date_purchased ||
                0;
            const rightBtn = rightButton ? (
                <Button
                    title={rightButton.title}
                    onPress={() =>
                        rightButton.onPress(
                            item.id || item.product_id || item.name
                        )
                    }
                    buttonStyle={styles.editButton}
                    textStyle={styles.editButtonText}
                />
            ) : (
                <Text />
            );

            return (
                <ListItem
                    key={index}
                    title={name}
                    titleStyle={styles.title}
                    rightIcon={rightBtn}
                    subtitle={
                        <View style={styles.subtitleContainer}>
                            <ShowSubtitle
                                type={type}
                                price={price}
                                quantity={quantity}
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
                title={title}
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

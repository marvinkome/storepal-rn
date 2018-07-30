import * as React from 'react';
import Swipeable from 'react-native-swipeable';
import { View, Text } from 'react-native';
import { List, ListItem, Button, Icon } from 'react-native-elements';

import { formatDate } from '../../lib/helpers';
import { ListingItem } from './listingItem';
import { viewStyles as styles } from './styles';

function renderNoItems(type: 'product' | 'creditor' | 'creditor-item') {
    let title = 'You have no products';

    if (type === 'creditor') {
        title = 'No creditors here';
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
}

function deleteView() {
    return (
        <View style={styles.deleteContainer}>
            <Icon iconStyle={styles.deleteIcon} name="trash-2" type="feather" />
        </View>
    );
}

type Prop = {
    items?: Array<{
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
    subtitle: (style: any, price: number, quantity: number) => JSX.Element;
    deleteAble?: boolean;
    onSwipe?: (id: string) => void;
};

export const Listing = ({ items, rightButton, type, ...props }: Prop) => {
    const itemMap = (item: any, index: number) => {
        const name = item.name;
        const price =
            item.price || item.total_ammount_owing || item.amount_owing || 0;
        const quantity =
            item.quantity ||
            (item.items_owing ? item.items_owing.length : 0) ||
            item.date_purchased ||
            0;
        const rightBtn = rightButton ? (
            <Button
                title={rightButton.title}
                onPress={() =>
                    rightButton.onPress(item.id || item.product_id || item.name)
                }
                buttonStyle={styles.editButton}
                textStyle={styles.editButtonText}
            />
        ) : (
            <Text />
        );

        return (
            <ListingItem
                key={index}
                name={name}
                subtitle={props.subtitle}
                rightBtn={rightBtn}
                swipeable={props.deleteAble || false}
                swipeContent={deleteView()}
                price={price}
                quantity={quantity}
                rightAction={() =>
                    props.onSwipe ? props.onSwipe(item.id) : null
                }
            />
        );
    };

    if (items) {
        return (
            <List containerStyle={styles.container}>
                {items.length ? items.map(itemMap) : renderNoItems(type)}
            </List>
        );
    } else {
        return null;
    }
};

export default Listing;

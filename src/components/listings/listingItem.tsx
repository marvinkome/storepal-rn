import * as React from 'react';
import Swipeable from 'react-native-swipeable';
import { ListItem } from 'react-native-elements';
import { viewStyles as styles } from './styles';

type ListingItemProp = {
    name: string;
    price: number;
    quantity: number;
    subtitle: (style: any, price: number, quantity: number) => JSX.Element;
    rightBtn: JSX.Element;
    swipeable: boolean;
    swipeContent?: JSX.Element;
    rightAction?: () => void;
};
export function ListingItem(props: ListingItemProp) {
    let content = (
        <ListItem
            title={props.name}
            titleStyle={styles.title}
            rightIcon={props.rightBtn}
            subtitle={props.subtitle(
                {
                    text: styles.quantityText,
                    container: styles.subtitleContainer
                },
                props.price,
                props.quantity
            )}
        />
    );

    if (props.swipeable) {
        content = (
            <Swipeable
                rightContent={props.swipeContent}
                onRightActionRelease={props.rightAction}
            >
                {content}
            </Swipeable>
        );
    }

    return content;
}

import * as React from 'react';
import { View, Text } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';
import { viewStyles as styles } from './styles';

type Prop = {
    items: Array<{
        id: string;
        name: string;
        price?: number;
        quantity?: number;
    }>;
    rightButton?: {
        title: string;
        onPress: () => void;
    };
};

export const Listing = ({ items, rightButton }: Prop) => {
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
                                {item.price && (
                                    <Text>Price: ${item.price}</Text>
                                )}
                                {item.quantity && (
                                    <Text style={styles.quantityText}>
                                        Qty: {item.quantity}
                                    </Text>
                                )}
                            </View>
                        }
                    />
                );
            })}
        </List>
    );
};

export default Listing;

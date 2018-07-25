import * as React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Products extends React.Component {
    static navigationOptions = () => ({
        tabBarIcon: ({
            focused,
            tintColor,
        }: {
            focused: boolean;
            tintColor: string;
        }) => {
            const iconName = `ios-cart${focused ? '' : '-outline'}`;
            return <Icon name={iconName} type="ionicon" color={tintColor} />;
        },
    })

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text>Hello from products</Text>
            </View>
        );
    }
}

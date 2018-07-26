import * as React from 'react';
import { Text } from 'react-native';
import { Icon } from 'react-native-elements';

import ScreenWrapper from '../../components/appWrapper';
import View from './view';

export default class Creditors extends React.Component {
    static navigationOptions = () => ({
        tabBarIcon: ({
            focused,
            tintColor,
        }: {
            focused: boolean;
            tintColor: string;
        }) => {
            const iconName = `ios-contact${focused ? '' : '-outline'}`;
            return <Icon name={iconName} type="ionicon" color={tintColor} />;
        },
    });

    render() {
        return <ScreenWrapper title="Creditors" render={<View />} />;
    }
}

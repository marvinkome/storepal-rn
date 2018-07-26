import * as React from 'react';
import { Icon } from 'react-native-elements';

import ScreenWrapper from '../../components/appWrapper';
import View from './view';

export default class Registry extends React.Component {
    static navigationOptions = () => ({
        tabBarIcon: ({
            focused,
            tintColor,
        }: {
            focused: boolean;
            tintColor: string;
        }) => {
            const iconName = `ios-book${focused ? '' : '-outline'}`;
            return <Icon name={iconName} type="ionicon" color={tintColor} />;
        },
    });

    render() {
        return <ScreenWrapper title="Records" render={<View />} />;
    }
}

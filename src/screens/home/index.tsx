import * as React from 'react';
import { Icon } from 'react-native-elements';

import ScreenWrapper from '../../components/appWrapper';
import PageView from './view';

export default class Home extends React.Component {
    static navigationOptions = () => ({
        tabBarIcon: ({
            focused,
            tintColor,
        }: {
            focused: boolean;
            tintColor: string;
        }) => {
            const iconName = `ios-home${focused ? '' : '-outline'}`;
            return <Icon name={iconName} type="ionicon" color={tintColor} />;
        },
    });

    render() {
        return <ScreenWrapper title="Home" render={<PageView />} />;
    }
}

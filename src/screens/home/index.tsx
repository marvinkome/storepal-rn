import * as React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import ScreenWrapper from '../../components/appWrapper';
import PageView from './view';

export default class Home extends React.Component<NavigationScreenProps> {
    static navigationOptions = {
        header: null
    };

    render() {
        // @ts-ignore
        return <ScreenWrapper title="Home" render={<PageView />} />;
    }
}

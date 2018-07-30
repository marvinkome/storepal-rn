import * as React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import Screenwrapper from '../../components/appWrapper';
import { getHeaderSettings } from '../../lib/helpers';
import PageView from './view';

export default class Home extends React.Component<NavigationScreenProps> {
    static navigationOptions = {
        header: null
    };

    render() {
        // @ts-ignore
        return <Screenwrapper title="home" render={<PageView />} />;
    }
}

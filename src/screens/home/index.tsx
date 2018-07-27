import * as React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { getHeaderSettings } from '../../lib/helpers';
import PageView from './view';

export default class Home extends React.Component<NavigationScreenProps> {
    static navigationOptions = getHeaderSettings('home');

    render() {
        // @ts-ignore
        return <PageView />;
    }
}

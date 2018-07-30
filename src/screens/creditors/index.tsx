import * as React from 'react';
import { Icon } from 'react-native-elements';
import Screenwrapper from '../../components/appWrapper';
import { getHeaderSettings } from '../../lib/helpers';
import View from './view';

export default class Creditors extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        // @ts-ignore
        return <Screenwrapper title="creditors" render={<View />} />;
    }
}

import * as React from 'react';
import { Icon } from 'react-native-elements';

import { getHeaderSettings } from '../../lib/helpers';
import View from './view';

export default class Creditors extends React.Component {
    static navigationOptions = getHeaderSettings('creditors');

    render() {
        // @ts-ignore
        return <View />;
    }
}

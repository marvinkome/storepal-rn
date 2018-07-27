import * as React from 'react';
import { Text } from 'react-native';
import { Icon } from 'react-native-elements';

import { getHeaderSettings } from '../../lib/helpers';
import View from './view';

export default class Products extends React.Component {
    static navigationOptions = getHeaderSettings('Creditors Item');

    render() {
        // @ts-ignore
        return <View />;
    }
}

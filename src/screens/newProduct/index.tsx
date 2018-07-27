import * as React from 'react';
import { Text } from 'react-native-elements';

import { getHeaderSettings } from '../../lib/helpers';
import View from './view';

export default class NewProduct extends React.Component {
    static navigationOptions = getHeaderSettings('add new product');
    render() {
        return <View />;
    }
}

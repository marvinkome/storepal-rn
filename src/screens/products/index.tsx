import * as React from 'react';
import { Text } from 'react-native';

import { getHeaderSettings } from '../../lib/helpers';
import View from './view';

export default class Products extends React.Component {
    static navigationOptions = getHeaderSettings('products');

    render() {
        // @ts-ignore
        return <View />;
    }
}

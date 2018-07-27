import * as React from 'react';
import { Text } from 'react-native-elements';

import { getHeaderSettings } from '../../lib/helpers';
import View from './view';

export default class EditProduct extends React.Component {
    static navigationOptions = getHeaderSettings('edit product');

    render() {
        return <View />;
    }
}

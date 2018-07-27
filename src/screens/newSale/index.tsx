import * as React from 'react';
import { Text } from 'react-native-elements';

import { getHeaderSettings } from '../../lib/helpers';
import View from './view';

export default class NewSale extends React.Component {
    static navigationOptions = getHeaderSettings('add new sale');

    render() {
        return <View />;
    }
}

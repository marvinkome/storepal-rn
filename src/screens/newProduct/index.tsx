import * as React from 'react';
import { Text } from 'react-native-elements';

import ScreenWrapper from '../../components/appWrapper';
import View from './view';

export default class NewProduct extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return <ScreenWrapper title="Add New Product" render={<View />} />;
    }
}

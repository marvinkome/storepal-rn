import * as React from 'react';
import { Text } from 'react-native';
import { Icon } from 'react-native-elements';

import ScreenWrapper from '../../components/appWrapper';
import View from './view';

export default class Products extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        // @ts-ignore
        return <ScreenWrapper title="Creditors Item" render={<View />} />;
    }
}

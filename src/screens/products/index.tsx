import * as React from 'react';
import { Text } from 'react-native';

import ScreenWrapper from '../../components/appWrapper';
import View from './view';

export default class Products extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        // @ts-ignore
        return <ScreenWrapper title="Products" render={<View />} />;
    }
}

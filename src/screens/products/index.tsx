import * as React from 'react';
import { Text } from 'react-native';
import Screenwrapper from '../../components/appWrapper';
import { getHeaderSettings } from '../../lib/helpers';
import View from './view';

export default class Products extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        // @ts-ignore
        return <Screenwrapper title="products" render={<View />} />;
    }
}

import * as React from 'react';
import { Icon } from 'react-native-elements';

import ScreenWrapper from '../../components/appWrapper';
import View from './view';

export default class Creditors extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        // @ts-ignore
        return <ScreenWrapper title="Creditors" render={<View />} />;
    }
}

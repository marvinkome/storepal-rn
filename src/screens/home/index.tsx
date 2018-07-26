import * as React from 'react';

import ScreenWrapper from '../../components/appWrapper';
import PageView from './view';

export default class Home extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return <ScreenWrapper title="Home" render={<PageView />} />;
    }
}

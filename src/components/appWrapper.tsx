import * as React from 'react';
import Topbar from './topbar';

type Props = {
    render: JSX.Element;
    title: string;
};

export default class MainPage extends React.Component<Props, {}> {
    render() {
        return (
            <React.Fragment>
                <Topbar pageTitle={this.props.title} />
                {this.props.render}
            </React.Fragment>
        );
    }
}

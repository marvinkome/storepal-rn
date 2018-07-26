import * as React from 'react';
import { Header, Text } from 'react-native-elements';
import { color } from '../../constants';

import styles from './styles';

type Props = {
    pageTitle: string;
};

const TopBar = ({ pageTitle }: Props) => {
    const centerComponent = {
        text: pageTitle.toUpperCase(),
        style: styles.text,
    };

    const statusBarProps = {
        backgroundColor: color.light,
        translucent: true,
    };

    return (
        <Header
            centerComponent={centerComponent}
            outerContainerStyles={styles.header}
            statusBarProps={statusBarProps}
        />
    );
};

export default TopBar;

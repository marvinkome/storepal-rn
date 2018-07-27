import * as React from 'react';
import { Header, Text } from 'react-native-elements';

import styles from './styles';

type Props = {
    pageTitle: string;
};

const TopBar = ({ pageTitle }: Props) => {
    const centerComponent = {
        text: pageTitle.toUpperCase(),
        style: styles.text
    };

    return (
        <Header
            centerComponent={centerComponent}
            outerContainerStyles={styles.header}
        />
    );
};

export default TopBar;

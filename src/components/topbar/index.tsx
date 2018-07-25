import * as React from 'react';
import { Header, Text } from 'react-native-elements';
import { color } from '../../constants';

import styles from './styles';

type Props = {
    pageTitle: string;
};

const TopBar = ({ pageTitle }: Props) => {
    return (
        <Header
            centerComponent={{
                text: pageTitle.toUpperCase(),
                style: styles.text,
            }}
            outerContainerStyles={styles.header}
            statusBarProps={{
                backgroundColor: color.light,
                translucent: true,
            }}
        />
    );
};

export default TopBar;

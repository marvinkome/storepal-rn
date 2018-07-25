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
            leftComponent={
                <Text style={styles.text}>{pageTitle.toUpperCase()}</Text>
            }
            rightComponent={{
                icon: 'search',
                style: styles.icon,
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

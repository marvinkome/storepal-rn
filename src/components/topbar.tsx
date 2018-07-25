import * as React from 'react';
import { Header, Text } from 'react-native-elements';

type Props = {
    pageTitle: string;
};

const TopBar = ({ pageTitle }: Props) => {
    return (
        <Header>
            <Text>{pageTitle}</Text>
        </Header>
    );
};

export default TopBar;

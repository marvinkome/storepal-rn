import * as React from 'react';
import { connect } from 'react-redux';
import { Header, Text } from 'react-native-elements';

import { Products } from '../../dataTypes';
import styles from './styles';

type Props = {
    products: Products[];
    pageTitle: string;
};

const TopBar = ({ pageTitle, products }: Props) => {
    const itemsOutOfStock = products.filter((item) => item.quantity < 2);
    const rightComponent = (
        <Text style={styles.textSmall}>
            Items out of stock: {itemsOutOfStock.length}
        </Text>
    );
    const leftComponent = (
        <Text style={styles.text}>{pageTitle.toUpperCase()}</Text>
    );

    return (
        <Header
            leftComponent={leftComponent}
            rightComponent={rightComponent}
            outerContainerStyles={styles.header}
        />
    );
};

const mapStateToProps = (state: any) => ({
    products: state.products
});

export default connect(mapStateToProps)(TopBar);

import * as React from 'react';
import { SearchBar } from 'react-native-elements';
import { search as styles } from './styles';

type props = {
    placeholder?: string;
};

const Search = ({ placeholder }: props) => {
    return (
        <SearchBar
            containerStyle={styles.container}
            inputStyle={styles.input}
            round={true}
            lightTheme={true}
            placeholder={placeholder || 'Search...'}
        />
    );
};

export default Search;

import * as React from 'react';
import { SearchBar } from 'react-native-elements';
import { search as styles } from './styles';

type props = {
    value: string;
    onChange: (text: string) => void;
    placeholder?: string;
};

const Search = ({ placeholder, onChange, value }: props) => {
    return (
        <SearchBar
            containerStyle={styles.container}
            inputStyle={styles.input}
            round={true}
            lightTheme={true}
            placeholder={placeholder || 'Search...'}
            onChangeText={onChange}
            value={value}
        />
    );
};

export default Search;

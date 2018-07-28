import * as React from 'react';
import { SearchBar } from 'react-native-elements';
import { search as styles } from './styles';

type props = {
    onClear: () => void;
    onChange: (text: string) => void;
    placeholder?: string;
};

const Search = ({ placeholder, onChange, onClear }: props) => {
    return (
        <SearchBar
            containerStyle={styles.container}
            inputStyle={styles.input}
            round={true}
            lightTheme={true}
            placeholder={placeholder || 'Search...'}
            onChangeText={onChange}
            onClearText={onClear}
        />
    );
};

export default Search;

import { StyleSheet } from 'react-native';
import { color } from '../../../constants';

export const viewStyles = StyleSheet.create({
    container: {
        backgroundColor: color.lighter,
        flex: 1
    },
    headerContainer: {
        margin: 10
    },
    headerText: {
        fontSize: 14,
        color: color.dark,
        width: '50%'
    },
    button: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: color.normal,
        borderRadius: 7,
        elevation: 1,
        marginLeft: 95,
        marginRight: 95,
        marginBottom: 40,
        padding: 5
    },
    buttonText: {
        color: color.normal
    }
});

export const formStyles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#fff',
        margin: 10,
        elevation: 7,
        borderRadius: 7
    }
});

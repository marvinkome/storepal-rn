import { StyleSheet } from 'react-native';
import { color } from '../../../constants';

export const viewStyles = StyleSheet.create({
    container: {
        backgroundColor: color.lighter,
        flex: 1,
        justifyContent: 'center',
    },
});

export const cardStyles = StyleSheet.create({
    container: {
        borderRadius: 7,
        margin: 15,
        marginLeft: 40,
        marginRight: 40,
        elevation: 15,
    },
    wrapper: {
        backgroundColor: '#fff',
        padding: 10,
    },
    text: {
        color: color.normal,
        fontSize: 15,
        marginBottom: 5,
    },
    divider: {
        display: 'none',
    },
    icon: {
        marginTop: 5,
        color: color.dark,
        fontSize: 35,
        marginBottom: 5,
    },
    button: {
        backgroundColor: 'transparent',
        borderColor: color.normal,
        borderWidth: 1,
        borderRadius: 7,
    },
    buttonText: {
        color: color.light,
        fontWeight: '500',
    },
});

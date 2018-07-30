import { StyleSheet } from 'react-native';
import { color } from '../../../constants';

export const viewStyle = StyleSheet.create({
    container: {
        backgroundColor: color.lighter,
        flex: 1
    },
    btnContainer: {
        height: 30
    },
    showNoItems: {
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 10,
        paddingTop: 30,
        paddingBottom: 30
    }
});

export const recordStyle = StyleSheet.create({
    container: {
        borderRadius: 4,
        margin: 4
    },
    title: {
        color: color.dark,
        fontSize: 15,
        marginBottom: 5,
        textAlign: 'left'
    },
    divider: {
        display: 'none'
    },
    secondaryText: {
        fontSize: 13,
        color: 'hsl(0, 0%, 45%)'
    },
    icon: {
        marginTop: 5,
        color: color.dark,
        fontSize: 35,
        marginBottom: 5
    },
    button: {
        backgroundColor: 'transparent',
        borderColor: color.normal,
        borderWidth: 1,
        borderRadius: 7
    },
    buttonText: {
        color: color.light,
        fontWeight: '500'
    }
});

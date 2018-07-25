import { StyleSheet } from 'react-native';
import { color } from '../../constants';

export const viewStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: color.lighter,
    },
    container: {
        marginTop: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        color: color.dark,
    },
    subtitleContainer: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 5,
    },
    quantityText: {
        paddingLeft: 5,
    },
    editButton: {
        backgroundColor: 'transparent',
        borderColor: color.normal,
        borderWidth: 1,
        borderRadius: 7,
        paddingTop: 5,
        paddingBottom: 5,
        margin: 0,
        marginLeft: 0,
        marginRight: 0,
    },
    editButtonText: {
        color: color.light,
        fontWeight: '500',
    },
});

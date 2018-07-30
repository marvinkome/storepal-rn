import { StyleSheet } from 'react-native';
import { color } from '../../constants';

export default StyleSheet.create({
    header: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginTop: 5
    },
    text: {
        color: color.normal,
        fontSize: 17,
        fontWeight: '500'
    },
    textSmall: {
        fontSize: 15,
        fontWeight: '500'
    }
});

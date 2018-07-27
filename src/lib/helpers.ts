import { color } from '../constants/index';

export const getHeaderSettings = (title: string) => {
    const newTitle = title.toUpperCase();
    const headerOptions = {
        title: newTitle,
        headerStyle: {
            backgroundColor: '#fff',
            paddingTop: 12,
            marginTop: 15
        },
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
            textTransform: 'uppercase',
            color: color.normal,
            fontSize: 17,
            fontWeight: '500'
        }
    };

    return headerOptions;
};

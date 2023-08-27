import { OptionType } from './types';
import { StylesConfig } from 'react-select'

export const colorOptions: OptionType[] = [
    { value: 'red', label: 'RED ZONE', color: '#FF4136' },
    { value: 'blue', label: 'BLUE ZONE', color: '#0074D9' },
    { value: 'black', label: 'BLACK ZONE', color: 'black' },
    { value: 'yellow', label: 'YELLOW ZONE', color: 'yellow' },
    { value: 'roads', label: 'ROADS AVALON', color: 'orange' },
];

export const colourStyles: StylesConfig<OptionType> = {
    option: (styles, { data }) => ({
        ...styles,
        padding: '8px',
        display: 'flex',
        borderRadius: '0px',
        alignItems: 'center',
        ':before': {
            content: '""',
            width: '16px',
            height: '16px',
            marginRight: '8px',
            borderRadius: '50%',
            display: 'inline-block',
            backgroundColor: data.color,
        },
    }),
    singleValue: (styles, { data }) => ({
        ...styles,
        display: 'flex',
        alignItems: 'center',
        ':before': {
            content: '""',
            width: '16px',
            height: '16px',
            marginRight: '8px',
            borderRadius: '50%',
            display: 'inline-block',
            backgroundColor: data.color,
        },
    }),
};
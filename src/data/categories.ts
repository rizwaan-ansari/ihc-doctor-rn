
import { FastImageProps } from 'react-native-fast-image';
import { 
    IMG_CARDIOLOGY_THEME_ICON,
    IMG_DENTISTRY_THEME_ICON,
    IMG_DERMATOLOGY_THEME_ICON,
    IMG_ENT_THEME_ICON,
    IMG_UROLOGY_THEME_ICON 
} from '../assets/images';

export type CATEGORIES = {
    id?: number,
    title?: string,
    image?: FastImageProps['source'],
    iconBg?: string,
}

export const CATEGORIES: CATEGORIES[] = [
    {
        id: 1,
        title: 'Cardiology',
        image: IMG_CARDIOLOGY_THEME_ICON,
        iconBg: '#E6EFFC'
    },
    {
        id: 2,
        title: 'Dentistry',
        image: IMG_DENTISTRY_THEME_ICON,
        iconBg: '#EFEEFE'
    },
    {
        id: 3,
        title: 'Dermatology',
        image: IMG_DERMATOLOGY_THEME_ICON,
        iconBg: '#FDECEA'
    },
    {
        id: 4,
        title: 'Urologist',
        image: IMG_UROLOGY_THEME_ICON,
        iconBg: '#EBF7EC'
    },
    {
        id: 5,
        title: 'ENT',
        image: IMG_ENT_THEME_ICON,
        iconBg: '#FFF6E9'
    },
];
import { Source } from "react-native-fast-image";
import { 
    IMG_APPOINTMENT_MENU_ICON, 
    IMG_AVAILABILITY_MENU_ICON, 
    IMG_LANGUAGE_MENU_ICON, 
    IMG_MY_PROFILE_MENU_ICON, 
    IMG_NOTIFICATIONS_MENU_ICON, 
    IMG_PATIENTS_MENU_ICON, 
    IMG_REVIEWS_MENU_ICON, 
    IMG_TIME_BLOCK_MENU_ICON,
    IMG_WALLET_MENU_ICON
} from "../assets/images";

interface mainMenu {
    id: number;
    key: string;
    title: string;
    image: Source;
    link: string;
    hasNotification: boolean;
}

const MAINMENU: mainMenu[] = [
    {
        id: 0,
        key: 'appointments',
        title: 'Appointments',
        image: IMG_APPOINTMENT_MENU_ICON,
        link: 'BookingListScreen',
        hasNotification: true,
    },
    {
        id: 1,
        key: 'patients',
        title: 'Patients',
        link: 'PatientListScreen',
        image: IMG_PATIENTS_MENU_ICON,
        hasNotification: false,
    },
    {
        id: 2,
        key: 'notifications',
        title: 'Notifications',
        link: 'NotificationScreen',
        image: IMG_NOTIFICATIONS_MENU_ICON,
        hasNotification: true,
    },
    {
        id: 3,
        key: 'availability',
        title: 'Availability',
        link: 'BookingListScreen',
        image: IMG_AVAILABILITY_MENU_ICON,
        hasNotification: false,
    },
    {
        id: 4,
        key: 'time_block',
        title: 'Time Block',
        link: 'BookingListScreen',
        image: IMG_TIME_BLOCK_MENU_ICON,
        hasNotification: false,
    },
    {
        id: 5,
        key: 'wallet',
        title: 'Wallet',
        link: 'DoctorWalletScreen',
        image: IMG_WALLET_MENU_ICON,
        hasNotification: true,
    },
    {
        id: 6,
        key: 'reviews',
        title: 'Reviews',
        link: 'ReviewScreen',
        image: IMG_REVIEWS_MENU_ICON,
        hasNotification: true,
    },
    {
        id: 7,
        key: 'language',
        title: 'Language',
        link: 'ChangeLanguageScreen',
        image: IMG_LANGUAGE_MENU_ICON,
        hasNotification: false,
    },
    {
        id: 8,
        key: 'my_profile',
        title: 'My Profile',
        link: 'EditProfileScreen',
        image: IMG_MY_PROFILE_MENU_ICON,
        hasNotification: false,
    }
]

export default MAINMENU;
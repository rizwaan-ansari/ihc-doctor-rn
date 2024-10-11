import { Source } from "react-native-fast-image";
import { 
    IMG_PATIENT_2_PROFILE_ICON, 
    IMG_PATIENT_3_PROFILE_ICON, 
    IMG_PATIENT_4_PROFILE_ICON, 
    IMG_PATIENT_PROFILE_ICON 
} from "../assets/images";

interface PatientDataProps {
    id: number;
    key: string;
    title: string;
    image: Source;
    hasNotification: boolean;
}


const PATIENT_DATA: PatientDataProps[] = [
    {
        id: 0,
        key: 'patients',
        title: 'Amr Murtuza bin Saleh',
        image: IMG_PATIENT_PROFILE_ICON,
        hasNotification: true

    },
    {
        id: 1,
        key: 'patients',
        title: 'Alia Rahman',
        image: IMG_PATIENT_2_PROFILE_ICON,
        hasNotification: true
    },
    {
        id: 2,
        key: 'patients',
        title: 'Amr Murtuza bin Saleh',
        image: IMG_PATIENT_3_PROFILE_ICON,
        hasNotification: false
    },
    {
        id: 3,
        key: 'patients',
        title: 'Amr Murtuza bin Saleh',
        image: IMG_PATIENT_4_PROFILE_ICON,
        hasNotification: false
    },
    {
        id: 4,
        key: 'patients',
        title: 'Amr Murtuza bin Saleh',
        image: IMG_PATIENT_PROFILE_ICON,
        hasNotification: false
    },
    {
        id: 5,
        key: 'patients',
        title: 'Alia Rahman',
        image: IMG_PATIENT_2_PROFILE_ICON,
        hasNotification: false
    },
    {
        id: 6,
        key: 'patients',
        title: 'Amr Murtuza bin Saleh',
        image: IMG_PATIENT_3_PROFILE_ICON,
        hasNotification: true
    },
    {
        id: 7,
        key: 'patients',
        title: 'Amr Murtuza bin Saleh',
        image: IMG_PATIENT_4_PROFILE_ICON,
        hasNotification: false
    }
]

export default PATIENT_DATA;
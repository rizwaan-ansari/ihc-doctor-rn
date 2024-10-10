import { Source } from "react-native-fast-image";
import { IMG_USER_PROFILE_4 } from "../assets/images";


interface BookingCardProps  {
    id: number;
    profile_pic: Source;
    patient_name: string;
    status: string;
    booking_id: string;
    consultation_fee: string;
    timeslot: string;
    date: string;
    appointment_type: string;
    date_and_time: string;
}


const BOOKING_CARD: BookingCardProps[] = [
    {
        id: 1,
        profile_pic: IMG_USER_PROFILE_4,
        patient_name: 'Christian Hickman',
        status: 'accepted',
        booking_id: '# 1281',
        consultation_fee: '30.00 KD',
        timeslot: '12:30pm',
        date: '15-08-21',
        appointment_type: 'Video Call',
        date_and_time: '5:30 PM - 6:00 PM, 15 Aug 2021',
    },
    {
        id: 2,
        profile_pic: IMG_USER_PROFILE_4,
        patient_name: 'Christian Hickman',
        status: 'completed',
        booking_id: '# 281',
        consultation_fee: '30 KD',
        timeslot: '5:30pm',
        date: '15-08-21',
        appointment_type: 'Video Call',
        date_and_time: '5:30 PM - 6:00 PM, 15 Aug 2021',
    },
    {
        id: 3,
        profile_pic: IMG_USER_PROFILE_4,
        patient_name: 'Christian Hickman',
        status: 'declined',
        booking_id: '# 281',
        consultation_fee: '30 KD',
        timeslot: '5:30pm',
        date: '15-08-21',
        appointment_type: 'Walk In',
        date_and_time: '5:30 PM - 6:00 PM, 15 Aug 2021',
    },
    {
        id: 4,
        profile_pic: IMG_USER_PROFILE_4,
        patient_name: 'Christian Hickman',
        status: 'pending',
        booking_id: '# 1281',
        consultation_fee: '30.00 KD',
        timeslot: '12:30pm',
        date: '15-08-21',
        appointment_type: 'Video call',
        date_and_time: '5:30 PM - 6:00 PM, 15 Aug 2021',
    },
]

export default BOOKING_CARD;
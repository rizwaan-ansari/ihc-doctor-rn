import { Source } from "react-native-fast-image";
import {
    IMG_ABOUT_ICON_MORE,
    IMG_CONTACT_US_ICON_MORE,
    IMG_FAQ_ICON_MORE,
    IMG_LOGIN_ICON_MORE,
    IMG_PRIVACY_POLICY_ICON_MORE,
    IMG_REGISTER_ICON_MORE,
    IMG_SECURITY_ICON_MORE,
    IMG_TERMS_CONDITIONS_ICON_MORE
}
    from "../assets/images";

interface FooterLink {
    id: number;
    image: Source;
    label: string;
}

const footerLinks: FooterLink[] = [
    {
        id: 1,
        image: IMG_ABOUT_ICON_MORE,
        label: "About"
    },
    {
        id: 2,
        image: IMG_PRIVACY_POLICY_ICON_MORE,
        label: "Privacy Policy"
    },
    {
        id: 3,
        image: IMG_TERMS_CONDITIONS_ICON_MORE,
        label: "Terms of services"
    },
    {
        id: 4,
        image: IMG_SECURITY_ICON_MORE,
        label: "Security"
    },
    {
        id: 5,
        image: IMG_CONTACT_US_ICON_MORE,
        label: "Contact us"
    },
    {
        id: 6,
        image: IMG_FAQ_ICON_MORE,
        label: "FAQ"
    },
    {
        id: 7,
        image: IMG_LOGIN_ICON_MORE,
        label: "Login"
    },
    {
        id: 8,
        image: IMG_REGISTER_ICON_MORE,
        label: "Register"
    },
]

export default footerLinks;
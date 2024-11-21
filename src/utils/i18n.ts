import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationIT from '../locales/it/translation.json';

// the translations
const resources = {
    it: {
        translation: translationIT,
    }
};

i18n
    .use(initReactI18next as any) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'it',
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        react: {
            //wait: true,
            useSuspense: true
        },
    } as any);

export default i18n;

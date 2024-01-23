import { translations as en } from '../translations/en.ts';
import { translations as it } from '../translations/it.ts';
export default function t(l: string, s: string) {
    const arr = s.split('.');
    switch (l) {
    case 'en': {
        const v = arr.reduce<string | object>((o, k) => {
            if (typeof o == 'object' && k in o) {
                return o[k as keyof typeof o];
            }
            return {};
        }, en);
        if (typeof v == 'string') {
            return v;
        }
        return '';
    }
    case 'it': {
        const v = arr.reduce<string | object>((o, k) => {
            if (typeof o == 'object' && k in o) {
                return o[k as keyof typeof o];
            }
            return {};
        }, it);
        if (typeof v == 'string') {
            return v;
        }
        return '';
    }
    }
}
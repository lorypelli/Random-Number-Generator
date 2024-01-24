import { translations as en } from '../../public/translations/en.ts';
import { translations as it } from '../../public/translations/it.ts';
export default function t(l: string, s: string, ...a: string[]) {
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
            if (v.includes('{')) {
                if (v.includes('{')) {
                    let str = v;
                    let c = 0;
                    str = v.replace(/\{.*?\}/g, () => {
                        const r = a[c];
                        c++;
                        return r;
                    });
                    return str;
                }
            }
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
            if (v.includes('{')) {
                let str = v;
                let c = 0;
                str = v.replace(/\{.*?\}/g, () => {
                    const r = a[c];
                    c++;
                    return r;
                });
                return str;
            }
            return v;
        }
        return '';
    }
    }
}
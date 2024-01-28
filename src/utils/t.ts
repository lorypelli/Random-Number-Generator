import { translations as en } from '../../translations/en.ts';
import { translations as it } from '../../translations/it.ts';
import { translations as pl } from '../../translations/pl.ts';
import { translations as mi } from '../../translations/mi.ts';
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
    case 'pl': {
        const v = arr.reduce<string | object>((o, k) => {
            if (typeof o == 'object' && k in o) {
                return o[k as keyof typeof o];
            }
            return {};
        }, pl);
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
    case 'mi': {
        const v = arr.reduce<string | object>((o, k) => {
            if (typeof o == 'object' && k in o) {
                return o[k as keyof typeof o];
            }
            return {};
        }, mi);
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
import { translations as en } from '../../translations/en.ts';
import { translations as it } from '../../translations/it.ts';
import { translations as pl } from '../../translations/pl.ts';
import { translations as mi } from '../../translations/mi.ts';
import { readdirSync } from 'fs';
interface Translations {
    document: {
        title: string;
        meta: {
            description: string;
            og: {
                title: string;
                description: string;
            };
        };
    };
    theme: {
        change: string;
    };
    error: {
        generic: string;
    };
    numbers: {
        amount: string;
    };
    mode: {
        decimal: string;
        binary: string;
        octal: string;
        hex: string;
    };
    frequency: {
        repeat: string;
        no_repeat: string;
    };
    number: {
        min: string;
        max: string;
    };
    gbutton: {
        text: string;
    };
    generate: {
        label: {
            single: string;
            multiple: string;
            duplicate: string;
            previous: string;
        };
        buttons: {
            another: string;
            intervals: string;
        };
    };
}
type SKey<T> = { [K in Extract<keyof T, string>]: T[K] extends string ? K : T[K] extends object ? `${K}.${SKey<T[K]>}` : never}[Extract<keyof T, string>]
export function t(l: string, s: SKey<Translations>, ...a: string[]) {
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
export function isValidLang(l: string) {
    const files = readdirSync('./translations');
    for (let i = 0; i < files.length; i++) {
        if (l == files[i].split('.')[0]) {
            return true;
        }
    }
    return false;
}
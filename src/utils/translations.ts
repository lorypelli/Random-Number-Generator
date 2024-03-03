import { TContext } from 'trslate';
import { translations as en } from '../../translations/en';
import { translations as it } from '../../translations/it';
import { translations as mi } from '../../translations/mi';
import { translations as pl } from '../../translations/pl';
export const translate = new TContext(['en', 'it', 'mi', 'pl'], en, it, mi, pl);
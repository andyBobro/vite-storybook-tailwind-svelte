import { path } from 'svelte-pathfinder';
import * as i18n from 'svelte-i18n'

export function goto (p) {
  setTimeout(() => {
    path.set(p);
  });
}

export function setLocale (locale) {
  i18n.locale.set(locale)
}
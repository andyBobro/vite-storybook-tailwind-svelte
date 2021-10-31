import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';

import en from 'locales/en.js';
import ru from 'locales/ru.js';

addMessages('en', en);
addMessages('ru', ru);

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
});

import { writable } from 'svelte/store';

const DEFAULT_CONFIG = {
  defaultPath: true
}

const { subscribe, set, update } = writable(DEFAULT_CONFIG);

// function merge (newConfig) {
//   update((config) => deepmerge({ ...config }, newConfig));
// }

export default { subscribe, set };  
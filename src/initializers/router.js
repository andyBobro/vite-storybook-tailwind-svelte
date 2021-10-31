import { prefs } from 'svelte-pathfinder';

function initRouter () {
  prefs.sideEffect = false;
  prefs.array.format = 'separator';
}


export default initRouter
import { writable, get } from 'svelte/store';
import { LAYOUT_BREAKPOINT } from 'utils/constants';

const VIEWPORT = getViewportDimensions()

const viewport = writable(VIEWPORT);
const { subscribe, set, update } = viewport

window.addEventListener('resize', () => {
  update(() => {
    const actual = getViewportDimensions()

    return actual
  })
})

function getViewportDimensions () {
  const dimensions = {
    x: window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth,
    y: window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight,
    bp: LAYOUT_BREAKPOINT
  }

  dimensions.mobile = dimensions.x < dimensions.bp

  return dimensions
}

export default { subscribe, set };
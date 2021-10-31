export const LAYOUT_BREAKPOINT = 640
export const EXAMPLE_ENV = loadViteEnv('EXAMPLE_ENV')


function loadViteEnv(name) {
  return process.env[`VITE_${name}`]
}

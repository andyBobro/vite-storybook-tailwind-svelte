import initApp from "initializers/widgets";
import initRouter from "initializers/router";
import './i18n'

const activator = document.querySelector('#widget-activator')

initRouter()
initApp(activator)

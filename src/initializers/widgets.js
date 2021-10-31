import App from 'ui/App.svelte'
import 'styles/tailwind.css'
import { addElement } from 'utils/dom'
import * as methods from '../api/public/index.js'

function initApp (target) {
  const { body } = document
  const container = addElement('div', body, {
    attrs: {
      id: 'widget-container'
    }
  })

  
  window.__MY_WIDGET = (window.__MY_WIDGET || {})
  !window.__MY_WIDGET.instance && (window.__MY_WIDGET.instance = new App({
    target: container
  }))

  initPublicMethods ()
  
  const button = addElement('button', target, {
    attrs: {
      class: 'btn'
    },
    listeners: {
      click: () => {
        window.__MY_WIDGET.methods.goto('/app/payment')
      } 
    },
    innerHTML: 'SHOW WIDGET'
  })
}

function initPublicMethods () {
  window.__MY_WIDGET.methods = methods
}

export default initApp

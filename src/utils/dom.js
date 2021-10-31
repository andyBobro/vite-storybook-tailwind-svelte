export function addStylesheet (url) {
  const link = document.createElement('link');

  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;

  document.head.appendChild(link);

  return link;
}


export function addElement (element, target, { attrs = {}, listeners = {}, innerHTML = '' }) {
  const el = document.createElement(element)

  Object.entries(attrs).forEach(([name, value]) => {
    el.setAttribute(name, value)
  })

  Object.entries(listeners).forEach(([event, listener]) => {
    el.addEventListener(event, listener)
  })

  el.innerHTML = innerHTML

  target.appendChild(el)

  return el
}

/*! domready (c) Dustin Diaz 2014 - License MIT */
export const onDOMReady = (function () {
  const fns = [];
  let listener;
  const hack = document.documentElement.doScroll;
  const domContentLoaded = 'DOMContentLoaded';
  let loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(document.readyState);


  if (!loaded) {
    document.addEventListener(domContentLoaded, listener = function () {
      document.removeEventListener(domContentLoaded, listener);
      loaded = true;
      while (listener = fns.shift()) { listener(); }
    });
  }

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn);
  };
}());
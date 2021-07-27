import { Task } from '@lit-labs/task';
import { html } from 'lit';

export const routes = {
  '/': () => html`<lit-home></lit-home>`,
  'home': () => html`<lit-home></lit-home>`,
}

export function router(host, routes) {
  const routerTask =  new Task(
    host,
    ([routes]) => {
      const { pathname } = window.location;
      return routes[pathname] ? routes[pathname]() : html`No se encontró`;
    },
    () => [routes]
  );

  document.body.addEventListener('click', (e) => {
    e.preventDefault();
    const button = e.composedPath().filter(el => el.tagName === 'a')[0];
    console.log(button);
    window.history.pushState({}, '', button);
    host.requestUpdate();
  });
  window.addEventListener('popstate', e => {

  })


  return routerTask;
}

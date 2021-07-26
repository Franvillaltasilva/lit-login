import { Task } from '@lit-labs/task';
import { html } from 'lit';

export const routes = {
  '/': () => html`<lit-home></lit-home>`,
  'home': () => html`<lit-home></lit-home>`,
}

export function router(host, routes) {
  return new Task(
    host,
    ([routes]) => {
      console.log(routes);
      const { pathname } = window.location;
      return routes[pathname] ? routes[pathname]() : html`No se encontró`;
    },
    () => [routes]
  );
}

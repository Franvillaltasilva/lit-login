import { Task } from '@lit-labs/task';
import { html } from 'lit';

export function router(host, routes) {
  return new Task(
    host,
    ([routes]) => {
      const { pathname } = window.location;
      return routes[pathname] ? routes[pathname]() : html`No se encontró`;
    },
    () => [routes]
  );
}


export const initRouter = (locationChange) => {
  window.addEventListener('popstate', () => {
  });
  locationChange(window.location);
}

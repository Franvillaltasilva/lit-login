import { Task } from '@lit-labs/task';
import { html } from 'lit';

export function router(host, routes) {
  const routerTask =  new Task(
    host,
    ([routes]) => {
      const { pathname } = window.location;
      return routes[pathname] ? routes[pathname]() : html`No se encontró`;
    },
    () => [routes]
  );

  return routerTask;
}

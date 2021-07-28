## Lit Login

![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)

## Configuración

Instala dependencias:

```bash
# con npm
npm install

# o con Yarn
yarn
```

## Inicio 

Una vez instladas las dependencias lanzamos el siguiente comando para iniciar la aplicación:
```bash
# con npm
npm run start

# o con Yarn
yarn start
```

Esto abrirá una nueva ventana en su navegador con la aplicación.

Esta aplicación usa como backend el localStorage del navegador asi que tendremos que lanzar el siguiente script desde la consola del mismo para poder probar el login:

```javascript
localStorage.setItem('lit@login.com', JSON.stringify({
      email: 'lit@login.com',
      password: '1234',
      lastConnection: 1627397027594
    }));
```

Esto nos guardará en el localStorage un usuario cuya key es el email con la información que necesitamos para nuestra aplicación.
## Scripts por defecto

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Web Test Runner
- `lint` runs the linter for your project

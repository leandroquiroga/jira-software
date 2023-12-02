# OpenTaks - Typescript, Next.js, MateialUI, MongoDB ,Docker

Este es un proyecto con fines educativos en la que podemos agregar nuestras tareas diarias, marcarla como pendiente, en progreso y como finalizadas. Ademas se puede utilizar Dark Mode permitido por [Material-UI](https://mui.com/material-ui/customization/dark-mode/). Esta aplicacion nos permite llevar un control de nuestras tareas cotidianas. 

## Ejecutar la app: 

Para ejecutar la aplicacion tenemos que dirigirnos a la terminal de visual studio code, powershell o su terminal favorita. 

```bash
yarn install
yarn dev
```
## Ejecutar la imagen de docker

Como en este proyecto utilizamos docker debemos ejecutar el siguiente codigo para crear la imagen que utilizamos para nuestra bases de datos. 

```bash
docker-compose up -d
```

*  -d: significa __detached__

Este comando sirve para que una vez creada la imagen LOCALMENTE podamos seguir ejecutando codigo en nuestra terminal

## URL mongoDB (Modo desarrollo)

Para acceder a nuestra bases de datos desde MongoDB Compass debemos ingresar el siguiente URL

```
MongoDB - Modo desarrollo: mongodb://localhost:27017/openTask
```

## Configuracion del enviroment

* Renombar el archivo __.env.example__ a __.env__
* Debemos sacar el numeral # 
* Colocarle el valor que corresponda a las variables de entorno.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

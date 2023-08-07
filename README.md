# Daily Socker

## Features

- ▲ Based on latest [Next.js](https://github.com/zeit/next.js)
- 💅 Styling with [TailwindCSS](https://tailwindcss.com/)
- :bear: Efficient state management using [Zustand](https://github.com/pmndrs/zustand)
- :trumpet: Real time notification with [WebSocket](https://github.com/websockets/ws)
- :loop: Schedule job using [Node-Cron](https://github.com/node-cron/node-cron)

### Design Patterns

- ⛔ **[ESLint](https://eslint.org)** – Find and fix problems in your JavaScript code. Following Airbnb style guide.
- 🎀 **[Prettier](https://prettier.io)** – An opinionated code formatter, supporting multiple languages and code editors

## Getting started

```
git clone https://github.com/samiur-r/daily-soccer.git
cd daily-soccer

cp .env.example env.local 
Open the env.local file and add values to the environment variables.

yarn install
yarn run dev
```

Then open `http://localhost:3000/` to see the app.

### build

Builds the production application in the .next folder.

```bash
yarn run build
```

### start

Starts the application in production mode.

```bash
yarn run start
```

### lint

Runs ESLint static code analysis based on your `.eslintrc` configuration

```bash
yarn run lint
```

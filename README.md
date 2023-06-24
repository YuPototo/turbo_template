# Turborepo Template

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

Apps:

- `web`: a [Next.js](https://nextjs.org/) app
- `storybook`: a [Storybook](https://storybook.js.org/) app

Packages:

- `auth`: auth package
- `eslint-config`: eslint preset
- `prettier-config`: prettier preset
- `prisma`: prisma schema and client
- `tailwind-config`: tailwind preset
- `trpc`: trpc
- `ts-config`: tsconfig preset
- `ui`: ui components

### Build

To build all apps and packages, run the following command at the root of the monorepo:

```sh
pnpm build
```

### Develop

To develop all apps and packages, run the following command at the root of the monorepo:

```sh
pnpm dev
```

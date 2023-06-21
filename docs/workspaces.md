# Workspaces

> [Workspaces](https://turbo.build/repo/docs/handbook/workspaces) are the building blocks of your monorepo. Each app and package you add to your monorepo will be inside its own workspace.

In this template, there are following workspaces:

monorepo:

- apps:
  - web: a NextJS app
  - storybook: storybook for ui components
- packages:
  - database: prisma schema and client
  - eslint-config: eslint preset
  - prettier-config: prettier preset
  - tailwind-config: tailwind preset
  - ts-config: tsconfig preset
  - ui: ui components
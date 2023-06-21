# A Eslint Problem

When running `pnpm lint`, the `ui` package would give an error: Cannot find module 'next/babel'.

Possible cause:

> from eslint-config. My gut is that pnpm's module resolution strictness is the culprit here since next/babel isn't installed to the eslint-config workspace

Hack solution: installing next in eslint-config

Ref: https://github.com/vercel/turbo/issues/4348#issuecomment-1534690508

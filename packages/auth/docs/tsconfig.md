# tsconfig

In tsconfig, we have this two compile options:

```json
{
  "compilerOptions": {
    "allowJs": true,
    "noEmit": true
  }
}
```

Without this 2 options, `src/auth-options` would have error on following line:

```ts
import { env } from "../env.mjs";
```

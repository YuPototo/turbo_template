# Turbo Config

## Pipelines

### build

current config:

```json
{
  "build": {
    "dependsOn": [
      // A workspace's `build` command depends on its dependencies' or devDependencies' `build` command being completed first
      "^build",
      // make db:generate run before build
      "^db:generate"
    ],
    "outputs": [".next/**", "!.next/cache/**", "storybook-static/**"]
  }
}
```

### dev

config:

```json
{
  "dev": {
    "dependsOn": [
      // make sure that db:generate is always run before the user runs dev
      "^db:generate"
    ],
    "cache": false,
    "persistent": true
  }
}
```

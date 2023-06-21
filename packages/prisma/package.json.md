# package.json doc

## scripts

- db:generate
- db:push

### db:generate

```sh
prisma generate
```

Generate assets like Prisma Client based on the datasource and generator blocks defined in your schema.prisma file

### db:push

```sh
prisma db push --skip-generate
```

Synchronize your Prisma schema with your database schema.

> The --skip-generate flag on db:push to ensure it doesn't automatically run prisma generate after migrating the database. This ends up being faster when using Turborepo because we automatically parallelize the tasks.

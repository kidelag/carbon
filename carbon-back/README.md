# nest-authentication-demo

Nest.js authentication & authorization implementation demo repository

## Requirements

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Clone

```bash
https://github.com/aminnairi/nest-authentication-demo
cd nest-authentication-demo
```

## Docker Compose Services Startup

```bash
docker compose up --detach
```

## Node.js Dependencies Installation

```bash
docker compose exec server npm install
```

## Nest.js Seeding

```bash
docker compose exec server npm run seed
```

## Nest.js Startup

```bash
docker compose exec server npm run start:dev
```

## Docker Composer Services Shutdown

```bash
docker compose down --remove-orphans --volumes --timeout 0
```

## Users

Email | Password | Role
---|---|---
`user@domain.com` | `password` | `USER`
`administrator@domain.com` | `password` | `ADMINISTRATOR`

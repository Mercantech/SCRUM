# SCRUM

Informationsside om SCRUM på Mercantec (MAGS): centrale begreber, GitHub-praksis (Issues, Projects, Releases) og progression fra H1 til H6.

## Lokal udvikling

```bash
cd web
npm install
npm run dev
```

## Docker

Produktion (Dokploy / Traefik):

```bash
docker compose up -d --build
```

Lokalt med host-port (standard `3000`):

```bash
docker compose -f docker-compose.yml -f docker-compose.local.yml up --build
```

Sæt host via env ved deploy, fx `TRAEFIK_HOST=scrum.mercantec.tech`.

## Indhold

Tekst ligger i `web/src/content/scrum.ts` — ret der, hvis praksis eller H1–H6 ændrer sig.

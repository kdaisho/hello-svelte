# SvelteKit Application

## Cloning the repository

```bash
git clone https://github.com/kdaisho/hello-svelte.git
```

Once cloned the repository, navigate into it. You'll be prompted to allow direnv to trigger dependency installation.

Type

```
direnv allow .
```

Nix automatically starts installing each dependency listed in `shell.nix`.

## Development

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Build

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Dockerization

### Building an image

```
docker build -t sv:1 .
```

_sv = name, 1 = tag_

### Running a container

```
docker run --rm --network=deno-net -p 5050:5050 sv:1
```

_--rm = cleans up after stopping the container_

_-p = publish, 5050:5050 = maps port 5050 (right) to 5050 (left) to expose_

_--network=deno-net = specifies to use 'deno-net' network defined by the server (deno) container_

_to see list of networks, type `docker network ls`_

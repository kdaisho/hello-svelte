# SvelteKit Application

## 1. Installing Nix and direnv

> Jump to _**2. Clone the repository**_ if both `Nix` and `direnv` are already installed to your machine.

### [`Nix`](https://nixos.org/)

A package manager. It's like Terraform for your machine.

```
sh <(curl -L https://nixos.org/nix/install)
```

### [direnv](https://direnv.net/)

direnv sets a scope for each directory to have a unique environment.

```
curl -sfL https://direnv.net/install.sh | bash
```

## 2. Clone the repository

```bash
git clone git@github.com:kdaisho/hello-svelte.git
```

Once you've cloned this repo, Nix automatically starts installing each program listed in `shell.nix`. The environment is virtually limited within the directory where `.envrc` sits.

You'll be prompted to type

```
direnv allow .
```

This lets `direnv` override the environment within the current and subdirectories.

## 3. Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## 4. Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## 5. Dockerization

### Build an image

```
docker build -t sv:1 .
```

_sv = name, 1 = tag_

### Run a container

```
docker run --rm --network=deno-net -p 5050:5050 sv:1
```

_--rm = cleans up after stopping the container_

_-p = publish, 5050:5050 = maps port 5050 (right) to 5050 (left) to expose_

_--network=deno-net = specifies to use 'deno-net' network defined by the server (deno) container_

_to see list of networks, type `docker network ls`_

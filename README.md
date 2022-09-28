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

---

_Note: `shell.nix` currently installs **node 16**. There's a compatibility issue with `fetch` api from SvelteKit and **node 18**._

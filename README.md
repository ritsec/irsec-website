# IRSeC Website

This is the main website for IRSeC which is RITSEC's beginner-oriented, Red v. Blue, incident response focused competition. Built with [ViteJS](https://vitejs.dev/).

## Prerequisites

- NVM - Node Version Manager (https://github.com/nvm-sh/nvm)
  - _Or manual installation of NodeJS (just check the `.nvmrc` file for preferred version)_

## Setting up

To use the specified version of NodeJS, just run:

```shell
$ nvm install
$ npm i
```

This will use the local version of NodeJS as specified in the [.nvmrc](./.nvmrc) file.

## Production

Production is deployed automatically to Cloudflare Pages via CI/CD. Nothing to do here :)

## Development

If you want to stand up a development server, just run:

```shell
$ npm i
$ npm run dev
```

# IRSeC Website

This is the main website for IRSeC which is RITSEC's beginner-oriented, Red v. Blue, incident response focused competition.

## Prerequisites

- NVM - Node Version Manager (https://github.com/nvm-sh/nvm)

## Setting up

To use the specified version of NodeJS, just run:

```shell
$ nvm use
$ npm i
```

This will use the local version of NodeJS as specified in the [.nvmrc](./.nvmrc) file.

## Production

In order to push to production (Github Pages) simply just run the following command:

```shell
$ npm run deploy
```

## Development

If you want to stand up a development server, just run:

```shell
$ npm start
```

Code can be committed to the branches as normal except for the `gh-pages` branch

**NOTE: The `gh-pages` branch should never be directly pushed to**

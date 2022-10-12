# explaining-image-privacy-app

Explaining Image Privacy using a Web interface.

## Installation

Make sure you have `yarn` installed. You can check by running `yarn --version`.
You can find yarn installation instructions [on the yarn website](https://yarnpkg.com/getting-started/install).

You may also need `nodejs`. It is recommended to install Node using `nvm` which is the *node version manager* so you can switch between node version easily.
You can find installation information [on the nvm github repo](https://github.com/nvm-sh/nvm#installing-and-updating).

Before running the app you need to create a few environnement files:

`.env.local`:

```bash
PORT=3005
```

`.env.test`:

```bash
PORT=3333
# disable auto launch browser when testing
BROWSER=none
```

These files let you choose the port on which your app will run.

Once you have these files created and tools installed, you can install the project dependencies using:

```bash
yarn
```

You should now be ready to start developing on the app

## Usage

To start the app:

```bash
yarn start
```

To open cypress and run specific spec files:

```bash
yarn cypress:open
```

To run all automated tests:

```bash
yarn test
```

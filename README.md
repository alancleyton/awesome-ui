<div>
  <h1 align="center">Awesome UI ✨</h1>
   <h4 align="center">
    A Awesome React component library based on <a href="https://tailwindcss.com/">Tailwind CSS<a>
  </h4>

  <br />

  <p align="center">
    <a href="https://github.com/alancleyton/awesome-ui/blob/main/LICENSE">
      <img alt="GitHub License" src="https://img.shields.io/github/license/alancleyton/awesome-ui">
    </a>
    <a href="https://github.com/alancleyton/awesome-ui/actions/workflows/main.yml">
      <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/alancleyton/awesome-ui/main.yml">
    </a>
    <a href="https://github.com/alancleyton/awesome-ui/releases">
      <img alt="GitHub Release" src="https://img.shields.io/github/v/release/alancleyton/awesome-ui">
    </a>
    <a href="https://www.npmjs.com/package/@alancleyton67/awesome-ui">
      <img src="https://img.shields.io/npm/v/%40alancleyton67%2Fawesome-ui">
    </a>
  </p>
</div>

<br />

This lib provides ready-to-use, accessible, reusable, and composable
React UI components based on the [Tailwind CSS](https://tailwindcss.com/) framework utility classes.

## Installation

```sh
# with Yarn
$ yarn add @alancleyton67/awesome-ui

# with npm
$ npm i @alancleyton67/awesome-ui
```

## Usage

1. To start using the components, on your application entry point, import the CSS file.

```jsx
// Do this at the root of your application
import '@alancleyton67/awesome-ui/dist/index.css';
```

2. Start using the components in your application

```jsx
import { Button } from '@alancleyton67/awesome-ui';

const App = () => {
  const onPress = () => alert('On pressed!')

  <div>
    <Button variant="info" onPress={onPress}>
      info button
    </Button>
  </div>
};

export default App;
```

## License

MIT

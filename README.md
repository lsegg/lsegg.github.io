# Portfolio

This is my Web Full Stack Development Portfolio.

## Built with 🛠️

- [Create React App](https://github.com/facebook/create-react-app) - An officially supported way to create single-page React applications.
- [FontAwesome](https://fontawesome.com/) - Icon library and toolkit.
- [gh-pages](https://github.com/tschaub/gh-pages) - General purpose task for publishing files to a gh-pages branch on GitHub.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [React Router](https://reactrouter.com/en/main) - Declarative routing for React web applications.
- [Sass](https://sass-lang.com/) - CSS extension language.
- [TypeScript](https://www.typescriptlang.org/) - A strongly typed programming language that builds on JavaScript.

## Available Scripts ⚙

In the project directory, you can run:

- `npm start:` Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `npm test:` Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
- `npm run build:` Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
- `npm run deploy:` GitHub Pages will automatically detect that a new commit has been added to the gh-pages branch of the GitHub repository. Once it detects that, it will begin serving the files that make up that commit — in this case, the distributable version of the React app

## Features 📋

- Mobile first.
- Responsive views:
  - mobile
  - small tablets
  - large tablets
  - desktop

## Previews 👁️

### Mobile

![preview mobile](https://github.com/lsegg/lsegg.github.io/blob/main/src/assets/images/mobile-preview.png?raw=true)

### Desktop

![preview desktop](https://github.com/lsegg/lsegg.github.io/blob/main/src/assets/images/desktop-preview.png?raw=true)

## License 📄

This project is under (MIT License) - See the file [LICENSE](LICENSE) for more details

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

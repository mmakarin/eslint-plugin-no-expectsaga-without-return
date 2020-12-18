eslint-plugin-no-expectSaga-without-return
===================

[![NPM version][npm-image]][npm-url]

Checks that you don't forgot to insert return when calling expectSaga inside a test.

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally. (Note that locally, per project, is strongly preferred)

```sh
$ npm install eslint --save-dev
```

If you installed `ESLint` globally, you have to install plugin globally too. Otherwise, install it locally.

```sh
$ npm install eslint-plugin-no-expectsaga-without-return --save-dev
```

# Configuration

Use [our preset](#recommended) to get reasonable defaults:

```json
  "extends": [
    "eslint:recommended",
    "plugin:no-expectSaga-without-return/recommended"
  ]
```

If you do not use a preset you will need to specify individual rules and add extra configuration.

Add "no-expectSaga-without-return" to the plugins section.

```json
{
  "plugins": [
    "no-expectSaga-without-return"
  ]
}
```

Enable the rules that you would like to use.

```json
  "rules": {
    "no-expectSaga-without-return/mandatory-return": 2
  }
```

# List of supported rules

* no-expectSaga-without-return/mandatory-return: Enforces return before expectSaga() calls

# License

eslint-plugin-no-expectSaga-without-return is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).

[npm-url]: https://www.npmjs.com/package/eslint-plugin-no-expectsaga-without-return
[npm-image]: https://img.shields.io/npm/v/eslint-plugin-react.svg

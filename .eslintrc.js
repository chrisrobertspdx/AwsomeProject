module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true
    },
    "plugins": [
        "react"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "rules": {
        "react/prop-types": 0,
        "no-console": 0
    }
}
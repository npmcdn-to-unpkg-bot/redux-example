module.exports = {
    "extends": "airbnb",
    "installedESLint": true,
    "plugins": [
        "react"
    ],
    "globals": {
      "React": false
    },
    "rules": {
      "comma-dangle": 0,
      "no-param-reassign": ["error", { "props": false }]
    }
};

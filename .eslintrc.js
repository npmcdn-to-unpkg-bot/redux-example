module.exports = {
    "extends": "airbnb",
    "installedESLint": true,
    "plugins": [
        "react"
    ],
    "fix": true,
    "rules": {
      "comma-dangle": 0,
      "no-param-reassign": ["error", { "props": false }]
    }
};

module.exports = {
  "extends": ["semistandard", "prettier"],
  "plugins": [
    "prettier"
  ],
  "rules": {
    "prettier/prettier": ["error", {
      "singleQuote": true,
      "jsxBracketSameLine": true
    }],
    "max-len": ["error", {"code": 80,
      "ignoreUrls": true,
      "ignoreComments": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
      "ignoreRegExpLiterals": true
    }],
    "quotes": ["error", "single"],
    "camelcase": "off"
  }
};


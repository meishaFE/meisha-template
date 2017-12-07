module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "build": {
      "type": "list",
      "message": "Vue build",
      "choices": [
        {
          "name": "Runtime + Compiler: recommended for most users",
          "value": "standalone",
          "short": "standalone"
        },
        {
          "name": "Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere",
          "value": "runtime",
          "short": "runtime"
        }
      ]
    },
    "router": {
      "type": "confirm",
      "message": "Install vue-router?",
      "default": true
    },
    "vuex": {
      "type": "confirm",
      "message": "Install vue-vuex?",
      "default": true

    },
    "element": {
      "type": "confirm",
      "message": "Install elementUI?",
      "default": true
    },
    "polyfill": {
      "type": "confirm",
      "message": "Install babel-polyfill for Promise?",
      "default": true
    },
    "precommit": {
      "type": "confirm",
      "message": "Use pre-commit for auto fix + format?",
      "default": false
    },
    "unit": {
      "type": "confirm",
      "message": "Setup unit tests with Karma + Mocha?",
      "default": false
    },
    "e2e": {
      "type": "confirm",
      "message": "Setup e2e tests with Nightwatch?",
      "default": false
    }
  },
  "filters": {
    "config/test.env.js": "unit || e2e",
    "test/unit/**/*": "unit",
    "build/webpack.test.conf.js": "unit",
    "test/e2e/**/*": "e2e",
    "src/router/**/*": "router",
    "src/store/**/*": "vuex",
    "src/components/Menu.vue": "element",
    "src/components/Header.vue": "element"
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}git init\n  npm install\n  npm run dev\n\n"
};

# verum-web

Verum front-end React

## FSD

https://feature-sliced.design/docs/get-started/tutorial

### Example structure

.
└── src/
    ├── app
    ├── pages
    ├── ...
    ├── shared
    └── example_layer/
        ├── example1_slice(instance of layer)
        └── example2_slice/
            ├── example_segment
            ├── ui
            ├── model
            ├── api
            ├── hooks
            ├── config
            ├── helpers
            └── index.js

## Open api refs

https://openapistack.co/docs/openapi-client-axios/intro/

https://www.npmjs.com/package/openapi-client-axios

https://github.com/anttiviljami/openapi-client-axios

### Auto import

settings.json (VSCode)

` 
  "javascript.updateImportsOnFileMove.enabled": "always",
  "javascript.preferences.importModuleSpecifier": "non-relative",`

Create jsconfig.json

`{
  "include": ["src", "vite.config.ts"],
  "compilerOptions": {
    "baseUrl": ".",
    "target": "es6",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}`

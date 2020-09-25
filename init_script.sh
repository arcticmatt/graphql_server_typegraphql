#!/bin/bash

yarn
yarn add apollo-server graphql typescript
yarn add -D eslint ts-node-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
mkdir src
touch src/index.ts
touch .gitignore
echo "node_modules" >> .gitignore

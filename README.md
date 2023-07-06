# NextJS + openai@4.0.0-beta.2

Minimal reproduction of this error:

https://github.com/openai/openai-node/discussions/182#discussioncomment-6336774

## Installation

```bash
cp .env.example .env.local # then add your API key to .env.local
pnpm install
```

## Demo

This seems to be a problem with the v4 beta in the NextJS edge runtime.

```
pnpm dev
```

### Visit http://localhost:3000/api/chat-lambda

This works

### Visit http://localhost:3000/api/chat-edge

`TypeError: Cannot read properties of undefined (reading 'FileObjectsPage')`

### Build

```
pnpm build
```

Results in:

```
Failed to compile.

./node_modules/.pnpm/function-bind@1.1.1/node_modules/function-bind/implementation.js
Dynamic Code Evaluation (e. g. 'eval', 'new Function', 'WebAssembly.compile') not allowed in Edge Runtime
Learn More: https://nextjs.org/docs/messages/edge-dynamic-code-evaluation
```

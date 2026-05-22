# AGENTS.md

## Repository Purpose
- This is a TypeScript learning workspace, not a shipped app/library; do not assume runtime entrypoints, CI, or test structure exist.
- Lessons are independent examples under `src/<number>-<topic>/app.ts`; some directory names use Cyrillic.
- Prefer small, educational TypeScript examples over adding app/framework scaffolding.

## Commands
- Install dependencies with `npm install`; this repo uses `package-lock.json`.
- Lint everything with `npm run lint`.
- Apply ESLint fixes with `npm run lint:fix`.
- For ad hoc type checks, run `npx tsc --noEmit`; there is no `test`, `build`, or `typecheck` npm script.

## TypeScript Settings
- `package.json` sets `"type": "module"`; `tsconfig.json` uses `module: "nodenext"`, `target: "esnext"`, `jsx: "react-jsx"`, and `strict: true`.
- Keep examples compatible with enabled strictness: `exactOptionalPropertyTypes`, `noUncheckedIndexedAccess`, `isolatedModules`, `verbatimModuleSyntax`, and `noUncheckedSideEffectImports`.
- `types: []` is set, so Node globals/types are not available unless `@types/node` and config changes are added intentionally.

## Style And Tooling
- ESLint uses `@antfu/eslint-config` with semicolons and single quotes; `no-console` is explicitly allowed.
- Zed is configured to run ESLint fixes on format; keep ESLint as the formatting source of truth.
- `.agents/` is gitignored; `skills-lock.json` records the repo-local `typescript-advanced-types` skill for advanced type-system work.

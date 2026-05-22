# AGENTS.md

## Repository Purpose
- This is a learning workspace for TypeScript, not a shipped app/library yet; do not assume runtime entrypoints, CI, or test structure exist.
- Prefer small, educational TypeScript examples and type-level tests over adding framework scaffolding.

## Commands
- Install dependencies with `npm install`; this repo uses `package-lock.json`.
- Lint everything with `npm run lint`.
- Apply ESLint fixes with `npm run lint:fix`.
- There is currently no `test`, `build`, or `typecheck` npm script; do not report those as available unless you add them.

## TypeScript Settings
- `tsconfig.json` uses `module: "nodenext"`, `target: "esnext"`, `jsx: "react-jsx"`, and `strict: true`.
- Keep examples compatible with stricter checks already enabled: `exactOptionalPropertyTypes`, `noUncheckedIndexedAccess`, `isolatedModules`, `verbatimModuleSyntax`, and `noUncheckedSideEffectImports`.
- `types: []` is set, so Node globals/types are not available unless `@types/node` and config changes are added intentionally.

## Style And Tooling
- ESLint uses `@antfu/eslint-config` with semicolons and single quotes; `no-console` is explicitly allowed.
- Zed is configured to run ESLint fixes on format; keep ESLint as the source of formatting truth.
- `.agents/` is ignored by git; `skills-lock.json` records the repo-local `typescript-advanced-types` skill for advanced type-system work.

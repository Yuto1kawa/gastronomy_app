# Repository Guidelines

## Project Structure & Module Organization

This repository is a monorepo. Keep new code organized by role:

- `apps/web/` for the Next.js App Router frontend.
- `apps/web/src/app/` for routes, layouts, and page-level UI.
- `apps/web/public/` for static frontend assets.
- `packages/` for future shared libraries, UI primitives, or configuration packages.
- `tests/` or colocated `*.test.*` files for automated tests.
- `docs/` for design notes, API contracts, or setup details.

Prefer small, focused modules. Keep feature-specific code together, and place shared utilities in `src/lib/` or `src/utils/` once those directories exist.

## Project Conventions

Use Japanese for normal contributor and agent communication unless the user explicitly asks for another language. Treat this project as a monorepo: keep apps, packages, and shared tooling separated by workspace boundaries when the structure is introduced.

Frontend code must use TypeScript and React. Use Tailwind CSS for styling rather than adding separate CSS frameworks or ad hoc global styles. Reuse shared UI primitives and tokens once they exist.

Do not use MCP tools unless the user explicitly asks for MCP usage. Prefer local repository inspection, shell commands, and direct file edits for routine development tasks.

## Build, Test, and Development Commands

Use npm workspaces from the repository root:

- `npm install`: install workspace dependencies.
- `npm run dev`: start the Next.js development server for `apps/web`.
- `npm test`: run the test suite.
- `npm run build`: create a production build.
- `npm run lint`: run ESLint for the frontend workspace.
- `npm run typecheck`: run TypeScript checks.

Do not introduce commands that require global dependencies unless the setup instructions explain them.

## Coding Style & Naming Conventions

Follow the formatter and linter configured in the repository once added. Until then, use consistent indentation, descriptive names, and small functions with explicit inputs and outputs. Use `camelCase` for JavaScript/TypeScript variables and functions, `PascalCase` for components/classes, and kebab-case or snake_case for non-code filenames based on nearby files.

Avoid broad refactors in unrelated files. Keep changes scoped to the feature or fix being worked on.

## Testing Guidelines

Add tests with new behavior. Name tests after the behavior verified, for example `reservation-form.test.ts` or `test_menu_pricing.py`, matching the chosen stack. Cover core flows, edge cases, and regression fixes. If automation is not available yet, document manual verification steps in the pull request.

## Commit & Pull Request Guidelines

Git history currently shows only `Initial commit`, so no project-specific commit convention is established. Use short, imperative commit messages such as `Add menu search view` or `Fix reservation validation`.

Pull requests should include a concise summary, testing performed, linked issues when relevant, and screenshots or recordings for UI changes. Call out configuration changes or migrations explicitly.

## Security & Configuration Tips

Do not commit secrets, API keys, database dumps, or local environment files. Use ignored `.env` files for local configuration and provide a documented `.env.example` when configuration becomes required.

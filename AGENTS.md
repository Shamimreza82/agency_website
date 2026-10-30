# agency_website

Next.js 16 App Router, React 19, TypeScript (strict), Tailwind CSS v4, shadcn/ui (rsc: true), nodemailer (Gmail SMTP). Deploy target: Vercel. No auth (login/signup removed), no database, no test runner, no CI, no pre-commit configured.

## Commands

- `npm run dev` — runs `next dev` on http://localhost:3000
- `npm run build` — `next build`
- `npm run start` — `next start`
- `npm run lint` — `eslint . --ext .ts,.tsx`
- Typecheck: `npx tsc --noEmit` (no `typecheck` script; `next build` also typechecks)

There is no `test` script and no test framework installed. Do not invent test commands.

## Environment

`.env*` is gitignored and must exist locally.

Additional vars read by code but not in `.env` (set locally as needed): `NODE_MAILER_EMAIL`, `NODE_MAILER_PASS`. Without the mailer vars, nodemailer sends will fail.

There is no database. `prisma`, `DATABASE_URL`, and `DIRECT_URL` have been removed — no page or API route requires them. `book-a-call` sends email via nodemailer only.

## App structure

- `app/layout.tsx` — root layout; wraps children in `LayoutProvider` (`@/provider/LayoutProvider`: Toaster + Navber + Footer); loads Geist/Syne fonts.
- `app/(site)/` — public marketing routes (about, blog, book-a-call, services, projects, policy pages).
- `app/dashboard/` — `layout.tsx` plus `admin/` and `client/`.
- `app/api/` — route handlers: `book-a-call`. (Auth API routes removed; no login/signup.)
- `app/sitemap.ts` — dynamic sitemap for `https://www.dreamteam.agency`.
- `middleware.ts` — no auth; passes all requests through (`NextResponse.next()`). `/dashboard/:path*` matcher retained but no longer redirects.

## UI / styling conventions

- Path alias `@/*` maps to repo root.
- shadcn/ui aliases (from `components.json`): components `@/components`, ui `@/components/ui`, utils `@/lib/utils`, lib `@/lib`, hooks `@/hooks`. Components are server components by default (`rsc: true`); add `"use client"` when needed.
- `cn()` helper in `lib/utils.ts` (clsx + tailwind-merge).
- Tailwind v4; design tokens in `app/globals.css` (accent `#02FF95`, dark oklch background, `rounded-2xl/3xl` cards); daisyui available.
- `utile/` (misspelled "utils") holds `sendEmail.ts`, `generatePassword.ts`, `createResponce.ts`, `email_template/emailVarification.ts`.

## What to skip

Do not add test/CI/pre-commit guidance — none exist in this repo. Do not reference `docs/BIGIBYTE_DESIGN_PLAN.md` for implementation rules; it's a design plan, not authoritative code guidance. No auth flows (login/signup/verify-email) exist in the codebase.

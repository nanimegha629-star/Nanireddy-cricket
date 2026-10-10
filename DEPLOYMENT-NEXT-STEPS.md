# GOAT Cricket 3D — Deployment Packaging Fix

## What was fixed
- This archive is built from the inner `GOAT-Cricket-3D-Release-Candidate-1.zip` project, so `package.json`, `app/`, `game/`, and `public/` are at the project root.
- Character reference assets are included under `public/characters/`.
- The incorrectly nested release ZIP is not included in this corrected archive.

## Deploy to Vercel
1. Extract this ZIP.
2. Open the extracted project folder and verify that `package.json`, `app/`, `game/`, and `public/` are directly inside it.
3. Run `npm install` in that folder.
4. Run `npm run build`. Do not deploy until the build completes successfully.
5. Push the extracted project contents to the root of a GitHub repository (not the ZIP file itself).
6. Import that repository in Vercel. Framework preset: Next.js. Build command: `npm run build`; output directory: leave the default.
7. Deploy, then test the game on both mobile and desktop.

## Verification note
The ZIP structure and relative import paths were checked. A production build could not be completed in this environment because dependency installation did not finish and `next` was therefore unavailable. This archive should not be described as build-verified until `npm run build` succeeds.

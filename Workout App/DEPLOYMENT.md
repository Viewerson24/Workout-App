# Vercel launch steps

This app is set up to deploy as a static Expo web build on Vercel.

## Local check

1. Install Node.js if it is not already on your machine.
2. From the project folder, run `npm install`.
3. Run `npm run web` to test the app in a browser locally.
4. Run `npm run build` to generate the static web output in `dist`.

## Deploy to Vercel

1. Push this project to GitHub, GitLab, or Bitbucket.
2. Sign in to Vercel.
3. Create a new project and import the repository.
4. Keep the default framework settings if Vercel detects them, or set:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Deploy the project.

## After launch

1. Every push to the connected branch will trigger a new deploy.
2. Use `npm run web` when you want to preview browser changes locally.
3. Use `npm run build` before shipping if you want to verify the static export.


release

1. npm run build

2. copy everything in out folder to `new-page`

3. in IONOS, make sure the domain `Target` points to `new-page`

4. do not use `new page` with a space in the folder name

Environment

1. copy .env.example to .env.local

2. set NEXT_PUBLIC_GA_ID to your Google Analytics measurement ID (e.g. G-XXXXXXXXXX)

Redirects

1. IONOS: uses public/.htaccess to redirect / to /en/

2. GitHub Pages: uses public/index.html to redirect / to /en/

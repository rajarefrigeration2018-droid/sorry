# Sorry Meri Jaan 🥺❤️

A cute, romantic, playful Hinglish "date proposal" mini-site.

## Project structure

```
.
├── public/
│   └── index.html      ← the whole site (edit this to swap photos/QR)
├── server.js            ← tiny Express server that serves public/
├── package.json
├── railway.json
└── .gitignore
```

## Run locally

```bash
npm install
npm start
```

Then open http://localhost:3000

## Deploy to Railway

**Option A — from GitHub (recommended)**
1. Push this folder to a new GitHub repo.
2. Go to [railway.app](https://railway.app) → New Project → Deploy from GitHub repo.
3. Pick the repo. Railway auto-detects Node.js (via `package.json`) and runs `npm install` then `npm start`.
4. Once deployed, click the generated domain (or add your own under Settings → Domains).

**Option B — from the Railway CLI**
```bash
npm install -g @railway/cli
railway login
railway init
railway up
```
Then run `railway domain` to get a public URL.

No environment variables or database needed — it's fully static, just served through a minimal Express app so Railway has a process to run.

## Swap in her real photos / QR code

Open `public/index.html` and look for the `📸 REPLACE` comments (4 photo spots + 1 QR spot). Replace:

```html
<img class="photo-placeholder" data-label="Photo 1" data-seed="1" alt="...">
```

with:

```html
<img src="/photo1.jpg" alt="...">
```

Drop your actual image files into `public/` (e.g. `public/photo1.jpg`, `public/qr.jpg`) so Express serves them alongside the page.

## Notes

- This is just for fun — the "₹5000 payment" only reveals a QR image, there's no real payment processing anywhere in the code.
- It's a temporary/personal site — once she's said yes, feel free to take it down 😄

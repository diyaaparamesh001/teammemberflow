# Flownt

A clickable prototype of Flownt's **My Teams** page.

It's a single static page (`index.html`, no build step) and is responsive:
a sidebar app on desktop, a collapsible sidebar and stacked rows on phones.

## What you can do

- See every team with its lead and member count
- Click a team to open its details: lead, members, roles and emails
- **+ Create Team** adds a new team to the list
- **+ Add member** and **Make lead** on a team's page
- Search teams and people with ⌘K / Ctrl+K

Each team has its own link (for example `#team-engineering`).
Changes live in the page only and reset on reload.

## Run locally

Open `index.html` in a browser, or:

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy on Vercel

1. On vercel.com, choose **Add New → Project** and import this repository.
2. Leave the settings as they are. `vercel.json` tells Vercel there's no
   build step and the site is served from the repository root.
3. Click **Deploy**.

Every push to `main` redeploys automatically.

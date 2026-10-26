# Flownt

A clickable prototype of Flownt's **My Team** page: who owns and oversees
your AI organization.

It's a single static page (`index.html`, no build step) and is responsive:
a three-column app on desktop, a slide-over profile panel on tablets, and a
collapsible sidebar on phones.

## What you can do

- Expand cards on the org chart (▸) and open a person's profile (click their name)
- Add a person, assign or reassign AI roles, change reporting lines, edit or remove a person
- Change AI role owners and statuses on the **AI role ownership** tab
- Add teams on the **Organization setup** tab
- Resolve items from **Needs You** and search with ⌘K / Ctrl+K

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

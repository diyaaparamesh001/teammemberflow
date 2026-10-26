# Flownt

A clickable prototype of Flownt's **My Teams** page for an organization
owner, using placeholder text throughout ("Team A", "Person name", "Title").

It's a single static page (`index.html`, no build step) and is responsive:
a sidebar, team list and side sheet on desktop; the side sheet slides over
on tablets; the sidebar collapses and rows stack on phones.

## What you can do

- Click a team row to open its side sheet with four tabs:
  - **People**: who's on the team and who they report to. Add, edit or remove people.
  - **AI roles**: which AI roles the team uses, how each takes part
    (suggests, acts with approval, acts on its own) and who is accountable.
  - **Missions**: the team's work, with owner, progress and status.
  - **Access**: Admin, Manager and Member levels, and each person's level.
- **+ Create Team** and **Set up AI role** from the top of the page.

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

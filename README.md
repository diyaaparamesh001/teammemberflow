# Flownt

A clickable prototype of Flownt, using placeholder text throughout.
Static HTML, CSS and JavaScript with no build step, responsive from desktop
down to phone.

## Pages

| File | Page |
| --- | --- |
| `index.html` | **Home**: a chat history column (projects and recent chats) beside the message box and suggested prompts. Sending a message opens a conversation with a placeholder reply. |
| `team.html` | **My Team**: teams list with a side sheet for People and Access, plus each team's AI role count and mission health. |
| `shell.css`, `shell.js` | Shared colours, main nav sidebar and top bar (Needs You, account). |

AI Workforce, Missions and Outcomes aren't built yet.
New chats are kept while the tab is open; everything else resets on reload.

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

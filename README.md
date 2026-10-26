# Flownt

A clickable prototype of Flownt, using placeholder text throughout.
Static HTML, CSS and JavaScript with no build step, responsive from desktop
down to phone.

## Pages

| File | Page |
| --- | --- |
| `login.html` | **Log in**: email and password. Logging in opens Home. |
| `index.html` | **Home**: a chat history column (projects and recent chats) beside the message box and suggested prompts. Sending a message opens a conversation with a placeholder reply. |
| `team.html` | **My Team**: a team list on the left; the selected team shows its mission and its people with the AI roles each one looks after. Clicking a person opens their access. |
| `workforce.html` | **AI Workforce**: total and active workflow counts, Create AI role, and a table of AI roles (role, purpose, owner, team, status) with team and status filters. Clicking a role shows its instructions, tools, owner, teams and missions. |
| `shell.css`, `shell.js` | Shared colours, main nav sidebar and top bar (Needs You, account). |

Missions and Outcomes aren't built yet.
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

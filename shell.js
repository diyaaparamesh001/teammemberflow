/* Flownt prototype — renders the main nav and utility bar shared by every page.
   A page calls Shell.mount("chat" | "team") once, then Shell.refresh() when the open chat changes. */
(function () {
  const PROJECTS = [
    { id: "project-cake-orders", title: "Cake orders" },
    { id: "project-stock-suppliers", title: "Stock & suppliers" },
    { id: "project-staff-schedule", title: "Staff schedule" },
  ];
  const STARTER_CHATS = [
    { id: "chat-quote-60-cupcakes", title: "Quote for 60 cupcakes" },
    { id: "chat-new-butter-supplier", title: "New butter supplier" },
    { id: "chat-croissant-review-reply", title: "Croissant review reply" },
  ].map((c) => ({ ...c, messages: [
    { from: "me", text: "Message text goes here." },
    { from: "ai", text: "Placeholder reply from Flownt. This is where the answer to the message would appear." },
  ] }));

  // New chats survive moving between pages in the same tab; the prototype works without storage too.
  const KEY = "flownt-chats";
  let chats;
  try { chats = JSON.parse(sessionStorage.getItem(KEY)) || null; } catch { chats = null; }
  if (!Array.isArray(chats)) chats = STARTER_CHATS;
  const save = () => { try { sessionStorage.setItem(KEY, JSON.stringify(chats)); } catch {} };

  let page = "chat";
  let chatOpen = true;
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const current = () => location.hash.slice(1);

  function toast(msg) {
    const el = $("#toast"); el.textContent = msg; el.hidden = false;
    clearTimeout(toast.t); toast.t = setTimeout(() => (el.hidden = true), 2400);
  }

  function navLink(href, label, on) {
    return `<a class="nav ${on ? "on" : ""}" href="${href}"><i></i>${label}</a>`;
  }
  function todo(label) {
    return `<button class="nav" data-shell="todo" data-what="${label}"><i></i>${label}</button>`;
  }
  function subLink(item, box) {
    const on = page === "chat" && current() === item.id;
    return `<a href="index.html#${item.id}" class="${on ? "on" : ""}">${box ? "<i></i>" : ""}<span>${esc(item.title)}</span></a>`;
  }

  function renderNav() {
    const onChat = page === "chat";
    $("#sidebar").innerHTML = `
      <a class="brand" href="index.html"><i></i>Flownt</a>
      ${todo("Home")}
      <div class="nav-row ${onChat ? "on" : ""}">
        ${navLink("index.html", "Chat", onChat)}
        <button class="caret" data-shell="caret" aria-expanded="${chatOpen}" aria-label="${chatOpen ? "Hide" : "Show"} chat history">${chatOpen ? "▼" : "▶"}</button>
      </div>
      <div class="sub" ${chatOpen ? "" : "hidden"}>
        <div class="sub-label">Projects</div>
        ${PROJECTS.map((p) => subLink(p, true)).join("")}
        <div class="sub-label">Recent</div>
        ${chats.slice(0, 5).map((c) => subLink(c, false)).join("")}
      </div>
      ${navLink("team.html", "My Team", page === "team")}
      ${todo("AI Workforce")}
      ${todo("Missions")}
      ${todo("Outcomes")}`;
  }

  function mount(which) {
    page = which;
    chatOpen = which === "chat";
    renderNav();
    $("#topbar").innerHTML = `
      <button class="menu-btn" data-shell="menu" aria-label="Open menu">☰</button>
      <input class="search" id="search" type="text" placeholder="Search..." aria-label="Search" autocomplete="off">
      <div class="top-right">
        <button class="needs-btn" data-shell="todo" data-what="Needs You"><i></i><span class="lbl">Needs You</span><b>3</b></button>
        <button class="me" aria-label="Your account" data-shell="todo" data-what="Your account"></button>
      </div>`;
    $("#search").addEventListener("keydown", (e) => { if (e.key === "Enter") toast("Search isn't part of this prototype"); });

    document.addEventListener("click", (e) => {
      const el = e.target.closest("[data-shell]");
      const sidebar = $("#sidebar");
      if (!e.target.closest("#sidebar") && !e.target.closest(".menu-btn")) sidebar.classList.remove("open");
      if (e.target.closest(".sub a, a.nav")) sidebar.classList.remove("open");
      if (!el) return;
      const a = el.dataset.shell;
      if (a === "menu") sidebar.classList.toggle("open");
      if (a === "caret") { chatOpen = !chatOpen; renderNav(); }
      if (a === "todo") toast(`${el.dataset.what} isn't part of this prototype`);
    });
  }

  window.Shell = {
    mount, toast, esc, PROJECTS,
    refresh: renderNav,
    chats: () => chats,
    chat: (id) => chats.find((c) => c.id === id),
    project: (id) => PROJECTS.find((p) => p.id === id),
    addChat(chat) { chats = [chat, ...chats]; save(); renderNav(); },
    saveChats() { save(); },
  };
})();

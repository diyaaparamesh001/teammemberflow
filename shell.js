/* Flownt prototype — renders the main nav and utility bar shared by every page.
   A page calls Shell.mount("home" | "team", { action }) once; action is optional HTML placed beside Needs You. */
(function () {
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function toast(msg) {
    const el = $("#toast"); el.textContent = msg; el.hidden = false;
    clearTimeout(toast.t); toast.t = setTimeout(() => (el.hidden = true), 2400);
  }

  const navLink = (href, label, on) => `<a class="nav ${on ? "on" : ""}" href="${href}"><i></i>${label}</a>`;
  const todo = (label) => `<button class="nav" data-shell="todo" data-what="${label}"><i></i>${label}</button>`;

  function mount(page, { action = "" } = {}) {
    $("#sidebar").innerHTML = `
      <a class="brand" href="index.html"><i></i>Flownt</a>
      ${navLink("index.html", "Home", page === "home")}
      ${navLink("team.html", "My Team", page === "team")}
      ${todo("AI Workforce")}
      ${todo("Missions")}
      ${todo("Outcomes")}`;
    $("#topbar").innerHTML = `
      <button class="menu-btn" data-shell="menu" aria-label="Open menu">☰</button>
      <div class="top-right">
        ${action}
        <button class="needs-btn" data-shell="todo" data-what="Needs You"><i></i><span class="lbl">Needs You</span><b>3</b></button>
        <button class="me" aria-label="Your account" data-shell="todo" data-what="Your account"></button>
      </div>`;

    document.addEventListener("click", (e) => {
      const el = e.target.closest("[data-shell]");
      const sidebar = $("#sidebar");
      if (!e.target.closest("#sidebar") && !e.target.closest(".menu-btn")) sidebar.classList.remove("open");
      if (!el) return;
      if (el.dataset.shell === "menu") sidebar.classList.toggle("open");
      if (el.dataset.shell === "todo") toast(`${el.dataset.what} isn't part of this prototype`);
    });
  }

  window.Shell = { mount, toast, esc };
})();

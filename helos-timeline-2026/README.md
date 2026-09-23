# Vertical Timeline Presentation

A reveal.js presentation with a centered vertical timeline. Each slide
focuses on one event: its dot lights up in the accent color, a connector
line reaches out to an icon badge, and its title/description sit on the
opposite side — alternating left/right as you advance, like a vertical
infographic. Other events stay visible as small muted dots on the line
above/below, for context — color is used sparingly, only on the event
currently in focus.

## Run it

Just double-click `index.html` (or open it via `File > Open` in your
browser). No server required.

## Add or edit events

Edit `data.js` — it's a plain array assigned to `window.TIMELINE_EVENTS`,
ordered chronologically. Nothing else needs to change; `index.html`
regenerates one slide per array entry and automatically alternates which
side gets the text vs. the icon.

```js
{
  id: "event-7",
  date: "Mar 2025",
  title: "New Milestone",
  description: "One or two sentences describing what happened.",
  icon: "rocket",     // optional — Lucide icon name, see lucide.dev/icons
  color: "#a855f7"    // optional — overrides the accent for THIS event only
}
```

- `id` must be unique and stable — it's what lets the timeline dot and
  label for this event animate consistently across slides. Don't reuse an
  old id for a new event.
- `date` is shown both next to the timeline dot and above the title.
- `icon` picks the symbol inside the badge shown while this event is
  active. Browse names at [lucide.dev/icons](https://lucide.dev/icons) and
  use the kebab-case name (e.g. "map-pin", "trending-up"). Omit it to fall
  back to a plain circle.
- `color` is optional. By default every event lights up in the same accent
  color (terracotta, `--accent` in `index.html`) while active, and is a
  muted neutral otherwise — deliberately minimal. Set `color` on a specific
  event only if you want that one moment to stand out differently.
- Add, remove, or reorder entries freely; the number of slides always
  matches the number of events.

Why `data.js` and not `data.json`: opening `index.html` straight from disk
(`file://…`) blocks `fetch()`/XHR of local files in most browsers, so a real
`.json` file can't be loaded without a server. A classic `<script src="data.js">`
tag isn't subject to that restriction, so the file loads with zero setup —
it's edited exactly like a JSON array, just with a `window.TIMELINE_EVENTS =`
wrapper.

## Controls

- **Arrow keys / Space**: advance or go back
- **On-screen ‹ › buttons**: bottom-left
- **Fullscreen button**: bottom-right (or press `f`, reveal.js's default)
- Event counter: bottom-right, `n / total`

## Notes

- Colors (cream background, deep plum text, one terracotta accent) are
  sampled from [helos.no](https://www.helos.no/)'s own brand. Change the
  `--bg`/`--text`/`--text-dim`/`--accent` variables in `index.html`'s
  `:root` to rebrand.
- The timeline (line, dots, labels) is a single persistent element that
  lives outside the slides and is repositioned/recolored directly via JS
  on navigation (`updateTimeline()`), animated by a plain CSS `transition`
  on `top`/size/opacity/color. It's *not* driven by reveal.js's
  Auto-Animate — that turned out to be unreliable for this piece (it
  manages `transform` itself and fights custom positioning). The
  text/icon content in each slide still uses Auto-Animate's built-in fade,
  which works well for that.
- Built on [reveal.js 6.0.2](https://revealjs.com/) (loaded from jsDelivr,
  version-pinned).
- Icons are rendered with [Lucide 1.47.0](https://lucide.dev/) (also
  version-pinned from jsDelivr), converted to inline SVG before reveal.js
  reads the page so the very first transition animates correctly.
- Requires internet access on first load (reveal.js + Lucide are fetched
  from a CDN); after that the browser cache covers repeat opens.
- Respects `prefers-reduced-motion`: transition duration collapses to
  near-instant when the OS setting is on.
- Timeline geometry (dot spacing, badge/connector size) lives at the top
  of the `<script type="module">` block and in the `<style>` block in
  `index.html` (`SPACING`, `.connector`, `.icon-badge`) if you want to
  tune the look.

# Kupalsa Planner

A lightweight, one-page plan website. It is designed as an **Operate** surface: one concrete goal, then the ordered actions required to reach it.

## What it does

- Displays a precise goal in an image-backed header.
- Shows the plan creation date beneath the goal.
- Lets you add steps, edit their title/description inline, set due dates, mark them complete, delete them, and drag them into order.
- Completing a step adds a minimal red hand-drawn diagonal strike from the lower left to the upper right.
- Saves one plan locally in the browser with `localStorage`; no backend or login is needed.
- Lets you change the heading image and a calm three-color theme from **Edit plan**.

## Run locally

```bash
cd kupalsa-planner
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## GitHub repository layout

Yes — one repository can hold every focused plan. Recommended layout:

```text
focus-plans/
  template/                 # reusable starter
  plans/
    publish-video-portfolio/
      index.html
    launch-offline-notes-app/
      index.html
  README.md
```

Each plan is a self-contained `index.html` copied from `template/`. GitHub Pages can serve the repository as a site. A plan then lives at a URL such as:

```text
https://YOUR-USERNAME.github.io/focus-plans/plans/publish-video-portfolio/
```

Important: this current template stores edits only in the browser that made them. To publish editable plan data across devices, the next version should save a `plan.json` file through GitHub API/OAuth or use a small backend such as Supabase/Firebase.

## Claude Code creation workflow

1. **Topic** — describe what you are working toward.
2. **Precise goal** — turn it into one measurable, outcome-focused heading with a timeframe.
3. **Hero visual** — choose one of: provide a photo, use a licensed image, or generate an original image.
4. **Palette** — extract three or four muted colors from the visual: accent, dark overlay/ink, canvas, and optional surface.
5. **Steps** — choose whether to create actions now. If yes, fill in the structure below.
6. **Generate and publish** — duplicate the template into `plans/<goal-slug>/index.html`, configure it, test it, commit it, and push it.

### Action-step input structure

```text
Goal:
Deadline (optional):

1. Step title:
   Why/definition of done:
   Due date:

2. Step title:
   Why/definition of done:
   Due date:
```

### Prompt for Claude Code

```text
Create a new focused-plan page in this repository from template/index.html.

First, help me turn this topic into a single concrete, outcome-based heading. Ask one question at a time only when needed for precision. Then ask whether I will provide a hero image, want a licensed image, or want an original generated image. Suggest a calm palette of 3–4 matte colors that works with the final image.

When the goal, image, and colors are approved, ask whether I want to add action steps now. If yes, ask me to fill out the action-step structure in README.md. Create the page at plans/<short-goal-slug>/index.html. Keep it a single responsive HTML file with no framework or build step. It must include editable ordered steps, due dates, drag-and-drop ordering, local browser persistence, and no invented tasks.

Run a local server and verify that it loads without console errors. Do not push to GitHub until I explicitly approve the repository name, visibility, and publish action.
```

# Hosting and Data Plan

## Recommended starting setup

Use **one GitHub repository** named `kupalsa-planner` for the template and every plan website.

```text
kupalsa-planner/
├── template/
│   ├── index.html
│   └── README.md
├── plans/
│   ├── publish-video-portfolio/
│   │   └── index.html
│   └── launch-offline-notes-app/
│       └── index.html
└── README.md
```

A separate repository is **not** needed for each plan.

## Create and publish the repository

1. Sign in to GitHub and click **+ → New repository**.
2. Use the name `focus-plans`.
3. Choose the visibility deliberately:
   - **Public:** the pages and their source files can be viewed by anyone.
   - **Private:** keep plans private; confirm the GitHub Pages availability for the account/organization before relying on it.
4. Create the repository with a README.
5. Upload/push this template into `template/`.
6. In the repository, open **Settings → Pages**.
7. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/ (root)`.
8. GitHub provides a site URL. A page placed in `plans/my-plan/index.html` is available at:

```text
https://YOUR-USERNAME.github.io/kupalsa-planner/plans/my-plan/
```

## Where plan data should live

### Option A — local browser storage (current template)

- Data stays in `localStorage` on the device/browser that made the edit.
- Fast, private, works offline after first load.
- No account, backend, or database.
- **Limitation:** it will not sync to another device and is lost if browser storage is cleared.

Best for: prototypes and personal single-device use.

### Option B — JSON files in the same GitHub repository

Store each plan beside its page:

```text
plans/
  publish-video-portfolio/
    index.html
    plan.json
```

- The repository holds the code and plan data together.
- Good for version history and backups.
- A browser cannot safely push changes to GitHub by itself without an authentication layer.
- Never place a GitHub personal-access token in `index.html` or public JavaScript.

Best for: plans changed through Claude Code/GitHub commits, with optional browser import/export.

### Option C — one repository + a small database (recommended for your real use)

Keep every website and template in the **same `focus-plans` repository**, but store editable plan data in a database such as Supabase.

```text
GitHub repository  → HTML/CSS/JS template and all plan pages
GitHub Pages       → static hosting
Supabase           → goals, steps, completion state, order, colors, image URLs
```

- Syncs across phone and computer.
- The checkbox state and reorder save immediately.
- Plans can be private per user through authentication.
- No extra GitHub repository is necessary.

Best for: the product you described—quick phone capture, persistent plans, and future AI organization.

## Suggested implementation order

1. Publish the current static template in one repository.
2. Keep plan data in browser storage while validating the workflow.
3. Add **Export plan** / **Import plan** as `plan.json` backups.
4. When the workflow proves useful, add Supabase authentication and syncing.
5. Add a plan index page so all focused plans can be opened from one dashboard.

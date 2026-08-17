# Kupalsa Planner

A one-page planner for one concrete outcome: a goal header, its ordered actions, due dates, and a visual completion mark.

## What it does

- Displays a specific goal over an image-backed header and shows its creation date.
- Lets you add, edit, reorder, and delete action steps.
- Keeps a due date for each action.
- Marks completed actions with a checkbox and a minimal red hand-drawn diagonal strike.
- Lets you select the image and calm three-color palette for each plan.
- Works locally first, then can sync each plan to a separate private GitHub data repository.

## Repositories

- **Public code and template:** this repository, `kupalsa/kupalsa-planner`
- **Private plan data:** `kupalsa/Kupalsa-Planner-Data`

The public repository contains no private tasks, tokens, or plan JSON files. The private data repository contains one JSON file per plan.

```text
Kupalsa-Planner-Data/
  data/
    planner-template.json
    plans.json
    plans/
      starter-plan.json
      launch-video-portfolio.json
```

## Connect a published planner to private data

1. Open the planner and select **Data connection**.
2. Enter:
   - GitHub username: `kupalsa`
   - Private data repository: `Kupalsa-Planner-Data`
   - A unique plan ID, for example `launch-video-portfolio`
3. Create a [fine-grained GitHub token](https://github.com/settings/personal-access-tokens/new):
   - Repository access: **Only select repositories** → `Kupalsa-Planner-Data`
   - Repository permissions → **Contents: Read and write**
4. Paste the token only into the planner’s Data connection dialog, then select **Save & sync**.

The connection values and token stay only in that browser’s local storage. They are never committed to this public repository.

## Creating a new focused planner

For every new plan:

1. Define one measurable, outcome-focused goal.
2. Choose or generate the header image.
3. Choose a calm palette: accent, dark overlay, canvas, and optional surface color.
4. Write the ordered action steps, including due dates.
5. Copy this page into `plans/<plan-slug>/index.html`.
6. Copy `planner-template.json` in the private data repo to `data/plans/<plan-slug>.json` and customize its goal, theme, and steps.
7. In the new page’s **Data connection** dialog, use the same `<plan-slug>` as its plan ID.

## Run locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

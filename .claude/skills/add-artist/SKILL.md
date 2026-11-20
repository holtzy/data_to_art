---
name: add-artist
description: Add a new artist (and their projects) to the data-to-art site. Use when an invited artist has sent their material (bio, photo, project texts, images) and it needs to become an artist page + project pages.
---

# Add a new artist

Artists send what the `/submit` page asks for (name, tagline, photo, city, links,
bio, favorite piece, 1–3 projects with text + images). Turn it into pages.

## 1. Files to touch (slug = kebab-case name, identical everywhere)

| What | Where |
|---|---|
| Artist entry | `lib/artist-list.tsx` (append; `location` is **[lng, lat]**) |
| Project entries | `lib/project-list.tsx` (append under a `// NAME` banner; `artist` = slug) |
| Artist page | `app/artist/<slug>/page.tsx` (model: `nadieh-bremer`) |
| Project pages | `app/artist/<slug>/<project>/page.tsx`, `"use client"` (model: `nadieh-bremer/searching-for-birds`) |
| Avatar | `public/artist/<slug>.webp`, 400×400 square |
| Hero cover | `public/project/<slug>/cover.webp`, 4:5 portrait, from their **favorite piece** |
| Project images | `public/project/<slug>/<project>/NN.png` → `NN-{thumb,medium,full,blur}.webp` |

Artist + projects then appear automatically on `/artists`, the globe, home and galleries.

## 2. Images

- Copy originals into each project folder renamed `01`, `02`, … in the order you want.
  **`01` is the project card thumbnail** — pick the most iconic image.
- Then run once per folder (originals only, not recursive):
  `bash public/project/generate-webp.sh public/project/<slug>/<project>`
- Make `cover.webp` and the avatar by hand with `magick … -resize WxH^ -gravity center -extent WxH`.
- Look at the images (contact sheet: `magick montage -label '%f' *.png -thumbnail 260x200 -tile 6x out.jpg`)
  before choosing the order; skip near-duplicates.

## 3. Writing the pages

- **Use the artist's own words**, lightly edited: short paragraphs, a few `<b>` highlights.
  Don't invent facts. Captions may describe what an image shows.
- Artist page: hero → bio with `drop-cap` → favorite piece full-width → rest of bio
  → second image → `ArtistGallerySection` → `ArtistProjectsSection` → `<Spacing />` → `Contact`.
- Project page: `ProjectHero` (5 `-medium.webp` images) → intro → **images interleaved
  with the prose**, early → closing one-sentence conclusion → link button → `PrevAndNextProjectLinks`.
- Images: big and uncropped. `ImgWithCaption` in `max-w-[1000px]` (≈640px for portrait
  pieces) or a plain `grid` of `<img className="w-full">`. **Avoid `FiveImgsGallery`** (crops).
- If the artist explains an encoding (legend, blueprint, "X is mapped to Y"), turn it into
  a short `<ul>`. One key per series if each series has its own logic.
- A punchy artist quote → `<QuoteSection text="…" />` (one sentence).

## 4. Check

- `npx tsc --noEmit` is clean for the new files, then open every new page on the dev
  server and scroll through: no broken images, nothing cropped, and **no red "Issues"
  badge** from Next.js (bottom-left).
- Common cause of that badge: a `<p>` inside a `<p>`. `descriptionShort` already holds a
  `<p>`, and `ImgWithCaption` wraps `caption` in a `<p>` → pass captions as `<span>`.
  In JSX, iframe attributes are `frameBorder` / `allowFullScreen` (camelCase).
- Tell the user what was **guessed or missing** (e.g. no portrait, exact project dates, city coordinates).

## Log (lessons from real runs — fold recurring ones into the steps above)

- 2026-06 **Zeh Fernandes / GenCup**: one project in 4 editions → nested
  `<project>/<edition>/` folders, per-edition reading keys, `01-thumb` seeded at project root.
  User wants big full-bleed images, an image mid-intro, `<Spacing />` before `Contact`.
- 2026-11 **Nadieh Bremer** (3 projects): material arrived by email + a zip in `~/Downloads`.
  Portrait was only a Google Drive link → ask the user to drop it in `~/Downloads`.
  Photo filename carried a photographer credit → added a small "Portrait photo: …" line
  on the artist page. Dates given as month/year → used the 1st of the month.

---
name: add-artist
description: Scaffold a new artist (and their projects) on the data-to-art site. Use when adding an artist to lib/artist-list.tsx, creating their app/artist/<folder>/ pages, wiring projects into lib/project-list.tsx, and placing images under public/. Walks through collecting details and generates files matching the existing house style.
---

# Add a new artist

This site lists data-art **artists**, each with one or more **projects**. Adding an
artist touches data files, page files, and images. Follow these steps in order.

## 0. Gather info first

Ask the user for (or confirm if already provided):

- **Name** (e.g. "Soha Elghany")
- **Folder slug** — kebab-case, derived from the name (e.g. `soha-elghany`). Used as
  the directory name AND the `folder`/`artist` key across files. Must be identical everywhere.
- **City + country flag emoji** (e.g. `London - 🏴󠁧󠁢󠁥󠁮󠁧󠁿`)
- **Location** as `[longitude, latitude]` — ⚠️ lng first, NOT lat. Used by the globe.
- **homepageLink** (full URL) and optional **linkedinLink**
- **Short description** (1–2 sentences, shown in hero + cards)
- **A longer bio** for the landing page body
- **Projects**: for each — name, slug, external article link, date, short description, and images.

## 1. Register the artist — `lib/artist-list.tsx`

Append an object to `artistList`. Type is `Artist` (see top of file). Example:

```tsx
{
  name: "Jane Doe",
  descriptionShort: (
    <>
      <p>
        One or two sentences describing the artist. JSX, so wrap in <>…</>.
      </p>
    </>
  ),
  folder: "jane-doe",
  location: [2.3522, 48.8566], // [lng, lat] — Paris
  city: "Paris - 🇫🇷",
  homepageLink: "https://janedoe.com",
  linkedinLink: "https://www.linkedin.com/in/janedoe/", // optional
},
```

The artist auto-appears on `/artists` (globe), the home page, and the avatar rows —
those all read from `artistList`. No other registration needed.

## 2. Register each project — `lib/project-list.tsx`

Projects are grouped by artist with a comment banner. Add one banner + one object per project:

```tsx
////////
///////
// JANE DOE
////////
///////
{
  name: "Project Title",
  folder: "project-slug",
  link: "https://external-article-or-portfolio-url",
  artist: "jane-doe", // MUST match the artist's folder slug exactly
  date: new Date("2024-05-01"),
  descriptionShort: (
    <>
      <p>One or two sentences about the project.</p>
    </>
  ),
},
```

## 3. Artist landing page — `app/artist/<folder>/page.tsx`

Copy the shape of an existing one (`app/artist/soha-elghany/page.tsx` is a good model).
Key parts:

- `const ARTIST = "<folder>";`
- `const infos = artistList.find((a) => a.folder === ARTIST);` (early-return null if missing)
- `const allImages = getArtistImages(ARTIST);` — auto-collects every `*-full.webp` under
  `public/project/<folder>/`.
- Renders `<ArtistHero artist={infos} />`, a bio block, optional `<ImgWithCaption>` /
  `<QuoteSection>`, `<ArtistGallerySection imgs={allImages} />`, and
  `<ArtistProjectsSection artistId={ARTIST} />`, ending with `<Contact />`.
- ⚠️ Put a `<Spacing />` AFTER `<ArtistProjectsSection>` (inside the wrapper, before
  `<Contact />`) — otherwise the project grid butts straight into the dark Contact band.

## 4. One page per project — `app/artist/<folder>/<project-slug>/page.tsx`

Model: `app/artist/soha-elghany/missing-migrants/page.tsx`. Starts with `"use client";`. Key parts:

- `const PROJECT = "<project-slug>";` and `const AUTHOR = "<folder>";`
- Looks up `projectInfo` from `projectList` and `artistInfo` from `artistList`.
- `imagesTop` = array of `"NN-full.webp"` filenames for `<ProjectHero images={...} />`.
- Body paragraphs (first one often `className="drop-cap"`), big full-bleed images
  (see preferences below), a "Read full article" button to `projectInfo.link`, and
  `<PrevAndNextProjectLinks currentProject={PROJECT} />`.

**House preferences for project pages (from real feedback):**
- **Prefer big full-bleed images over `FiveImgsGallery`.** `FiveImgsGallery` crops to a fixed
  height (`object-cover`) and hides parts of the artwork. Favor `ImgWithCaption` (already
  `full-bleed`, shows the whole uncropped image) wrapped in
  `<div className="full-bleed"><div className="max-w-[Npx] mx-auto">…`, or plain
  `grid grid-cols-N` of `<img className="w-full">` for uncropped thumbnails. Use ~`640px`
  max-width for portrait pieces so they stay large without becoming absurdly tall.
- If the artist provides a **"blueprint"/legend/diagram image** explaining how their encoding
  works, give it a "How to read it" section with a short `<ul>` mapping each visual
  property to the underlying data — don't just drop it in the gallery.
  ⚠️ A blueprint is usually **specific to one series/edition**, not the whole project. If a
  multi-edition project ships one blueprint per edition (each with its own logic), put each
  reading key INSIDE its own edition section — never one global "how to read" for all of them.
  Open each blueprint image and read its labels; the encoding differs per edition.
- **End the body with a one-sentence conclusion** right before the final link button.
- Surface the artist's **personal quote/citation** via `<QuoteSection text="…" />` (keep it to
  one punchy sentence — it renders at `text-4xl`).
- **Intersperse full-bleed images within the prose**, not only inside edition sections. Drop a
  striking image early (even mid-intro, between two paragraphs) to break up the text and set
  the tone before the reader reaches the structured sections. Keep paragraphs short.

## 5. Images — `public/`

Required:

- **Portrait/avatar**: `public/artist/<folder>.webp` (square-ish; shown as `w-82 h-82` in hero).
- **Hero background**: `public/project/<folder>/cover.webp`.
- **Project images**: `public/project/<folder>/<project-slug>/NN-full.webp`, numbered
  `01`, `02`, … The gallery auto-discovers any file ending in `-full.webp`.

**Generating the webp variants** — use the committed script
`public/project/generate-webp.sh` (requires ImageMagick's `convert`). It reads every image
in ONE directory and emits four sizes next to each:

```bash
# run from repo root, pass the project image folder
bash public/project/generate-webp.sh public/project/<folder>/<project-slug>
```

For each source file `NN.png` (or `.jpg/.jpeg/.avif/.webp`) it writes:
`NN-thumb.webp` (300px), `NN-medium.webp` (800px), `NN-full.webp` (1600px),
`NN-blur.webp` (20px). Only `-full.webp` is referenced by the page code, but generate all
four to match the rest of the site.

⚠️ Gotchas:
- It is **not recursive** — run it once per project folder.
- Its input glob includes `*.webp`, so running it on a folder that already has generated
  variants will reprocess them (e.g. `01-full.webp` → `01-full-thumb.webp`). Run it on a
  folder of **originals only**, before variants exist.
- It does **not** create `cover.webp` (no `-full` suffix). Place/resize `cover.webp` and the
  `public/artist/<folder>.webp` portrait manually.

## 6. Verify

- Slug is byte-identical in: folder name, `artist-list` `folder`, `project-list` `artist`,
  page `ARTIST`/`AUTHOR`/`PROJECT` consts, and image paths.
- `npm run build` (or `npm run dev`) to confirm pages compile and images resolve.

---

### Incoming folder convention (how the user delivers assets)

The user drops a single folder `public/project/<folder>/` containing:
- a **profile picture** (e.g. `profile.jpeg`) at the top level → move it to
  `public/artist/<folder>.webp` (square center-crop):
  `magick <src> -resize 700x700^ -gravity center -extent 700x700 public/artist/<folder>.webp`
  then delete the original from the project folder.
- **one subfolder per project**, each holding that project's source images.

So normally: each subfolder = one project → becomes one `app/artist/<folder>/<subfolder>/page.tsx`
+ one `project-list` entry, and the subfolder name is the project slug.

### Path contracts that constrain folder layout (important)

- `ProjectCard` (artist page project grid) hardcodes the thumbnail to
  `/project/<artist>/<project>/01-thumb.webp`. Every project needs a top-level
  `01.*` source in its project folder so `01-thumb.webp` exists.
- `ProjectHero` builds image src as `/project/<artist>/<project>/<img>` — the `images`
  prop is filenames RELATIVE to the project folder. You can pass sub-paths like
  `"2022/01-full.webp"` and it still resolves, which is handy for nested layouts.
- `getArtistImages` walks `public/project/<artist>/` **recursively**, so any `*-full.webp`
  at any depth shows up in the artist's gallery — including blueprint/diagram pngs.
- `FiveImgsGallery` requires **exactly 5** image paths (full paths, flexible location);
  for other counts use a plain `grid`/`flex` of `<img>` or `ImgWithCaption`.
- `generate-webp.sh` skips `.gif`/`.mp4` (no `-full.webp` produced) — animated posters and
  videos won't appear in the auto-gallery; embed them by hand on the page if wanted.

### Variation: one project spread across several folders (e.g. GenCup / Zeh Fernandes)

When the delivered subfolders are **editions/series of a SINGLE project** (not separate
projects):
- Nest them under one project folder: `public/project/<folder>/<project>/<edition>/…`.
- Seed a top-level `<project>/01.*` (copy the iconic image) for the `ProjectCard` thumbnail,
  generate webp on it, then delete `01-full/medium/blur.webp` keeping only `01-thumb.webp`
  to avoid a duplicate in the auto-gallery.
- `ProjectHero images` and `FiveImgsGallery` reference edition-prefixed paths
  (`2022/01-full.webp`).
- The project page becomes custom: an intro, then one `<h2>` + gallery section per edition.

### Improvement log
- 2026-06-29 — First real run: **Zeh Fernandes / GenCup** (single project, 4 World Cup
  editions 2018/2019/2022/2023). Shipped and approved by the user. Confirmed the path
  contracts above; build passed. Lessons folded into the steps above:
  - Each edition had its OWN encoding + its OWN blueprint → per-edition "Reading the YYYY
    system" keys, never one global legend.
  - User preferred big full-bleed images over `FiveImgsGallery`, and added a full-bleed image
    *mid-intro* between paragraphs → "intersperse images within the prose" preference.
  - Needed a `<Spacing />` before `<Contact />` on the artist page.
  - Values that were guessed/defaulted (re-confirm for future artists, don't assume a pattern):
    city/location (São Paulo), `homepageLink` (`zehfernandes.com`), `cover.webp` (a cropped
    portrait poster), and the project intro text (author's final version was still pending).
_Notes captured while using this skill on real artists — refine the steps above as patterns become clearer._

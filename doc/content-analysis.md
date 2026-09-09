---
id: jawaa-content-analysis
title: "JAWAA — Pemetaan Konten Teks untuk Konversi ke Portfolio Business Analyst"
type: plan-document
created: 2026-09-10
revised: 2026-09-10
status: revised
purpose: "Mencatat SEMUA teks literal di kage.html, lalu memetakan masing-masing ke konten portfolio BA"
---

# JAWAA — Pemetaan Konten (Revisi)

> **Prinsip:** Hanya ubah teks/string konten. Tidak ubah struktur HTML, CSS, JS, animasi, atau desain.

## Sumber Konten Utama

Semua teks user-facing hidup di **satu file**:
`dist/landing-pages/kage.html` (line 886–1196, bagian `<body>`)

File ini di-render di dalam `<iframe>` oleh React app. React app sendiri (`App.tsx`, `KageLandingPage.tsx`) hanya meneruskan config (font, warna) — **bukan teks**.

---

## 1. PRELOADER (line 895–909)

| # | Lokasi (line) | Teks Asli | Mapping Portfolio BA | Catatan |
|---|---------------|-----------|---------------------|---------|
| 1 | L903 | `影の道` | *Hapus/ganti tagline JP* | Teks Jepang dekoratif |
| 2 | L906 | `Raising the mountain temple` | `Loading portfolio...` atau `Preparing workspace` | Loading message |
| 3 | L906 | `0%` → counter | — | Keep as-is (mekanik) |

---

## 2. NAVIGATION BAR (line 912–928)

| # | Lokasi | Teks Asli | Mapping Portfolio BA |
|---|--------|-----------|---------------------|
| 4 | L919 | `KAGE` (brand bold) | **Nama kamu** (e.g. `DARWAN`) |
| 5 | L919 | `HIDDEN REALMS OF KYOTO` (brand italic) | **Role** (e.g. `BUSINESS ANALYST`) |
| 6 | L922 | `Temples` / `伽藍` | **Nav link 1** → `About` / subtitle |
| 7 | L923 | `Gardens` / `庭園` | **Nav link 2** → `Projects` / subtitle |
| 8 | L924 | `Rituals` / `神事` | **Nav link 3** → `Skills` / subtitle |
| 9 | L925 | `Afterlight` / `残光` | **Nav link 4** → `Contact` / subtitle |

> **Note:** Setiap nav link punya 2 span: teks utama + teks alternatif (`.alt`). Ganti keduanya.

---

## 3. HERO SECTION (line 933–974)

| # | Lokasi | Teks Asli | Mapping Portfolio BA |
|---|--------|-----------|---------------------|
| 10 | L935 | `Chapter 00 — The Hidden Gate` | Eyebrow → `Portfolio — Business Analyst` |
| 11 | L937-939 | `Where stillness / reveals the / unseen.` | Headline 3 baris → e.g. `Bridging business / needs with / solutions.` |
| 12 | L941-942 | `Enter Kyoto through its quiet thresholds, where ritual, craft, and memory shape the path.` | Subtitle → deskripsi singkat dirimu, e.g. `Specializing in requirements analysis, process optimization, and stakeholder engagement.` |
| 13 | L948 | `Scroll to enter` | Keep atau ganti → `Scroll to explore` |
| 14 | L950-951 | Chip 01: `Thresholds` / `Discover the hidden gates that open on to deeper paths.` | → `About Me` / deskripsi singkat |
| 15 | L952-953 | Chip 02: `Still Gardens` / `Witness the courts where silence gently unfolds.` | → `Projects` / deskripsi singkat |
| 16 | L954-955 | Chip 03: `Sacred Craft` / `Embrace the hands and heritage that shape devotion.` | → `Skills` / deskripsi singkat |
| 17 | L956-957 | Chip 04: `Night Rituals` / `Explore the rites that awaken when the day is done.` | → `Experience` / deskripsi singkat |
| 18 | L966 | `山門` / `Sanmon — before the bell` | Preview caption → ganti konteks |
| 19 | L969 | `KAGE` (3D wordmark fallback) | **Nama kamu** atau inisial |
| 20 | L972 | `影の道` (side vertical JP) | Ganti/hapus teks vertikal |

---

## 4. CHAPTER I — "The Sanmon" (line 977–1015)

| # | Lokasi | Teks Asli | Mapping Portfolio BA |
|---|--------|-----------|---------------------|
| 21 | L991 | `01 — The Sanmon` / `山門` | Section header → `01 — About Me` / subtitle |
| 22 | L994 | `Charred cypress, worn stone, one gate left open.` | Heading → e.g. `Analyst mindset. Business focus. Data-driven decisions.` |
| 23 | L996-998 | `Kage begins where the city stops: a mountain gate...` (lead paragraph) | → Paragraf "Siapa aku" — background, passion |
| 24 | L999-1002 | `Climb the worn steps and the worship hall lifts...` (body paragraph) | → Paragraf pendekatan kerja / filosofi BA |
| 25 | L1004 | `Cross the threshold` (CTA link) | → `View my projects` atau `Learn more` |
| 26 | L1010 | `05` / `Chapters` | Stat 1 → e.g. `5` / `Years Experience` |
| 27 | L1011 | `92` / `Minutes` | Stat 2 → e.g. `20+` / `Projects Delivered` |
| 28 | L1012 | `1611` / `Hall raised` | Stat 3 → e.g. `15` / `Stakeholders Managed` |
| 29 | L1013 | `∞` / `Stillness` | Stat 4 → e.g. `100%` / `Commitment` |

---

## 5. CHAPTER II — "Still Gardens" / Gallery Cards (line 1018–1063)

| # | Lokasi | Teks Asli | Mapping Portfolio BA |
|---|--------|-----------|---------------------|
| 30 | L1035 | `02 — Still Gardens` / `庭園` | Section header → `02 — Projects` / subtitle |
| 31 | L1042 | Card 1: `Approach` / `参道` | Project 1 nama + subtitle JP |
| 32 | L1044 | Card 1 meta: `The long climb` / `01 / 03` | Project 1 deskripsi + nomor |
| 33 | L1050 | Card 2: `Lanterns` / `灯籠` | Project 2 nama + subtitle |
| 34 | L1052 | Card 2 meta: `Lantern court` / `02 / 03` | Project 2 deskripsi + nomor |
| 35 | L1058 | Card 3: `Moonwater` / `月影` | Project 3 nama + subtitle |
| 36 | L1060 | Card 3 meta: `The wet court` / `03 / 03` | Project 3 deskripsi + nomor |

> **Gallery cards** = tempat ideal untuk showcase 3 project utama kamu.

---

## 6. CHAPTER III — "Sacred Craft" / Curriculum (line 1066–1119)

| # | Lokasi | Teks Asli | Mapping Portfolio BA |
|---|--------|-----------|---------------------|
| 37 | L1080 | `03 — Sacred Craft` / `手業` | Section header → `03 — Skills & Expertise` |
| 38 | L1083 | `Five chapters. Ninety minutes. One quiet mind.` | Heading → e.g. `Core competencies. Proven methods. Clear outcomes.` |
| 39 | L1084-1085 | `Each chapter is a walk, not a lecture...` | Paragraf → deskripsi pendekatan skill kamu |
| 40 | L1089-1092 | Lesson 01: `The Hidden Gate` / `山門` / `Why a gate is a sentence...` / `14 min` | → Skill 1: nama + deskripsi + metric |
| 41 | L1095-1098 | Lesson 02: `Borrowed Scenery` / `借景` / `Shakkei: composing...` / `18 min` | → Skill 2 |
| 42 | L1101-1104 | Lesson 03: `Charred Cypress` / `焼杉` / `Yakisugi: burning...` / `21 min` | → Skill 3 |
| 43 | L1107-1110 | Lesson 04: `Lantern Light` / `灯籠` / `How a single ember...` / `17 min` | → Skill 4 |
| 44 | L1113-1116 | Lesson 05: `The Vermilion Moon` / `朱月` / `Why the moon burns...` / `22 min` | → Skill 5 |

> Setiap lesson punya: **nomor**, **judul**, **teks JP**, **deskripsi**, **durasi**. Semua bisa di-map ke skill BA.

---

## 7. CHAPTER IV — "Afterlight" / Closing CTA (line 1122–1146)

| # | Lokasi | Teks Asli | Mapping Portfolio BA |
|---|--------|-----------|---------------------|
| 45 | L1138 | `Chapter 04 — Afterlight` | Eyebrow → `Let's Connect` atau `Get in Touch` |
| 46 | L1139 | `Afterlight` | Heading → `Contact Me` |
| 47 | L1140-1141 | `The gate does not close behind you. Take the walk whenever the noise gets loud...` | → CTA paragraph, e.g. `Open to new opportunities. Let's discuss how I can contribute to your team.` |
| 48 | L1143 | `Begin the walk` | CTA button → `Send a Message` atau `Connect on LinkedIn` |

---

## 8. FOOTER (line 1149–1194)

| # | Lokasi | Teks Asli | Mapping Portfolio BA |
|---|--------|-----------|---------------------|
| 49 | L1168-1169 | `A five-chapter night walk through a Kyoto mountain temple...` | Footer desc → `Business Analyst portfolio. Built with React & Three.js.` |
| 50 | L1171 | Column header: `Chapters` | → `Sections` |
| 51 | L1172-1175 | Links: `The Sanmon`, `Still Gardens`, `Sacred Craft`, `Afterlight` | → `About`, `Projects`, `Skills`, `Contact` |
| 52 | L1177 | Column header: `Practice` | → `Resources` atau `Documents` |
| 53 | L1178-1181 | Links: `Borrowed scenery`, `Lantern light`, `Charred cypress`, `Raked gravel` | → `Resume/CV`, `LinkedIn`, `GitHub`, `Certifications` |
| 54 | L1183 | Column header: `Elsewhere` | → `Social` atau `Links` |
| 55 | L1184-1186 | Links: `Journal`, `Field notes`, `Colophon` | → Link sosial media / blog |
| 56 | L1190 | `© 2026 Kage — Kage no Michi` | → `© 2026 [Nama Kamu]` |
| 57 | L1191 | `静けさは一つの技である` (JP quote) | → Tagline pribadi atau hapus |
| 58 | L1192 | `WebGL · Onest · Kyoto` | → `React · TypeScript · Jakarta` (atau kota kamu) |

---

## 9. META & BRANDING (di luar body)

| # | Lokasi | File | Teks Asli | Ganti ke |
|---|--------|------|-----------|----------|
| 59 | L6 | `kage.html` | `<title>Kage — Hidden Realms of Kyoto</title>` | `<title>[Nama] — Business Analyst Portfolio</title>` |
| 60 | L7 | `kage.html` | `<meta name="description" content="...">` | Deskripsi portfolio |
| 61 | L7 | `index.html` | `<title>jawaa</title>` | `<title>[Nama] — Portfolio</title>` |
| 62 | — | `KageLandingPage.tsx` L15 | `title="Kage — Where stillness reveals the unseen"` | Title iframe |

---

## 10. KONTEN SVG LOGO (L898–901, L914–918, L1164–1167)

Logo KAGE = SVG (lingkaran merah + garis silang). Muncul di 3 tempat:
- Preloader (L898)
- Nav brand (L914)
- Footer brand (L1164)

**Opsi:** Ganti SVG path dengan logo/inisial kamu, atau keep sebagai elemen desain abstrak.

---

## 11. WARNA BRAND

| Elemen | Nilai | Catatan |
|--------|-------|---------|
| Primary (merah) | `#e0231c` | Dipakai di SVG, CSS var, dan App.tsx prop |
| Background | `#080808` | Gelap — tetap |
| Text | `#dfe7e0` | Light text on dark — tetap |

Ubah `primaryColor` di `App.tsx` line 12 untuk override warna secara global.

---

## 12. RINGKASAN: Total Teks yang Perlu Diganti

| Section | Jumlah Item Teks | Prioritas |
|---------|-----------------|-----------|
| Preloader | 2 | Low |
| Navigation | 6 | **High** |
| Hero | 11 | **High** |
| Chapter I (About) | 9 | **High** |
| Chapter II (Projects) | 6 | **High** |
| Chapter III (Skills) | 8 | **High** |
| Chapter IV (CTA) | 4 | Medium |
| Footer | 10 | Medium |
| Meta/Title | 4 | Medium |
| SVG Logo | 3 instances | Low (opsional) |
| **TOTAL** | **~63 item teks** | — |

---

## 13. LANGKAH BUILD (saat konten sudah siap)

1. User siapkan konten pengganti untuk 63 item di atas
2. Edit `dist/landing-pages/kage.html` — ganti teks literal
3. Edit `index.html` — ganti `<title>`
4. Edit `App.tsx` line 12 — ganti `primaryColor` jika perlu
5. Edit `KageLandingPage.tsx` line 15 — ganti `title` prop
6. `npm run dev` → test
7. `npm run build` → deploy

> **PENTING:** File `kage.html` ada di `dist/` (output build) DAN di-serve sebagai static asset via `public/landing-pages/kage.html`. Pastikan edit yang benar — kemungkinan file master ada di `dist/` karena `public/landing-pages/` kosong dan `kage.html` sudah lengkap di `dist/`.

---

## 14. YANG KAMU PERLU SIAPKAN

Isi konten di bawah ini, lalu kita langsung eksekusi:

```
NAMA           : ___
ROLE           : Business Analyst
TAGLINE (3 baris hero): 
  Baris 1      : ___
  Baris 2      : ___
  Baris 3      : ___
SUBTITLE       : ___
WARNA PRIMARY  : #___ (atau tetap #e0231c)

STAT 1         : ___ / ___
STAT 2         : ___ / ___
STAT 3         : ___ / ___
STAT 4         : ___ / ___

PROJECT 1      : Nama / Deskripsi singkat
PROJECT 2      : Nama / Deskripsi singkat
PROJECT 3      : Nama / Deskripsi singkat

SKILL 1        : Nama / Deskripsi
SKILL 2        : Nama / Deskripsi
SKILL 3        : Nama / Deskripsi
SKILL 4        : Nama / Deskripsi
SKILL 5        : Nama / Deskripsi

ABOUT (par 1)  : ___
ABOUT (par 2)  : ___
CTA TEXT       : ___
COPYRIGHT      : ___
KOTA           : ___

SOCIAL LINKS   :
  - LinkedIn   : ___
  - GitHub     : ___
  - Email      : ___
  - Lainnya    : ___
```

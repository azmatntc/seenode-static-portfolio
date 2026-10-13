# Freelance Full-Stack Developer Portfolio

A static, animated, responsive portfolio built with **SvelteKit 3**, **Svelte 5**, **Vite** and **Tailwind CSS v4**, using `adapter-static` so `npm run build` outputs plain HTML/CSS/JS.

## Run locally

Requires Node.js 20.19+ (22 recommended).

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # static site is written to ./build
npm run preview    # serve the production build locally
```

## Make it yours (checklist)

Everything editable lives in **`src/lib/content.js`**. Items marked `placeholder: true` show a small "Placeholder" / "Sample" badge until you replace them and set it to `false`.

| What | Where |
| --- | --- |
| Name, email, **site URL** (set after deploying), time zone | `site` |
| Hero text and quick facts (reply time, time zone, work style) | `hero` |
| Photo | put `profile.jpg` in `static/images/`, then set `about.photo` to `'/images/profile.jpg'` |
| About text and working principles | `about` |
| Skills (colours follow the layer automatically) | `skills` |
| Services and ways of working (add prices in `rate` if you want) | `services` |
| **Case studies** (also generate `/work/<slug>/` pages) | `src/lib/case-studies.js` (5 detailed samples) and `projects.items` (4 short placeholders: delete or replace) |
| Project screenshots | put images in `static/images/projects/`, set `image` / `screens` |
| Testimonials and client logos | `testimonials` |
| Cloud, SEO and security section (pillars, proof, review offer) | `assurance` |
| **CV** | replace `static/resume.pdf` with your own file |
| **Contact form delivery** | paste a Formspree-style endpoint into `contact.form.endpoint` |
| **Booking link** (Cal.com, Calendly) | `contact.booking.href` (empty = button hidden) |
| Social links (GitHub, LinkedIn) | `contact.socials` |
| Privacy-friendly analytics | `site.analytics.domain` (empty = no script is loaded) |

Also replace the generated **social preview image** (`static/og-image.png`, 1200×630) if you want a different design.

### Contact form

With no endpoint set, the form validates the input and then opens the visitor's email app with the message pre-filled. To receive messages directly, create a free form at [formspree.io](https://formspree.io), copy its URL (`https://formspree.io/f/xxxxxxx`) into `contact.form.endpoint`, and rebuild. The form includes a hidden spam trap and accessible error messages.

## Features

- **Hero:** animated request-flow diagram (browser → Django → database), word-by-word headline entrance, live local-time badge, CV download.
- **Sections:** About, Skills, Services and engagement models, Process (scroll-linked timeline), Projects, Testimonials, Contact.
- **Cloud, SEO and security section:** three pillars (what I do, how a client can verify it) and a proof strip. The figures in the proof strip were measured on this site, so re-check them (Lighthouse, axe) after you change the design or content.
- **Case-study pages** for every project, prerendered as static files, with next-project navigation. Five detailed samples (law-firm platform, local marketplace, billing SaaS, Oracle reporting migration, live delivery dispatch) show the full structure: problem, approach, hardest challenge, how each technology was used, features, result and metrics. The sample client names and figures are illustrative: replace them with your real work.
- **Light and dark theme** with a toggle. It follows the visitor's system setting by default, remembers their choice, and applies before first paint (no flash).
- **SEO:** per-page titles and canonical URLs, Open Graph and Twitter cards, JSON-LD structured data, `sitemap.xml`, `robots.txt`, favicons, web manifest.
- **Interaction (mouse users only):** cursor-following light, card tilt, magnetic buttons.
- **Custom 404 page.**
- **Performance:** self-hosted fonts with the main two preloaded, no external requests, lazy-loaded images.

## Project structure

```
src/
  app.css                  Tailwind v4 config (@theme: colours, fonts), light/dark tokens
  app.html                 HTML shell + no-flash theme script
  lib/
    content.js             All editable copy, skills, services, projects, settings
    case-studies.js        Detailed case studies (challenge, stack breakdown, features)
    actions/               reveal, spotlight, tilt, magnetic (Svelte actions)
    utils/motion.js        reduced-motion / pointer helpers
    components/            Navbar, ThemeToggle, Hero, StackDiagram, TrustStrip, About,
                           Skills, Services, Process, Projects, ProjectCover/Art,
                           Testimonials, Contact, ContactForm, Footer
  routes/
    +layout.js             prerender + trailing slashes
    +layout.svelte         Page shell, SEO tags, JSON-LD, analytics hook
    +page.svelte           Home page
    work/[slug]/           Case-study pages
    +error.svelte          404 / error page
    sitemap.xml/, robots.txt/   Generated at build time from content.js
static/                    favicons, og-image.png, resume.pdf, site.webmanifest
vite.config.js             Tailwind plugin + SvelteKit config + static adapter
```

Notes for SvelteKit 3: configuration lives in `vite.config.js` (there is no `svelte.config.js`), and the `$lib` alias is now `#lib` (mapped in `package.json` under `imports`). Tailwind v4 is configured in CSS (`src/app.css`), not in a `tailwind.config.js`.

## Accessibility and motion

Semantic landmarks, a skip link, keyboard-navigable menu (Escape closes it), visible focus rings, labelled and validated form fields, AA-contrast colours in both themes, and full `prefers-reduced-motion` support: animations and pointer effects are disabled and nothing is ever left hidden. Content is also fully visible with JavaScript off. Automated checks (axe-core in both themes, Lighthouse) pass with no violations.

## Deploy to Seenode (static site)

1. Push this project to a GitHub or GitLab repository.
2. In the Seenode dashboard choose **Create new → Static site** and connect the repository and branch.
3. Set the build settings:
   - **Language / build container:** leave on the default (Node 22)
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `build`
   - **Client-side routing (SPA):** leave on (default); every page, including `/work/...`, is also a real file
4. Create the site and watch the **Logs** until the build finishes. It is then live at a `*.seenode.app` URL with HTTPS.
5. Optional: add your own domain in the **Domains** tab, and turn on auto-deploy in **Settings** to rebuild on every push.
6. **Set `site.url` in `src/lib/content.js` to your final URL and push again.** The canonical links, social previews, sitemap and structured data all use it.

Static sites on Seenode are currently in Beta. Environment variables are build-time only, and the site has no server runtime, which suits this project. With "Client-side routing" on, unknown URLs show the home page instead of the 404 page; turn it off when creating the site if you prefer a real 404.

## CI/CD with GitHub

- `.github/workflows/ci.yml` runs on every pull request and every push to `main`: clean install (`npm ci`), production build, a check that the key files exist (home page, sitemap, robots, 404), and a dependency audit.
- `.github/dependabot.yml` opens weekly pull requests for dependency updates, so they go through the same checks.
- Deployment is done by Seenode: it rebuilds and publishes the `main` branch when auto-deploy is on. Protect `main` on GitHub (require a pull request and the passing "Build and verify" check) so only verified code is ever deployed.

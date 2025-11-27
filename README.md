# Personal Website Starter

This is a small, responsive personal website starter you can modify to showcase yourself, your projects, and contact info.

## What’s included

- `index.html` — single page layout with sections for About, Projects, and Contact.
- `assets/styles/styles.css` — simple responsive styles.
- `assets/scripts/script.js` — tiny JS to handle the current year and mobile nav toggle.
- `assets/images/` — place your photos or images here.
	- I added three placeholder project images and a profile SVG (in `assets/images/`).

## How to customize

- Edit your name and bio in `index.html`.
- Replace the `placeholder-photo` with an actual photo: place `profile.jpg` in `assets/images/` and update the `index.html` markup.
- Add or update projects in the Projects section.
- Update social links in the Contact section.

## Run locally (PowerShell)

If you have Python installed, run a local server from the website folder:

```powershell
cd "c:\Users\Gauri Chile\OneDrive\Pictures\Screenshots\website"
python -m http.server 8000
# open http://localhost:8000 in your browser
```

If you have Node.js installed, you can use `serve`:

```powershell
npm install -g serve
serve .
```

## Deploy (GitHub Pages)

1. Create a new GitHub repository and push the website files.
2. In your repo settings, choose **Pages** and select the `main` branch (or `gh-pages`) and root (or `docs` if you prefer).
3. Save; your site will be published on `https://<username>.github.io/<repo>`.

For automatic deployments via GitHub Actions, consider adding a `gh-pages` workflow or use the `peaceiris/actions-gh-pages` action.

## Contact Form (Formspree)

I've added a contact form to the Contact section of `index.html` that posts to Formspree. To enable it:

1. Create a free Formspree account at https://formspree.io and create a form to get your form endpoint ID (e.g., `https://formspree.io/f/mnqzapry`).
2. Replace the `action` attribute in the form in `index.html` with your form's action URL.
3. Optionally, keep the form-submission JS (in `assets/scripts/script.js`) which will display a success or error message after sending.

Notes:
- The form will still work as a normal POST if you change the `action` attribute to any server or endpoint that handles POST requests.
- If you're deploying to GitHub Pages, Formspree works well for static sites; if you plan to use Netlify and want to use Netlify Forms, deploy to Netlify instead.

## Projects / Samples

The project cards in the Projects section use placeholder images and `#` links. To customize:

1. Replace the placeholder image in `assets/images/` (e.g. `project1.svg`) with your own preview image. Keep the filename or update the `src` attribute on the `<img>`.
2. Update the project title, description, stack, and `Live demo` / `Repo` links in `index.html` to point to your live site or GitHub repo.
3. If you want a separate project details page, create a new HTML file and update the `href` for the project.

Tip: Keep thumbnails under 200–300 KB for fast load times; SVG is a great lightweight option for simple placeholders.

### Testing the form locally

1. Serve the site locally and open the contact page (see 'Run locally' above).
2. The form will `POST` to the `action` URL — to test quickly, use the form action provided by Formspree after you create a form.
3. When submitting, you should see a success or error message in the status area of the form. If using the JS-enabled handler, it will display a message about configuration if the default placeholder action is still present.

Tip: If the form doesn't post, check the browser console for CORS/network errors and ensure the `action` URL is correct.


### GitHub Actions (Optional)

I included a simple workflow at `.github/workflows/deploy.yml` which will automatically publish the repository root to GitHub Pages whenever you push to the `main` branch. Make sure your repo settings allow Pages to be built from `gh-pages` or `github-actions` if you prefer a branch workflow.

## Next steps & ideas

- Add a dedicated Projects page and project detail pages.
- Add a contact form (requires a server or 3rd-party service like Formspree).
- Convert to a static site generator (Jekyll/Hugo/Next, etc.) if you plan to maintain many posts.

If you’d like, I can:

- Convert this to a multi-page site
- Add a theme or CSS framework (Bootstrap/Tailwind)
- Add a deploy action to GitHub Actions that uses `gh-pages`

### Quick Git setup and push example

```powershell
cd "c:\Users\Gauri Chile\OneDrive\Pictures\Screenshots\website"
git init
git add .
git commit -m "chore: initial personal website"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

Replace `<username>` and `<repo>` with the appropriate values for your GitHub repository.

Tell me how you'd like it customized, and I’ll update the site accordingly!
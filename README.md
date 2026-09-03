# Sarvam Pipes - Official Website

A modern, high-performance corporate web application for **Sarvam Pipes** (MIDC Chakan, Pune), showcasing uPVC, CPVC, SWR, Casing, and Agricultural piping systems, interactive RFQ quotation engine, and pipe engineering calculators.

---

## 🚀 Deployment to GitHub Pages

This project is pre-configured to deploy seamlessly to GitHub Pages using either **GitHub Actions (recommended)** or the **`gh-pages` CLI command**.

### Option 1: Automatic Deployment via GitHub Actions (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Sarvam Pipes website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. **Enable GitHub Pages in your Repository Settings**:
   - Go to your repository on **GitHub**.
   - Click on **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, select **`GitHub Actions`**.
   - That's it! The workflow in `.github/workflows/deploy.yml` will automatically build and publish your site at:
     `https://<your-username>.github.io/<your-repo-name>/`

---

### Option 2: Manual Deployment via `gh-pages` CLI

If you prefer to deploy directly from your local terminal:

1. In `package.json`, optionally add your homepage URL:
   ```json
   "homepage": "https://<your-username>.github.io/<your-repo-name>"
   ```
2. Run:
   ```bash
   npm run deploy
   ```
3. In your GitHub repository settings under **Pages**, ensure the branch is set to **`gh-pages`** and folder to **`/(root)`**.

---

## 🛠️ Local Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

---

## 📁 Key Configurations Included for GitHub Pages

- **`vite.config.ts`**: Configured with `base: './'` so that asset URLs (CSS, JavaScript, images) resolve properly whether hosted on a custom domain, root domain, or a repository subpath on GitHub Pages.
- **`.github/workflows/deploy.yml`**: Pre-configured GitHub Actions deployment pipeline that triggers on push to `main` or `master`.
- **`package.json`**: Pre-installed `gh-pages` dependency and added `predeploy` / `deploy` scripts.

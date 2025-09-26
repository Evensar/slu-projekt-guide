# SLU Projektkontor - Interaktiv Projektguide

En interaktiv webbapplikation som hjälper användare att lära sig om projektkontorets stöd på SLU genom ett spelbaserat lärande.

## Projektinfo

**GitHub Pages URL**: https://[ditt-användarnamn].github.io/slu-projekt-guide/

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/9fdfff8d-3041-463a-aa96-f535a3266afa) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Hur man deployar till GitHub Pages

### Automatisk deployment
Projektet är konfigurerat för automatisk deployment via GitHub Actions. När du pushar till `main` branchen kommer appen automatiskt att byggas och deployas till GitHub Pages.

### Manuell deployment
Du kan också deploya manuellt:

```sh
# Installera dependencies
npm install

# Bygg projektet
npm run build

# Deploya till GitHub Pages
npm run deploy
```

### Konfigurera GitHub Pages
1. Gå till ditt repository på GitHub
2. Klicka på "Settings" → "Pages"
3. Under "Source", välj "GitHub Actions"
4. Appen kommer att vara tillgänglig på `https://[ditt-användarnamn].github.io/slu-projekt-guide/`

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

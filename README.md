# DevFinder

Discover GitHub users with a clean, fast React + Vite app. Search by username, view profile details, and jump to followers, following, and repositories.

## Features
- GitHub user search with loading and error states
- Profile card: avatar, name, username, bio, location
- Quick links: followers, following, repositories
- Copy-to-clipboard for username and email
- Dark/light theme toggle (persisted in localStorage)
- Responsive UI built with Tailwind CSS v4
- Client-side routing with a shared layout

## Tech Stack
- React 19 + Vite 7
- React Router 7
- Tailwind CSS v4 (@tailwindcss/vite)
- Axios
- Lucide Icons

## Project Structure
```
.env.local
.gitignore
eslint.config.js
index.html
package.json
vite.config.js
public/
src/
  App.jsx
  index.css
  main.jsx
  components/
    common/ThemeToggle.jsx
    layout/{Footer.jsx,Layout.jsx,NavBar.jsx}
    search/SearchForm.jsx
    ui/{Button.jsx,Card.jsx,Spinner.jsx}
    user/{UserProfileCard.jsx,UserSocialLinks.jsx,UserStats.jsx}
  hooks/useGithubUser.js
  pages/{HomePage.jsx,NotFound.jsx,SavedProfilesPage.jsx,SavedSearchesPage.jsx,SearchPage.jsx,SettingsPage.jsx}
  services/github.js
  utils/api.js
```

## Getting Started

Prerequisites:
- Node.js 18+ and npm

Install and run:
```sh
npm install
npm run dev
```
Build and preview:
```sh
npm run build
npm run preview
```

## Environment Variables
Create a `.env.local` in the project root:
```
VITE_GITHUB_TOKEN=your_github_token_here   # optional but recommended
```
Notes:
- Unauthenticated GitHub API calls are rate-limited. Supplying a token increases limits.
- The token is sent as a bearer token in [`GithubService.getUser`](src/services/github.js).

## Available Scripts
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run lint` — run ESLint

## Key Files
- Routing and layout:
  - [`App`](src/App.jsx)
  - [`Layout`](src/components/layout/Layout.jsx)
  - [`NavBar`](src/components/layout/NavBar.jsx), [`Footer`](src/components/layout/Footer.jsx)

- Pages:
  - [`HomePage`](src/pages/HomePage.jsx)
  - [`SearchPage`](src/pages/SearchPage.jsx)
  - [`SavedProfilesPage`](src/pages/SavedProfilesPage.jsx)
  - [`SavedSearchesPage`](src/pages/SavedSearchesPage.jsx)
  - [`SettingsPage`](src/pages/SettingsPage.jsx)
  - [`NotFound`](src/pages/NotFound.jsx)

- Search flow:
  - Hook: [`useGithubUser`](src/hooks/useGithubUser.js)
  - API wrapper: [`fetchGitHubUser`](src/utils/api.js)
  - Service: [`GithubService.getUser`](src/services/github.js)
  - UI: [`SearchForm`](src/components/search/SearchForm.jsx), [`UserProfileCard`](src/components/user/UserProfileCard.jsx), [`UserStats`](src/components/user/UserStats.jsx), [`UserSocialLinks`](src/components/user/UserSocialLinks.jsx)

- UI primitives:
  - [`Button`](src/components/ui/Button.jsx), [`Card`](src/components/ui/Card.jsx), [`Spinner`](src/components/ui/Spinner.jsx)
  - Theme: [`ThemeToggle`](src/components/common/ThemeToggle.jsx)

- Styling and tooling:
  - Tailwind setup: [src/index.css](src/index.css)
  - Vite config and alias @ -> src: [vite.config.js](vite.config.js)
  - App entry: [index.html](index.html), [src/main.jsx](src/main.jsx)
  - Package scripts: [package.json](package.json)

## Notes
- External links open in new tabs where applicable.
- The path alias `@` resolves to `src/` as configured in [vite.config.js](vite.config.js).

## License
MIT

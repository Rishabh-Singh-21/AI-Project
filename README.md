# Modern Animated Portfolio (React + Node.js)

A fully working personal portfolio website using **HTML, CSS, JavaScript, Bootstrap, React, and Node.js**.

## Features

- Modern glassmorphism UI with smooth animations
- Rotating animated role heading
- Dynamic portfolio data served from a Node.js API
- Sections for:
  - Profile / About
  - Skills
  - Projects
  - LeetCode + GitHub + LinkedIn + Email links
  - Achievements
- Easy content editing from one JSON file

## Project Structure

```txt
.
├─ client/                 # React + Bootstrap frontend
├─ server/                 # Node + Express backend API
├─ data/
│  └─ portfolioData.json   # Edit this file to update portfolio content
└─ package.json            # workspace scripts
```

## How to customize with your resume

Edit this file:

- `data/portfolioData.json`

Update fields like:

- `profile.name`, `profile.role`, `profile.about`
- `projects[]`
- `profiles.github`, `profiles.leetcode`
- `skills[]`, `achievements[]`

## Run locally

```bash
npm install
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000/api/portfolio

## Production build

```bash
npm run build
npm run start
```

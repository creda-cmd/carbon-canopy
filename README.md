# CarbonCanopy Solutions

> **Restoring Landscapes. Creating Carbon Value. Empowering Communities.**

Official website for **CarbonCanopy Solutions** — a professional carbon, forestry, agroforestry, and
climate-smart consultancy. Built with **React + Vite + Tailwind CSS** on the front end and a
**Node.js + Express** API on the back end.

## Tech stack

| Layer    | Technology                                   |
| -------- | -------------------------------------------- |
| Frontend | React 19, Vite, React Router, Tailwind CSS 3 |
| Backend  | Node.js, Express 5                           |
| Tooling  | ESLint, Nodemon, Concurrently                |

## Pages

- **Home** – brand intro, services overview, approach, standards, values
- **About Us** – vision, mission, motto, 10 core values, taglines
- **Our Services** – overview of the four service areas
- **Carbon Projects** – full carbon development capability (A–O) + carbon standards
- **Forestry & Landscaping** – seed/seedling supply, nurseries, restoration, landscaping
- **Agroforestry** – design, fruit & agroforestry tree production, IPM, training, species
- **Projects Portfolio** – project lifecycle services, sectors served, showcase
- **Contact Us** – contact details + working contact form (posts to the API)

## Project structure

```
carboncanopy-solutions/
├── client/            # React + Vite + Tailwind frontend
│   ├── public/img/    # logo, favicon & SVG illustrations
│   └── src/
│       ├── components/ # Navbar, Footer, Icon, Reveal, CTABand, …
│       ├── data/site.js # all site content (services, values, etc.)
│       ├── hooks/      # useSeo
│       └── pages/      # one component per route
├── server/            # Node.js + Express API
│   └── index.js       # /api/health, /api/company, /api/contact
└── package.json       # root scripts (run client + server together)
```

## Getting started

```bash
# 1. Install all dependencies (root, client, server)
npm run install:all

# 2. Run client + server together (client on :5173, API on :5000)
npm run dev
```

Then open <http://localhost:5173>. The Vite dev server proxies `/api/*` to the Express server.

### Other scripts

```bash
npm run dev:client   # frontend only
npm run dev:server   # API only
npm run build        # production build of the frontend (client/dist)
npm start            # run the API (serves client/dist if it exists)
npm run lint         # lint the frontend
```

## API endpoints

| Method | Endpoint        | Description                                  |
| ------ | --------------- | -------------------------------------------- |
| GET    | `/api/health`   | Service health check                         |
| GET    | `/api/company`  | Basic company contact info                   |
| POST   | `/api/contact`  | Submit a contact enquiry (name, email, msg)  |

Contact submissions are validated and appended to `server/data/messages.json`.

## Contact

📞 0705686479 · 0100635001  
📧 carboncanopy@hotmail.com

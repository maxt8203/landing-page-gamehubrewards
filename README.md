# GamerHub Rewards – Landing Page

A one-page landing site for **GamerHub Rewards**, a concept for a multiplayer gaming platform where players compete for money. University project turned startup idea.

Visitors read the pitch and leave their email to be notified at launch.

## What it does

- Hero page with the logo, a short pitch and a "Notify Me" sign-up form
- Saves each email to a MongoDB database and rejects duplicates

## Tech

Node.js, Express, Handlebars, MongoDB (Mongoose), SCSS, Babel

## Run it

```bash
npm install
```

Create a `.env` file in the project root with your own MongoDB connection string:

```
MONGODB_URI=your_connection_string
```

Then start the server and open http://localhost:3000:

```bash
npm run dev
```

## Structure

- `index.js`, `app.js` – server setup
- `routes/` – the home page and the sign-up route
- `models/Dates.js` – email schema
- `views/` – Handlebars templates
- `public/` – styles, scripts and images

## Credits

Built on the open-source **Ellie** landing page template by Pasquale Vitiello, licensed under GPL-3.0 (see `public/LICENSE`).

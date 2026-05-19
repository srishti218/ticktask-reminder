# TickTask Reminder

A React + Vite landing site for **TickTask Reminder**, a smart task, checklist, and reminder app.

## Overview

This project is a marketing/landing website for the TickTask Reminder product. It includes a homepage plus supporting informational pages such as privacy, terms, contact, onboarding, and product detail pages.

## Tech Stack

- React 18
- Vite 5
- React Router
- Plain CSS

## Available Pages

- `/` - Landing page
- `/learn-more` - Product details
- `/how-it-works` - Product workflow overview
- `/get-started` - Getting started page
- `/contact` - Contact page
- `/privacy` - Privacy policy
- `/terms` - Terms of service

## Project Structure

```text
src/
  components/    Reusable UI sections
  config/        SEO and shared configuration
  pages/         Route-level page components
  styles/        Global and theme styles
public/          Static assets like robots.txt and sitemap.xml
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

## SEO

Basic SEO metadata is configured in [`src/config/seo.js`](/Users/srishtisingh/Desktop/ticktask-reminder/src/config/seo.js). The project also includes `robots.txt` and `sitemap.xml` in [`public`](/Users/srishtisingh/Desktop/ticktask-reminder/public).

## Preview

![TickTask Reminder preview](/Users/srishtisingh/Desktop/ticktask-reminder/app.png)

## License

MIT

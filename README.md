# DevHriday Portfolio

This project is a personal portfolio website built with Next.js. It showcases professional work, technical skills, blog content, and contact options in a modern animated interface with dark and light theme support across key pages.

## Overview

The portfolio is designed to present:

- a landing page with hero, services, skills, and featured work
- an About page with expertise and skill progress sections
- a Projects page with external project links and tech stacks
- a Blogs page with individual blog detail routes
- a Contact page with an inquiry form backed by an API route and Prisma

## Tech Stack

- Next.js 15
- React 19
- Tailwind CSS
- Framer Motion
- Prisma
- MySQL
- shadcn/ui
- Tabler Icons

## Main Pages

- `/` : home page for portfolio introduction
- `/about` : profile, expertise, and skill highlights
- `/project` : project showcase with live links
- `/blogs` : blog listing page
- `/blogs/[slug]` : single blog detail page
- `/contact` : contact form and inquiry section

## Features

- responsive portfolio layout
- dark and light mode on major pages
- animated sections and interactive cards
- dynamic blog detail routing by slug
- project cards with live website links
- contact form API with validation and rate limiting
- debug API with basic rate limiting and input size protection

## Project Structure

```bash
app/
  about/
  api/
  blogs/
  contact/
  project/
  Components/
  Routes/
components/
  ui/
data/
  blogs.js
lib/
prisma/
public/
```

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Environment Variables

Create a local `.env` file based on `.env.example`.

Typical values may include:

```bash
GEMINI_API_KEY=your_key_here
GEMINI_MODEL=gemini-2.5-flash-lite
DATABASE_URL=your_database_url_here
```

## Portfolio Purpose

This website is meant to represent DevHriday as a full-stack developer by highlighting:

- frontend development with React, Next.js, and Tailwind CSS
- backend and database work with Laravel, Node.js, Prisma, and MySQL
- UI animation and interaction using Framer Motion and GSAP-inspired design patterns
- real client and business-oriented web projects

## Notes

- blog content is currently stored locally in `data/blogs.js`
- contact form submissions are saved through Prisma
- API routes include basic protections for safer public hosting

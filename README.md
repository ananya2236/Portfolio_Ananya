# Ananya Singh - Developer Portfolio

A premium, dark-themed developer portfolio built with **React**, **Tailwind CSS**, and **Framer Motion**. This project showcases skills, projects, and the professional journey of Ananya Singh, a Full-Stack Developer and AI/ML Enthusiast.

## 🚀 Project Overview

*   **Theme:** Deep slate dark mode with Cyan/Blue accents.
*   **Design Philosophy:** Minimalist, engineering-focused, and motion-rich.
*   **Key Features:**
    *   Dynamic rotating role text.
    *   Infinite scrolling tech stack marquee.
    *   Horizontal "journey" timeline.
    *   Interactive project cards with conditional links.
    *   Custom cursor with glow effects.

## 🛠 Tech Stack

*   **Frontend Framework:** React (Vite)
*   **Styling:** Tailwind CSS
*   **Animations:** Framer Motion
*   **Icons:** Lucide React, React Icons
*   **Fonts:** Space Grotesk (Headings), Inter (Body)

## 📂 Project Structure

```
src/
├── components/
│   ├── Hero.jsx        # Landing section with rotating text
│   ├── TechStack.jsx   # Infinite scroll skills marquee
│   ├── About.jsx       # Bio, Skills, Education
│   ├── Timeline.jsx    # Horizontal journey scroll
│   ├── Projects.jsx    # Project grid with data logic
│   ├── Contact.jsx     # Contact form & social links
│   └── Navbar.jsx      # Sticky navigation
├── App.jsx             # Main layout & Custom Cursor logic
└── index.css           # Global styles & Tailwind imports
```

## ✨ Key Features & Logic

### 1. Animations
*   **Scroll Reveal:** All sections fade in (`opacity: 0` -> `1`) and slide up (`y: 20` -> `0`) using `framer-motion`'s `whileInView`.
*   **Custom Cursor:** A glowing blue ring follows the mouse pointer (Desktop only).
*   **Gradient Flow:** Headings feature a `animate-gradient-x` class that moves a background gradient from left to right.

### 2. Component Logic
*   **Hero:** Uses `setInterval` to rotate through roles: "Software Developer" -> "Full-Stack Developer", etc.
*   **Projects:** Automatically hides "Live Demo" buttons if no link is provided in the data array.
*   **Contact:**
    *   **Email:** Redirects directly to Gmail compose view.
    *   **Phone:** Copies number to clipboard and shows a temporary "Copied!" badge.

### 3. Responsiveness
*   Fully responsive grid layout.
*   Mobile-optimized text sizes.
*   Horizontal scrolling enabled for Timeline on smaller screens.
*   Custom cursor disabled on touch devices to prevent UI lag.



© 2026 Ananya Singh. Built with React.

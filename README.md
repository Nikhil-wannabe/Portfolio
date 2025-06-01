# Interactive Personal Portfolio - Nikhil Bramhandam

This is a highly creative and interactive personal portfolio website for Nikhil Bramhandam, an Applied AI Engineer.
It aims to be more of an experience than a static webpage, showcasing skills and flagship projects through immersive design and interactions.

The portfolio is built with a focus on futuristic and elegant UI/UX, incorporating parallax effects, scroll-driven animations, micro-interactions, and interactive 3D objects.



## Tech Stack

This project leverages a modern, creative front-end stack:

*   **Framework:** [Next.js](https://nextjs.org/) (v13+ with App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animation:** [Framer Motion](https://www.framer.com/motion/)
*   **3D Graphics:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) & [Drei](https://github.com/pmndrs/drei) (for Three.js integration in React)
*   **Theming:** [next-themes](https://github.com/pacocoursey/next-themes) (for Dark/Light mode)
*   **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (for social media and UI icons), [@heroicons/react](https://heroicons.com/)
*   **Version Control:** Git & GitHub
*   **CI/CD:** GitHub Actions (for build checks)
*   **Deployment (Planned):** Vercel



## Project Structure

The project follows the standard Next.js App Router structure:

\`\`\`
portfolio-nextjs/
├── .github/              # GitHub Actions workflows (CI)
│   └── workflows/
│       └── ci-build-check.yml
├── .gitignore
├── next-env.d.ts
├── next.config.mjs       # Next.js configuration
├── package.json
├── package-lock.json
├── postcss.config.js     # PostCSS configuration (for Tailwind)
├── README.md             # This file
├── src/
│   ├── app/              # Main application folder (App Router)
│   │   ├── components/   # Reusable React components
│   │   │   ├── AboutMe.tsx
│   │   │   ├── AnimatedCursor.tsx
│   │   │   ├── ContactSocials.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Interactive3DObject.tsx
│   │   │   ├── MagnaOpera.tsx
│   │   │   ├── MitraOsVisual.tsx
│   │   │   ├── ThemeProvider.tsx
│   │   │   └── ThemeToggleButton.tsx
│   │   ├── globals.css   # Global styles (Tailwind base, components, utilities)
│   │   ├── layout.tsx    # Root layout component
│   │   └── page.tsx      # Homepage component (maps to /)
│   └── ...               # Other potential source files (e.g., lib, hooks)
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
\`\`\`

Key directories and files:

*   **`src/app/`**: Contains all the pages, layouts, and components for the application using the Next.js App Router.
    *   **`src/app/components/`**: Houses all the custom React components used across different sections of the portfolio (e.g., `Hero.tsx`, `AboutMe.tsx`, `Interactive3DObject.tsx`).
    *   **`src/app/page.tsx`**: The main entry point for the homepage content, where different sections/components are assembled.
    *   **`src/app/layout.tsx`**: The root layout for the application, including HTML structure, theme providers, and global components like the animated cursor and theme toggle.
*   **`public/`**: (Not explicitly shown but standard) For static assets like images or 3D models (if not served from elsewhere).
*   **Configuration Files**: Standard Next.js, TypeScript, and Tailwind CSS config files (`next.config.mjs`, `tsconfig.json`, `tailwind.config.ts`).



## Available Scripts

In the project directory, you can run the following commands:

*   **`npm run dev`**
    Runs the app in development mode.
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
    The page will reload if you make edits.

*   **`npm run build`**
    Builds the app for production to the `.next` folder.
    It correctly bundles React in production mode and optimizes the build for the best performance.

*   **`npm run start`**
    Starts the production server after a build has been completed with `npm run build`.

*   **`npm run lint`**
    Runs ESLint to check for code quality and style issues.

## Setup and Installation

To get a local copy up and running, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/NikhilBramhandam/Portfolio-NextJS-tailwind.git # Replace with your actual repo URL if different
    cd Portfolio-NextJS-tailwind # Replace with your repository directory name
    ```

2.  **Install NPM packages:**
    This project uses Node.js and npm for dependency management. Dependencies are listed in the `package.json` file.
    Make sure you have Node.js and npm installed. Then run:
    ```bash
    npm install
    ```
    This command installs all the necessary dependencies.

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the development server, usually on `http://localhost:3000`.

4.  Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Key Features Implemented

This portfolio currently boasts the following features, contributing to an interactive and modern user experience:

*   **Responsive Design:** Ensures adaptability across various screen sizes, from mobile to desktop, using Tailwind CSS.
*   **Interactive Hero Section:**
    *   Features an animated greeting and tagline.
    *   Integrates an interactive 3D object (TorusKnot) using React Three Fiber & Drei, with rotation and hover effects.
*   **Parallax Scrolling:** Implemented in the Hero and About Me sections to create a sense of depth and engaging scroll-driven animations using Framer Motion.
*   **Dark/Light Mode:** A theme toggle allows users to switch between dark and light modes, with styles managed by `next-themes` and Tailwind's dark mode variants.
*   **Animated Custom Cursor:** A custom cursor (for desktop users) enhances the futuristic feel, changing appearance on hover over interactive elements.
*   **Detailed Project Showcase (Magna Opera):**
    *   Placeholders for flagship projects.
    *   A custom animated terminal-like visual for the "MITRA OS" project.
    *   Hover effects on project cards for improved interactivity.
*   **Comprehensive Sections:**
    *   **About Me:** Displays personal information, interests, and a skills snapshot.
    *   **Contact + Socials:** Includes links to social media profiles and a client-side validated contact form.
*   **Modern Tech Stack:** Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion for a performant and maintainable codebase.
*   **Continuous Integration:** A GitHub Actions workflow is set up to check the build on every push and pull request to the main branch.
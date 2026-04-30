# Henry Dave Tacuyan - Portfolio

## About
This is my personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. It showcases my projects, skills, and contact information.

## Technologies Used
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React 18

## Setup Instructions

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/HolySagittarius/tacuyan-my-portfolio.git
```

2. Navigate to project folder
```bash
cd tacuyan-my-portfolio
```

3. Install dependencies
```bash
npm install
```

4. Run development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the site

### Build for Production
```bash
npm run build
npm start
```

## Project Structure
```
tacuyan-my-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with Header & Footer
│   │   ├── page.tsx        # Homepage with all sections
│   │   └── globals.css     # Global styles & Tailwind
│   ├── components/
│   │   ├── layout/         # Header, Footer, Navigation
│   │   ├── sections/       # Hero, About, Projects, Contact
│   │   └── ui/             # Button, Card (reusable)
│   └── lib/
│       └── types.ts        # TypeScript interfaces
├── public/
│   └── images/             # Profile and project images
└── package.json
```

## Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation
- ✅ Contact form with validation
- ✅ Project cards with GitHub & live demo links
- ✅ Sticky header with scroll effects
- ✅ Mobile hamburger menu
- ✅ TypeScript type safety
- ✅ Tailwind CSS styling

## Components

### UI Components
- **Button** – Reusable button with primary/outline variants
- **Card** – Displays project information with image, tech badges, and links

### Layout Components
- **Navigation** – Sticky header with responsive mobile menu
- **Footer** – Social links, copyright, and contact email

### Section Components
- **Hero** – Introduction and call-to-action buttons
- **About** – Personal bio and skills list
- **Projects** – Grid layout showing project cards
- **Contact** – Form with validation and contact info

## Live Demo
[View Live Portfolio](https://tacuyan-my-portfolio.vercel.app)

## Contact Information
- **Email:** herohenrydaveb.tacuyan@gmail.com
- **Phone:** +63 918 681 4217
- **GitHub:** [@HolySagittarius](https://github.com/HolySagittarius)
- **Vercel:** [holysagittarius](https://vercel.com/holysagittarius)

## Deployment
This project is deployed on Vercel. Any push to the main branch automatically triggers a new deployment.

## Credits
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)

## License
This project is for educational purposes as part of the Rich Internet Application Development course at Central Philippine University.

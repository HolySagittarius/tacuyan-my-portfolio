# Component Architecture Documentation

## Folder Structure
- **src/components/layout/** - Header, Footer, Navigation (appear on every page)
- **src/components/sections/** - Hero, About, Projects, Contact (page content)
- **src/components/ui/** - Button, Card (reusable components)
- **src/lib/** - TypeScript type definitions

## Key Decisions

### Button Component
Made reusable with variants (primary/outline) so it can be used for both "View Projects" and "Contact Me" buttons with different styles.

### Card Component
Created separately to display projects consistently. Accepts Project type as prop to show title, description, technologies, and links.

### Navigation
Used 'use client' because it needs useState for mobile menu and useEffect for scroll effects. Made sticky with background change on scroll.

### TypeScript
All props have proper types defined in src/lib/types.ts to prevent errors.

## Why This Structure
- Separates concerns (layout vs sections vs UI)
- Makes components reusable
- Easy to find and edit specific parts
- Follows Next.js best practices# Component Architecture Documentation

## Folder Structure
- **src/components/layout/** - Header, Footer, Navigation (appear on every page)
- **src/components/sections/** - Hero, About, Projects, Contact (page content)
- **src/components/ui/** - Button, Card (reusable components)
- **src/lib/** - TypeScript type definitions

## Key Decisions

### Button Component
Made reusable with variants (primary/outline) so it can be used for both "View Projects" and "Contact Me" buttons with different styles.

### Card Component
Created separately to display projects consistently. Accepts Project type as prop to show title, description, technologies, and links.

### Navigation
Used 'use client' because it needs useState for mobile menu and useEffect for scroll effects. Made sticky with background change on scroll.

### TypeScript
All props have proper types defined in src/lib/types.ts to prevent errors.

## Why This Structure
- Separates concerns (layout vs sections vs UI)
- Makes components reusable
- Easy to find and edit specific parts
- Follows Next.js best practices
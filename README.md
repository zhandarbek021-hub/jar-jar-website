# Jar Jar Residence - Premium Real Estate Landing Page

A modern, premium real estate landing page built with Next.js 14, React, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Fully Responsive Design**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Powered by Framer Motion for elegant transitions
- **Interactive Components**:
  - Sticky navigation with mobile menu
  - Parallax hero section
  - Tab-based apartment plans viewer
  - Lightbox image gallery
  - Form validation for contact form
  - Animated timeline for construction progress
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Modern UI/UX**: Premium design with glassmorphism effects and smooth scrolling

## 📁 Project Structure

```
jar-jar-residence/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page combining all sections
│   ├── loading.tsx         # Loading state component
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── navigation/
│   │   └── Navbar.tsx      # Navigation component with mobile menu
│   └── sections/
│       ├── Hero.tsx        # Hero section with parallax
│       ├── About.tsx       # About project section
│       ├── Location.tsx    # Location with map illustration
│       ├── Advantages.tsx  # Feature cards grid
│       ├── Apartments.tsx  # Apartment plans with tabs
│       ├── Gallery.tsx     # Photo gallery with lightbox
│       ├── Infrastructure.tsx # Lifestyle section
│       ├── Construction.tsx # Construction timeline
│       ├── Contact.tsx     # Contact form with validation
│       └── Footer.tsx      # Footer with links and info
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Playfair Display (via Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jar-jar-residence
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Building for Production

```bash
npm run build
npm run start
```

## 📝 Configuration

### Tailwind Config

The project uses a custom Tailwind configuration with:
- Custom color palette (primary, gold, dark)
- Custom animations (fade-in, slide-up, float, etc.)
- Extended spacing and font sizes
- Custom shadows and glass effects

### Image Sources

The project uses Unsplash images as placeholders. Replace these with your actual project images:
- Hero background
- Section images
- Apartment floor plans
- Gallery images

Update the image URLs in the respective section components.

## 🎨 Customization

### Branding

To customize the branding:
1. Update the logo and colors in `tailwind.config.ts`
2. Update the company name and contact details in `Footer.tsx`
3. Update the meta information in `app/layout.tsx`

### Content

All content is organized by section in `components/sections/`. Edit each component to update:
- Text content
- Images
- Features
- Contact information

## 🌐 Pages

The landing page includes the following sections:

1. **Hero**: Full-screen hero with parallax effect and CTAs
2. **About**: Project overview with feature highlights
3. **Location**: Interactive map showing nearby amenities
4. **Advantages**: Grid of premium amenities
5. **Apartments**: Tabbed apartment plans with pricing
6. **Gallery**: Masonry grid with lightbox viewer
7. **Infrastructure**: Lifestyle amenities showcase
8. **Construction**: Animated timeline of progress
9. **Contact**: Lead generation form with validation
10. **Footer**: Contact info, links, and social media

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is proprietary and confidential.

## 👥 Support

For support, contact info@jarjarresidence.com

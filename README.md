# Sky.ro - Professional Drone Services Website (Next.js Version)

A modern, immersive website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion, featuring stunning animations and a seamless sky-to-ground scrolling experience.

## 🚀 Features

### Visual Design
- **Seamless Sky Background**: Fixed gradient background from sky blue to white that creates an immersive atmosphere
- **Floating Island Header**: Glassmorphism header with animated blob navigation
- **12 Floating Clouds**: Multi-layered clouds with parallax scrolling at different speeds
- **Transparent Sections**: All content floats on the seamless background

### Animations
- **Drone Fly-In**: Drones fly in from alternating sides (left/right) with rotation and scale effects
- **Drone Fly-Away**: Drones fly away when scrolling out of viewport
- **Popup Details**: Information cards appear with spring animations when drones settle
- **Parallax Effects**: Clouds and logo move at different speeds for depth
- **Smooth Transitions**: All interactions use Framer Motion for fluid animations

### Sections

#### 1. Hero Section
- Floating Sky.ro logo between clouds
- Compelling headline and tagline
- Animated CTA button
- Fully responsive

#### 2. Fleet Section (Extended)
- 3 drones flying in alternately from left and right
- Each drone stays visible longer before flying away
- Detailed specifications in glass cards
- Hover animations on drones

#### 3. Services Section
- 6 service cards with Lucide React icons:
  - 📷 Aerial Photography
  - 🗺️ Surveying & Mapping
  - 🔍 Inspections
  - 🎬 Cinematography
  - 🌾 Agriculture
  - 🚨 Emergency Response
- Staggered fade-in animations
- Glass morphism effects

#### 4. Footer/Contact Section
- Ground PNG image (70vh height)
- Floating liquid glass contact form
- Fully functional form with validation
- Company information

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11.15
- **Icons**: Lucide React 0.468
- **Image Optimization**: Next.js Image component

## 📁 Project Structure

```
skyx/
├── app/
│   ├── components/
│   │   ├── Header.tsx           # Floating island header with blob nav
│   │   ├── CloudLayer.tsx       # 12 parallax clouds
│   │   ├── Hero.tsx             # Hero section with logo
│   │   ├── FleetSection.tsx     # Container for drones
│   │   ├── DroneItem.tsx        # Individual drone with animations
│   │   ├── DroneDetails.tsx     # Popup detail cards
│   │   ├── Services.tsx         # Services grid
│   │   └── Footer.tsx           # Footer with contact form
│   ├── globals.css              # Global styles + Tailwind
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main page
├── public/
│   ├── sky.ro_logo_sig.png
│   ├── m300-rtk_r1.600x600.png
│   ├── footer part.png
│   └── [6 cloud images]
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── next.config.ts
└── package.json
```

## 🎨 Color Scheme

Extracted from Sky.ro logo:
- **Primary Cyan**: `#00B4D8`
- **Light Cyan**: `#90E0EF`
- **Dark Cyan**: `#0077B6`
- **Sky Blue**: `#87CEEB`
- **White**: `#FFFFFF`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Responsive Design

- **Mobile** (< 768px): Stacked layouts, smaller text, adjusted spacing
- **Tablet** (768px - 1024px): Optimized layouts
- **Desktop** (1024px+): Full experience with all animations

## ✨ Key Animations

### Drone Fly-In Animation
```typescript
// Flies in from side with rotation
initial: {
  opacity: 0,
  x: side === 'right' ? 300 : -300,
  y: -100,
  rotate: side === 'right' ? 15 : -15,
  scale: 0.5,
}
```

### Drone Fly-Away Animation
```typescript
// Flies away when leaving viewport
animate: {
  opacity: 0,
  x: side === 'right' ? 300 : -300,
  y: -200,
  rotate: side === 'right' ? 25 : -25,
  scale: 0.3,
}
```

### Blob Navigation
- Smooth morphing between menu items
- Spring animation with custom easing
- Follows active section on scroll

## 🎯 Performance Optimizations

- Next.js Image component for optimized images
- Intersection Observer for scroll-triggered animations
- CSS transforms for GPU-accelerated animations
- Lazy loading for off-screen content
- Optimized cloud rendering with different layers

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states
- Reduced motion support
- Alt text for images

## 🔧 Customization

### Changing Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'sky-cyan': '#00B4D8',
  'sky-light': '#90E0EF',
  'sky-dark': '#0077B6',
}
```

### Adding More Drones
Edit `app/components/FleetSection.tsx` and add to the `drones` array.

### Modifying Animations
Adjust timing in component files or `tailwind.config.js` keyframes.

## 📝 Components API

### DroneItem
```typescript
interface DroneItemProps {
  name: string;
  description: string;
  specs: string[];
  side: 'left' | 'right';
  index: number;
}
```

### DroneDetails
```typescript
interface DroneDetailsProps {
  name: string;
  description: string;
  specs: string[];
  side: 'left' | 'right';
  isVisible: boolean;
}
```

## 🐛 Known Issues

- None currently

## 🚧 Future Enhancements

- [ ] Backend integration for contact form
- [ ] More drone models
- [ ] Portfolio/gallery section
- [ ] Video backgrounds
- [ ] Multi-language support
- [ ] Blog section
- [ ] Client testimonials

## 📄 License

This project is created for Sky.ro - Professional Drone Services.

## 🤝 Credits

- **Design & Development**: Modern web technologies
- **Images**: Cloud PNGs, drone images, footer image
- **Logo**: Sky.ro official logo
- **Icons**: Lucide React

---

**Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Framer Motion**

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/docs/)

## 📞 Support

For issues or questions, please contact the development team.
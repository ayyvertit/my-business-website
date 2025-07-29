# Crystal Coast Concierge Massage

A modern, luxurious website for Crystal Coast Concierge Massage - a premium mobile massage service serving North Carolina's Crystal Coast region.

## 🌊 Features

### **Modern Design System**
- **Luxury Color Palette**: Ocean-inspired colors with deep tide, sea glass, and coral blush
- **Typography**: Playfair Display for headings, Lato for body text
- **Responsive Design**: Mobile-first approach with perfect scaling
- **Dark Mode**: Full theme support with smooth transitions

### **Interactive Elements**
- **Animated Waves**: SVG-based ocean wave animations
- **Smooth Transitions**: Framer Motion animations throughout
- **Hover Effects**: Micro-interactions for enhanced UX
- **Scroll Animations**: Staggered reveal effects

### **Professional Sections**
- **Hero Section**: Full-height with animated background
- **Services**: 6 massage service cards with descriptions
- **Testimonials**: Customer reviews with locations
- **Service Area**: 8 Crystal Coast locations
- **Booking CTA**: Gradient call-to-action section

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom design tokens
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI
- **Fonts**: Google Fonts (Playfair Display, Lato)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/crystal-coast-concierge-massage.git
   cd crystal-coast-concierge-massage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── booking/           # Booking page
│   ├── service-area/      # Service area page
│   ├── services/          # Services page
│   ├── testimonials/      # Testimonials page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── animations/        # Animation components
│   ├── marketing/         # Marketing components
│   └── ui/               # UI components
├── lib/                  # Utility functions
├── styles/               # Design tokens
└── types/                # TypeScript types
```

## 🎨 Design System

### **Color Palette**
```css
--white-sand: #FDF6F0
--ocean-foam: #E7F3F4
--coastal-mist: #B9D6D4
--sea-glass: #7FCAC5
--coral-blush: #F7B6A6
--deep-tide: #285A6F
```

### **Typography**
- **Headings**: Playfair Display (serif)
- **Body Text**: Lato (sans-serif)
- **Fluid Typography**: Responsive text sizing

### **Spacing**
- **8px Grid System**: Consistent spacing throughout
- **Responsive Padding**: Adapts to screen size
- **Section Spacing**: Generous vertical breathing room

## 📱 Responsive Design

- **Mobile-First**: Optimized for mobile devices
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible Layouts**: Grid and flexbox for responsive behavior
- **Touch-Friendly**: Proper button sizes and spacing

## ♿ Accessibility

- **Semantic HTML**: Proper heading structure
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Clear focus indicators
- **Reduced Motion**: Respects user preferences

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Custom domain configuration available

### **Netlify**
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Environment variables as needed

### **Manual Deployment**
```bash
npm run build
npm start
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern spa and wellness websites
- **Icons**: Lucide React for beautiful icons
- **Animations**: Framer Motion for smooth interactions
- **Typography**: Google Fonts for beautiful typography

## 📞 Contact

For questions about this project, please contact the development team.

---

**Built with ❤️ for Crystal Coast Concierge Massage** 
# Business Review Collector Page

A mobile-optimized, brand-ready review collector page built with React, Vite, and Tailwind CSS. Features dark/light mode, Google reviews integration (mock API), and a beautiful, reusable design.

## Features

- 🎨 **Mobile-Optimized Design** - Responsive layout that looks great on all devices
- 🌓 **Dark/Light Mode** - Toggle between themes with persistent storage
- ⭐ **Hero Section** - Display business logo, name, and average star rating
- 📝 **Leave a Review** - Interactive star rating that opens a modal with Google and Facebook review links
- 📊 **Review Grid** - Beautiful grid layout displaying recent reviews with truncation and "Read More" toggle
- 🎯 **Brand-Ready** - Easily customizable for different clients via configuration file
- ⚡ **Fast & Modern** - Built with Vite for lightning-fast development and builds

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Business Configuration

Edit `src/config/businessConfig.js` to customize for different clients:

```javascript
export const businessConfig = {
  name: 'Your Business Name',
  logo: 'https://your-logo-url.com/logo.png',
  googleReviewUrl: 'https://g.page/r/YOUR_GOOGLE_PLACE_ID/review',
  facebookReviewUrl: 'https://www.facebook.com/YOUR_PAGE/reviews',
  primaryColor: 'indigo', // Options: blue, green, purple, pink, red, etc.
}
```

### Integrating Real Google Reviews API

Replace the mock service in `src/services/reviewService.js` with your actual API calls:

1. Get your Google Places API key
2. Use the Google Places API to fetch reviews
3. Transform the API response to match the expected review format:

```javascript
{
  id: number,
  author: string,
  rating: number (1-5),
  text: string,
  date: string (ISO format),
  profilePhoto: string (URL)
}
```

### Styling Customization

The app uses Tailwind CSS. You can customize:

- **Colors**: Modify the `primaryColor` in `businessConfig.js` or update Tailwind classes directly
- **Theme**: Edit `tailwind.config.js` to add custom colors, fonts, or spacing
- **Components**: All components are in `src/components/` and can be easily modified

## Project Structure

```
src/
├── components/          # React components
│   ├── Hero.jsx        # Hero section with logo and rating
│   ├── LeaveReview.jsx # Review submission section
│   ├── ReviewCard.jsx  # Individual review card
│   ├── ReviewGrid.jsx  # Grid of reviews
│   └── ThemeToggle.jsx # Dark/light mode toggle
├── context/            # React context providers
│   └── ThemeContext.jsx # Theme management
├── services/           # API services
│   └── reviewService.js # Mock/real review API
├── config/             # Configuration files
│   └── businessConfig.js # Business-specific settings
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles
```

## Technologies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Context** - State management for theme

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT


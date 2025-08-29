<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> refs/remotes/origin/main
# C.V. Chandramouli - Advertising Consultants

A professional single-page landing site for C.V. Chandramouli advertising agency, built with React and optimized for GitHub Pages deployment.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation and sticky header
│   ├── Hero.js         # Hero section with CTA buttons
│   ├── About.js        # Profile cards for team members
│   ├── Services.js     # Service offerings
│   ├── Clients.js      # Client logo grid
│   ├── Subscribe.js    # Newsletter signup
│   ├── Contact.js      # Contact information and form
│   └── Footer.js       # Footer section
├── content.json        # All website content (EDIT THIS!)
├── App.js             # Main app component
├── App.css            # All styling
└── index.js           # App entry point

public/
└── images/            # Placeholder images (replace these!)
    ├── hero-image.svg
    ├── chandramouli.svg
    ├── vijay.svg
    └── client-*.svg
```

## ✏️ Editing Content

All website content is stored in `src/content.json`. Simply edit this file to update:

- **Company Information**: Name, contact details, hours
- **Navigation**: Menu items and links
- **Hero Section**: Headlines, buttons, and hero image
- **About Section**: Team member profiles and descriptions
- **Services**: Service titles and descriptions
- **Clients**: Client names and logos
- **Contact**: Contact information and form settings

### Example: Updating Company Phone

```json
{
  "company": {
    "phone": "+91 99407 11173", // Update this number
    "email": "rcvijay@yahoo.co.in"
    // ... other fields
  }
}
```

### Example: Adding a New Service

```json
{
  "services": {
    "items": [
      {
        "title": "Print Advertising",
        "description": "Creating impactful print campaigns..."
      },
      {
        "title": "Your New Service", // Add new service here
        "description": "Description of your new service..."
      }
    ]
  }
}
```

## 🖼️ Replacing Images

Replace the placeholder images in `public/images/` with your actual images:

1. **Hero Image**: Replace `hero-image.svg` with your hero image
2. **Profile Photos**: Replace `chandramouli.svg` and `vijay.svg` with actual photos
3. **Client Logos**: Replace `client-1.svg` through `client-8.svg` with actual client logos

**Important**: If you change image filenames, update the corresponding paths in `content.json`.

## 🌐 GitHub Pages Deployment

### Deploy Steps

1. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy:github
   ```

   Or for custom URLs:
   ```bash
   cross-env PUBLIC_URL=https://yourusername.github.io/your-repo npm run build && gh-pages -d build
   ```

2. **Enable GitHub Pages** (first time only):
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Select "gh-pages" branch as source
   - Your site will be available at https://stellarlogix.github.io/cvchandramouli.com

### How It Works

The `deploy:github` script:
1. Sets `PUBLIC_URL` environment variable for correct asset paths
2. Builds the production version with proper paths
3. Pushes the build to the `gh-pages` branch
4. Updates your live site

**No need to modify package.json** - the homepage URL is set via environment variable during build!

## 🎨 Customizing Styles

The accent color (muted gold) is defined as `#CBB26A` throughout the CSS. To change the brand color:

1. Open `src/App.css`
2. Find and replace `#CBB26A` with your preferred color
3. Also update `#b8a159` (the hover state) with a darker version of your color

## 📱 Responsive Design

The site is fully responsive with breakpoints at:

- Mobile: 480px and below
- Tablet: 768px and below
- Desktop: Above 768px

## 🔧 Technical Details

- **Framework**: React 18
- **Styling**: Plain CSS with Flexbox and CSS Grid
- **Deployment**: GitHub Pages
- **Build Tool**: Create React App
- **Icons**: None (keeping it lightweight)

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm start` - Start development server (alternative)
- `npm run build` - Build for production
- `npm run deploy:github` - Deploy to GitHub Pages with correct URL
- `npm run deploy` - Deploy to GitHub Pages (requires homepage in package.json)
- `npm test` - Run tests

## 🔗 Contact Integration

The site includes working links for:

- **Phone**: Click-to-call functionality
- **Email**: Opens default email client
- **WhatsApp**: Direct message link
- **Google Maps**: Directions to office

Forms are set up with placeholder endpoints. To connect real form submission:

1. Update `content.json` → `contact.form.action` with your form handler URL
2. Update `content.json` → `subscribe.endpoint` with your newsletter service URL

## 📞 Support

For technical issues or customization help, contact the development team or refer to the React documentation at [https://reactjs.org/docs](https://reactjs.org/docs).

---

**Website**: cvchandramouli.com  
**Built with**: React + GitHub Pages
<<<<<<< HEAD
=======
# cvchandramouli.com

This repository was initialized by Builder.io.

## Getting Started

Welcome to your new repository! You can now start building your project.
>>>>>>> refs/remotes/origin/main
=======
>>>>>>> refs/remotes/origin/main

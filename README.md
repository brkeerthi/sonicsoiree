# Sonic Soiree - Coming Soon Landing Page

A sleek, modern "Coming Soon" landing page for Sonic Soiree, an exclusive music-themed experience event in India. The page features a sophisticated minimal black and white design with elegant typography, a royal mandala kaleidoscope background, and a real-time countdown timer.

![Sonic Soiree Landing Page](https://via.placeholder.com/1200x630/000000/FFD700?text=Sonic+Soiree+-+Coming+Soon)

## ✨ Features

- **Minimal Modern Design**: Clean black and white aesthetic with sophisticated typography
- **Royal Mandala Background**: Exquisite animated kaleidoscope patterns with golden accents
- **Real-time Countdown Timer**: Live countdown to October 11, 2025, 8:00 PM IST
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Elegant motion effects using Motion (formerly Framer Motion)
- **Custom Typography**: Beautiful Google Fonts including Playfair Display, Orbitron, and Inter
- **Sacred Geometry**: Mesmerizing rotating geometric patterns and mandala designs

## 🎯 Event Details

- **Event**: Sonic Soiree - An Evening of Sound, Light & Soul
- **Date**: October 11, 2025
- **Time**: 8:00 PM IST
- **Location**: India

## 🛠 Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS v4.0
- **Animations**: Motion React (formerly Framer Motion)
- **Fonts**: Google Fonts (Playfair Display, Orbitron, Raleway, Inter)
- **Build Tool**: Vite
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sonic-soiree-landing.git
   cd sonic-soiree-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Visit `http://localhost:5173` to see the landing page in action.

## 📁 Project Structure

```
sonic-soiree-landing/
├── App.tsx                    # Main application component
├── components/
│   ├── CountdownTimer.tsx     # Real-time countdown component
│   ├── AnimatedBackground.tsx # Background animation component
│   ├── FlipCard.tsx          # Legacy flip card component
│   └── ui/                   # Shadcn/ui components
├── styles/
│   └── globals.css           # Global styles and custom fonts
├── guidelines/
│   └── Guidelines.md         # Development guidelines
└── README.md                 # This file
```

## 🌐 Deploy to Vercel via GitHub

### Step 1: Push to GitHub

1. **Create a new repository on GitHub**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `sonic-soiree-landing` or your preferred name
   - Don't initialize with README (since you already have one)

2. **Connect your local repository to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/sonic-soiree-landing.git
   git branch -M main
   git add .
   git commit -m "Initial commit: Sonic Soiree landing page"
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Sign up/Login to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Sign up or login with your GitHub account

2. **Import your project**
   - Click "New Project" on your Vercel dashboard
   - Select "Import Git Repository"
   - Choose your `sonic-soiree-landing` repository

3. **Configure deployment settings**
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `dist` (default)
   - **Install Command**: `npm install` (default)

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site
   - You'll get a live URL like `https://sonic-soiree-landing.vercel.app`

### Step 3: Custom Domain (Optional)

1. **Add your domain**
   - Go to your project dashboard on Vercel
   - Click "Settings" > "Domains"
   - Add your custom domain
   - Follow the DNS configuration instructions

### Step 4: Automatic Deployments

Your site is now set up for automatic deployments! Every time you push to the `main` branch:

1. **Make changes locally**
   ```bash
   # Edit your files
   git add .
   git commit -m "Update: description of changes"
   git push origin main
   ```

2. **Vercel automatically**
   - Detects the changes
   - Builds the project
   - Deploys the updates
   - Sends you a notification

## 🎨 Customization

### Changing the Event Date

Update the countdown target date in `/components/CountdownTimer.tsx`:

```typescript
const targetDate = new Date('2025-10-11T20:00:00+05:30').getTime(); // 8:00 PM IST
```

### Modifying Colors

The color scheme is defined in `/styles/globals.css`. The main golden accent color can be adjusted:

```css
/* Look for yellow-400 classes throughout the codebase */
.text-yellow-400 { /* Golden text */ }
.border-yellow-400 { /* Golden borders */ }
.bg-yellow-400 { /* Golden backgrounds */ }
```

### Updating Fonts

Add new Google Fonts in `/styles/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');
```

### Logo Replacement

Replace the logo by updating the import in `/App.tsx`:

```typescript
import logo from 'figma:asset/your-new-logo.png';
```

## 📱 Responsive Breakpoints

The design is optimized for:
- **Mobile**: 375px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🔧 Build Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check
```

## 📄 Environment Variables

No environment variables are required for this project as it's a static landing page.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Royal mandala patterns and sacred geometry
- **Fonts**: Google Fonts for beautiful typography
- **Animation Library**: Motion React for smooth animations
- **UI Components**: Shadcn/ui for consistent design elements

## 📧 Contact

For questions about Sonic Soiree event:
- Email: contact@sonicsoiree.com
- Website: https://sonicsoiree.com

For technical questions about this landing page:
- Create an issue in this repository
- Contact: your-email@example.com

---

**Built with ❤️ for an unforgettable evening of Sound, Light & Soul**
# Proventus Digital Limited — Website

A professional Next.js 14 website for Proventus Digital Limited, inspired by the structure and UX patterns of leading Kenyan marketing agencies.

**Brand:** Navy (#0D2B55) + Gold (#F5A623) | Montserrat + Inter

---

## 📁 Project Structure

```
proventus-website/
├── public/
│   └── images/
│       └── logo.jpg              ← Your Proventus logo
├── src/
│   ├── app/
│   │   ├── globals.css           ← Global styles & brand tokens
│   │   ├── layout.tsx            ← Root layout with metadata/SEO
│   │   └── page.tsx              ← Main homepage (assembles all sections)
│   └── components/
│       ├── Navbar.tsx            ← Sticky nav with dropdown menus
│       ├── Hero.tsx              ← Full-screen hero section
│       ├── Stats.tsx             ← Animated counters (6+, 50+, 3M+, 100%)
│       ├── Services.tsx          ← 6 service cards with icons
│       ├── WhyUs.tsx             ← 7 reasons with visual layout
│       ├── Approach.tsx          ← 6-step process (dark navy bg)
│       ├── DOOH.tsx              ← DOOH network section
│       ├── Clients.tsx           ← Client marquee + sectors
│       ├── CTA.tsx               ← Contact form + info
│       └── Footer.tsx            ← Full footer with links
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── postcss.config.js
└── package.json
```

---

## 🚀 Step-by-Step Setup in VS Code

### Prerequisites

Make sure you have these installed on your computer:

1. **Node.js** (version 18 or higher)
   - Download from https://nodejs.org/
   - Verify: open Terminal and type `node -v`

2. **VS Code**
   - Download from https://code.visualstudio.com/

3. **Git** (optional but recommended)
   - Download from https://git-scm.com/

---

### Step 1 — Open the project in VS Code

1. Download / unzip the `proventus-website` folder to your computer (e.g., your Desktop)
2. Open **VS Code**
3. Click **File → Open Folder**
4. Navigate to the `proventus-website` folder and click **Open**

You should see all the files in the Explorer panel on the left.

---

### Step 2 — Open the Integrated Terminal

In VS Code:
- Press **Ctrl + `** (backtick) on Windows/Linux
- Press **Cmd + `** on Mac
- Or go to **Terminal → New Terminal**

You should see a terminal at the bottom of VS Code with the cursor inside the `proventus-website` folder.

---

### Step 3 — Install Dependencies

In the terminal, type:

```bash
npm install
```

This downloads all required packages (Next.js, Tailwind CSS, React, etc.).
It may take 1–2 minutes. You'll see a `node_modules` folder appear when done.

---

### Step 4 — Start the Development Server

```bash
npm run dev
```

You'll see output like:
```
▲ Next.js 14.2.5
- Local:        http://localhost:3000
```

---

### Step 5 — View the Website

Open your browser and go to:
```
http://localhost:3000
```

You should see the full Proventus website! 🎉

> **Hot Reload:** Any changes you save in VS Code will instantly update in the browser — no need to refresh.

---

### Step 6 — Customising the Content

Here are the key files to edit:

| What you want to change | File to edit |
|------------------------|--------------|
| Page title, SEO meta | `src/app/layout.tsx` |
| Hero headline & text | `src/components/Hero.tsx` |
| Stats numbers | `src/components/Stats.tsx` |
| Services content | `src/components/Services.tsx` |
| Why Us reasons | `src/components/WhyUs.tsx` |
| Client list | `src/components/Clients.tsx` |
| Contact info (phone, email) | `src/components/CTA.tsx` and `src/components/Footer.tsx` |
| Brand colours | `src/app/globals.css` and `tailwind.config.js` |
| Logo | Replace `public/images/logo.jpg` |
| Navigation links | `src/components/Navbar.tsx` |

---

### Step 7 — Replacing the Logo

1. Name your logo file `logo.jpg`
2. Copy it to: `proventus-website/public/images/logo.jpg`
3. The browser will auto-refresh

---

### Step 8 — Build for Production

When you're ready to deploy:

```bash
npm run build
```

Then to test the production build locally:

```bash
npm start
```

---

## 🌐 Deployment Options

### Option A: Vercel (Recommended — Free)
1. Create an account at https://vercel.com/
2. Click **New Project → Import Git Repository**
3. Or drag and drop your project folder
4. Vercel auto-detects Next.js — click **Deploy**
5. You'll get a free `.vercel.app` URL instantly

### Option B: Netlify
1. Create account at https://netlify.com/
2. Drag and drop the project folder
3. Or connect via GitHub

### Option C: Your Own Server (VPS/cPanel)
```bash
npm run build
# Upload the .next folder, public, package.json, next.config.js
npm install --production
npm start
```

---

## 🔧 Recommended VS Code Extensions

Install these for a better development experience:

- **ES7+ React/Redux/React-Native snippets** — React shortcuts
- **Tailwind CSS IntelliSense** — Tailwind autocomplete
- **Prettier - Code formatter** — Auto-format your code
- **Auto Rename Tag** — Rename JSX tags simultaneously
- **GitLens** — Better Git integration

To install: Click the Extensions icon (squares) in the left sidebar and search by name.

---

## 📬 Connecting the Contact Form

The form in `src/components/CTA.tsx` currently logs to the console.
To make it send real emails, choose one of:

### Option 1: EmailJS (no backend needed)
```bash
npm install @emailjs/browser
```
Sign up at https://emailjs.com/ (free tier available), then update the form handler.

### Option 2: Resend (modern email API)
```bash
npm install resend
```
Create an API route in `src/app/api/contact/route.ts`.

### Option 3: Formspree
Replace the form action with your Formspree endpoint (no code changes).

---

## 🎨 Brand Tokens (Quick Reference)

```css
Navy Dark:   #091D3A   /* navbar, footer, hero bg */
Navy:        #0D2B55   /* primary brand colour */
Navy Light:  #1A3A6E   /* cards, stat backgrounds */
Gold:        #F5A623   /* accent, CTAs, highlights */
Gold Light:  #F7B84A   /* hover states */
```

Fonts:
- **Montserrat** — headings, labels (Bold/Black)
- **Inter** — body text, descriptions (Regular/Medium)

---

## ❓ Troubleshooting

**"npm: command not found"**
→ Install Node.js from https://nodejs.org/ and restart your terminal.

**Port 3000 already in use**
→ Run `npm run dev -- --port 3001` to use a different port.

**Styles not loading**
→ Make sure `tailwind.config.js` content paths match your file structure.

**Logo not showing**
→ Ensure the file is at `public/images/logo.jpg` (exact filename).

---

## 📞 Support

For questions about the codebase, reach out to your developer or refer to:
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS Docs: https://tailwindcss.com/docs
- Proventus: info@proventus.ke | 0799 454545

# SEBI-Certified Financial Consultant Website

A modern, bilingual (English/Hindi), responsive website for Shantanu Pandey - SEBI-Certified Financial Consultant based in Gorakhpur, India.

## Features Implemented

### ✅ All Modifications Completed:

1. **Fixed Tools/Calculators Page**
   - 6 fully functional calculators with live calculations
   - SIP Calculator
   - Retirement Corpus Calculator
   - EMI Calculator
   - Goal Planner
   - Loan EMI Calculator
   - Interest Calculator
   - Interactive sliders and inputs
   - Real-time results display
   - Proper disclaimers

2. **Updated Advisor Name**
   - Changed from [ADVISOR NAME] to **Shantanu Pandey** throughout
   - Updated in header, footer, about page, and all meta tags

3. **Added Social Media Icons**
   - LinkedIn, Facebook, Instagram, Twitter, YouTube
   - Placed in footer with hover effects
   - Also added to header top bar
   - Styled with brand colors

4. **Added Header Banners on All Pages**
   - Consistent PageBanner component
   - Page title display
   - Breadcrumb navigation
   - Gradient background with pattern
   - Applied to all internal pages

5. **Updated SEBI Display**
   - Changed from "SEBI Certified | [REG NUMBER]" to just "SEBI Certified"
   - Updated in header, footer, about page
   - Full registration details retained in Compliance page only

6. **Quality Assurance**
   - All pages are responsive
   - Bilingual support (English/Hindi)
   - Consistent styling and branding
   - Working navigation
   - SEO-ready structure

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Fonts:** Poppins (headings), Inter (body)

## Color Palette

- Deep Blue: `#0A66C2`
- Emerald: `#2BB673`
- Slate: `#0F172A`
- Accent Gold: `#D4AF37`

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Extract the website folder
2. Navigate to the project directory:
   ```bash
   cd financial-consultant-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization Guide

### 1. Replace Placeholders

Search for and replace these placeholders throughout the codebase:

- `[BUSINESS NAME]` - Your business name
- `[PHONE]` - Your phone number
- `[WHATSAPP NUMBER]` - Your WhatsApp number (with country code)
- `[EMAIL]` - Your email address
- `[ADDRESS, GORAKHPUR, UP]` - Your complete address
- `[BOOKING LINK]` - Your Google Calendar or Calendly booking link
- `[MAP LINK]` - Your Google Maps embed link
- `[LINKEDIN_URL]` - Your LinkedIn profile URL
- `[FACEBOOK_URL]` - Your Facebook page URL
- `[INSTAGRAM_URL]` - Your Instagram profile URL
- `[TWITTER_URL]` - Your Twitter/X profile URL
- `[YOUTUBE_URL]` - Your YouTube channel URL (optional)

### 2. Key Files to Update

#### Contact Information
- `/app/components/Header.tsx`
- `/app/components/Footer.tsx`
- `/app/contact/page.tsx`

#### About Page Content
- `/app/about/page.tsx`
- Update qualifications, experience, bio

#### Services
- `/app/services/page.tsx`
- Create subpages in `/app/services/[service-name]/page.tsx`

#### Blog Posts
- `/app/blog/page.tsx`
- Add actual blog post pages

### 3. Adding Google Analytics

Add your GA4 tracking code in `/app/layout.tsx`:

```typescript
// Add Google Analytics script
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### 4. Contact Form Setup

The contact form in `/app/contact/page.tsx` needs backend integration:

Options:
1. Use a form service like Formspree, FormSubmit
2. Implement API route in Next.js
3. Connect to your email service

Example API route (`/app/api/contact/route.ts`):
```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Send email using your preferred service
  // (Nodemailer, SendGrid, AWS SES, etc.)
  
  return NextResponse.json({ success: true });
}
```

### 5. Add reCAPTCHA

1. Get reCAPTCHA keys from Google
2. Add to contact form
3. Verify on server side

### 6. SEO Optimization

Update metadata in each page file:
```typescript
export const metadata: Metadata = {
  title: 'Your Page Title',
  description: 'Your page description',
  keywords: 'relevant, keywords, here',
};
```

### 7. Deploy

#### Vercel (Recommended)
1. Push code to GitHub
2. Connect to Vercel
3. Deploy

#### Other Hosting
- Build: `npm run build`
- Output: `.next` folder
- Follow hosting provider's Node.js deployment guide

## Pages Structure

```
/                   - Homepage with hero, services, process
/services           - Services overview
/services/[name]    - Individual service pages
/process            - Four-step process explanation
/pricing            - Fee structure and packages
/tools              - 6 financial calculators
/blog               - Blog/insights listing
/about              - About Shantanu Pandey
/faqs               - Frequently asked questions
/compliance         - SEBI compliance and disclaimers
/contact            - Contact form and information
```

## Bilingual Support

Toggle between English and Hindi using the globe icon in the header. Translations are managed in `/app/context/LanguageContext.tsx`.

To add more translations, update the `translations` object in that file.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Lighthouse score target: 90+
- Optimized images
- Lazy loading
- Minified CSS/JS

## Support

For technical issues or customization help:
- Check Next.js documentation: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs

## License

This website is proprietary and confidential. All rights reserved.

---

**Built for:** Shantanu Pandey, SEBI-Certified Financial Consultant
**Location:** Gorakhpur, Uttar Pradesh, India
**Last Updated:** November 2025

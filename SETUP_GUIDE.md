# Quick Setup Guide

## Completed Modifications ✅

All requested modifications have been successfully implemented:

1. ✅ **Tools/Calculators Fixed** - All 6 calculators are fully functional
2. ✅ **Advisor Name Updated** - Changed to Shantanu Pandey everywhere
3. ✅ **Social Media Icons Added** - In header top bar and footer
4. ✅ **Header Banners Added** - All internal pages have page banners
5. ✅ **SEBI Display Updated** - Shows "SEBI Certified" only (except Compliance page)
6. ✅ **Quality Check Complete** - Responsive, bilingual, consistent styling

## Installation Steps

### Step 1: Prerequisites
Make sure you have Node.js 18 or higher installed.
Check: `node --version`

### Step 2: Install Dependencies
```bash
cd financial-consultant-website
npm install
```

### Step 3: Customize Content
Replace all placeholders marked with `[PLACEHOLDER]`:

**In Header.tsx and Footer.tsx:**
- [BUSINESS NAME]
- [PHONE]
- [WHATSAPP NUMBER]
- [EMAIL]
- [ADDRESS, GORAKHPUR, UP]
- [LINKEDIN_URL]
- [FACEBOOK_URL]
- [INSTAGRAM_URL]
- [TWITTER_URL]
- [YOUTUBE_URL]

**In Homepage (page.tsx):**
- [BOOKING LINK]
- [MAP LINK]

### Step 4: Run Development Server
```bash
npm run dev
```

Open http://localhost:3000

### Step 5: Test All Features

#### Pages to Test:
- ✅ Homepage - Hero, services, process
- ✅ Services - All service cards
- ✅ Process - Four-step methodology
- ✅ Pricing - Fee structure
- ✅ Tools - All 6 calculators (CRITICAL - test each one!)
- ✅ Blog - Blog listing
- ✅ About - Shantanu Pandey info
- ✅ FAQs - Accordion questions
- ✅ Compliance - SEBI info
- ✅ Contact - Form and map

#### Calculators to Test:
1. SIP Calculator - Enter amounts, calculate
2. Retirement Calculator - Test with different ages
3. EMI Calculator - Test loan calculations
4. Goal Planner - Test savings plans
5. Loan EMI Calculator - Verify EMI computation
6. Interest Calculator - Test both simple & compound

#### Other Tests:
- Language toggle (English ↔ Hindi)
- Mobile responsive (use browser dev tools)
- All navigation links
- Social media icon links
- Phone/WhatsApp/Email links
- Booking link

### Step 6: Build for Production
```bash
npm run build
npm start
```

### Step 7: Deploy

**Option A: Vercel (Easiest)**
1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Deploy automatically

**Option B: Other Hosting**
- Build the project: `npm run build`
- Upload `.next` folder and `package.json`
- Run `npm install --production`
- Start with `npm start`

## Important Customizations

### 1. Calculator Accuracy
All calculators use standard financial formulas:
- SIP: Future Value of Annuity
- Retirement: Present Value adjusted for inflation
- EMI: Standard EMI formula
- Interest: Both simple and compound interest

Review calculations to ensure they match your requirements.

### 2. Contact Form
The contact form needs backend integration:
- Option 1: Use Formspree.io (easiest)
- Option 2: Create API route in Next.js
- Option 3: Use Netlify Forms

### 3. Google Maps
Replace `[MAP LINK]` with your Google Maps embed URL:
1. Go to Google Maps
2. Search your address
3. Click Share → Embed a map
4. Copy the iframe src URL

### 4. Booking Calendar
Replace `[BOOKING LINK]` with:
- Google Calendar booking link
- Calendly link
- Any other scheduling tool URL

### 5. Analytics
Add Google Analytics in `/app/layout.tsx` (see README for code)

### 6. reCAPTCHA
Add Google reCAPTCHA to contact form for spam protection

## File Structure

```
financial-consultant-website/
├── app/
│   ├── components/       # Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── PageBanner.tsx
│   │   └── Calculators.tsx
│   ├── context/          # Language context
│   ├── about/            # About page
│   ├── services/         # Services pages
│   ├── process/          # Process page
│   ├── pricing/          # Pricing page
│   ├── tools/            # Calculators page
│   ├── blog/             # Blog page
│   ├── faqs/             # FAQs page
│   ├── compliance/       # Compliance page
│   ├── contact/          # Contact page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── public/               # Static assets (add your images here)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Troubleshooting

### Issue: Calculators not working
- Clear browser cache
- Check browser console for errors
- Ensure JavaScript is enabled

### Issue: Language toggle not working
- Check if state is updating
- Verify translations in LanguageContext.tsx

### Issue: Build fails
- Run `npm install` again
- Check Node.js version (needs 18+)
- Delete `node_modules` and `.next`, reinstall

### Issue: Links not working
- Verify placeholder values are replaced
- Check URL format (include https://)
- Test in incognito mode

## Next Steps

1. Replace all placeholder content
2. Add real images to `/public` folder
3. Update About page with real bio
4. Add actual blog posts
5. Set up contact form backend
6. Add Google Analytics
7. Test thoroughly on mobile
8. Deploy to production
9. Set up custom domain
10. Submit to search engines

## Support Resources

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- React: https://react.dev

## Checklist Before Going Live

- [ ] All placeholders replaced
- [ ] Contact information verified
- [ ] Social media links working
- [ ] All 6 calculators tested
- [ ] Contact form functional
- [ ] Google Maps embedded
- [ ] Booking calendar linked
- [ ] Mobile responsiveness checked
- [ ] Language toggle tested
- [ ] All internal links working
- [ ] Analytics set up
- [ ] SEBI compliance reviewed
- [ ] Legal pages added (Privacy, Terms)
- [ ] SEO metadata updated
- [ ] Performance tested (Lighthouse)
- [ ] SSL certificate enabled
- [ ] Domain configured
- [ ] Backup created

---

**Website Status:** Ready for customization and deployment
**All Modifications:** Complete ✅
**Quality Check:** Passed ✅

For questions or support, refer to the main README.md file.

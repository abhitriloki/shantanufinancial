# 🚀 QUICK START - 5 Minutes to Launch

## Step 1: Install (2 minutes)
```bash
cd financial-consultant-website
npm install
npm run dev
```
Open: http://localhost:3000

## Step 2: Replace Info (2 minutes)
Use Find & Replace in your editor:

| Find This | Replace With Your |
|-----------|-------------------|
| `[BUSINESS NAME]` | Your business name |
| `[PHONE]` | Your phone number |
| `[WHATSAPP NUMBER]` | Your WhatsApp with country code |
| `[EMAIL]` | Your email |
| `[ADDRESS, GORAKHPUR, UP]` | Your full address |
| `[BOOKING LINK]` | Your calendar booking URL |
| `[MAP LINK]` | Your Google Maps embed URL |
| `[LINKEDIN_URL]` | Your LinkedIn profile |
| `[FACEBOOK_URL]` | Your Facebook page |
| `[INSTAGRAM_URL]` | Your Instagram |
| `[TWITTER_URL]` | Your Twitter/X |

## Step 3: Test (1 minute)
- ✅ Homepage loads
- ✅ Click Tools → Test one calculator
- ✅ Toggle language (English/Hindi)
- ✅ Check mobile view (browser dev tools)

## 🎯 Key Files to Edit

### Contact Info
- `app/components/Header.tsx` - Lines 9-18
- `app/components/Footer.tsx` - Lines 6-16

### About Page
- `app/about/page.tsx` - Update bio, education, experience

### Homepage
- `app/page.tsx` - Update hero text, slots

## ⚡ Critical: Test Calculators

Go to: http://localhost:3000/tools

Test each:
1. SIP Calculator - Enter 5000, 12%, 10 years
2. Retirement - Enter 30, 60, 50000
3. EMI - Enter 1000000, 8.5%, 20
4. Goal Planner - Enter amounts and calculate
5. Loan EMI - Test with different values
6. Interest - Test simple & compound

All should show results instantly!

## 🚀 Deploy to Vercel (5 minutes)

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to vercel.com
3. Import GitHub repo
4. Deploy (auto-configured for Next.js)
5. Done! 🎉

## 📱 Mobile Test
Open browser dev tools (F12)
Toggle device toolbar
Test on iPhone and Android sizes

## 🔧 Common Issues

**Calculators not working?**
- Clear cache, reload
- Check console for errors

**Language toggle not working?**
- State should update immediately
- Check LanguageContext.tsx

**Build fails?**
- Delete node_modules and .next
- Run npm install again
- Ensure Node.js 18+

## 📞 Quick Links

- **Documentation:** README.md
- **Setup Guide:** SETUP_GUIDE.md
- **Project Summary:** PROJECT_SUMMARY.md

## ✅ Pre-Launch Checklist

- [ ] All placeholders replaced
- [ ] Calculators tested
- [ ] Mobile responsive checked
- [ ] Contact form working
- [ ] Social links verified
- [ ] Analytics added
- [ ] SSL enabled
- [ ] Domain configured

---

**That's it!** You're ready to go live.

Website built for: **Shantanu Pandey**
Location: **Gorakhpur, India**
Status: **✅ COMPLETE**

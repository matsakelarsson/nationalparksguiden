# ✅ Deployment Checklist

## GitHub Setup
- [ ] Create GitHub repository at: `https://github.com/YOUR_USERNAME/nationalparksguiden`
- [ ] Copy the repository URL
- [ ] Add remote origin: `git remote add origin YOUR_REPO_URL`
- [ ] Push to GitHub: `git push -u origin main`

## Azure Setup
- [ ] Go to [Azure Portal](https://portal.azure.com)
- [ ] Create new Static Web App resource
- [ ] Connect to your GitHub repository
- [ ] Configure build settings (Custom preset)
- [ ] Deploy and wait for completion

## Verification
- [ ] App loads correctly at Azure URL
- [ ] PDF generation works
- [ ] All form fields function properly
- [ ] Mobile responsiveness works
- [ ] No console errors

## Post-Deployment
- [ ] Test PDF generation on live site
- [ ] Share your live URL with others
- [ ] Consider adding custom domain (optional)
- [ ] Monitor Azure usage (should stay within free tier)

## Your Live URL
Once deployed, your app will be available at:
`https://nationalparksguiden.azurestaticapps.net`
(URL may vary based on your chosen name)

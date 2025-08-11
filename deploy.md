# 🚀 Azure Static Web Apps Deployment Guide

## Prerequisites
- GitHub account
- Azure account (free tier works!)

## Step 1: Push to GitHub
```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: National Park Guide PDF Generator"

# Add GitHub remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/nationalparksguiden.git

# Push to GitHub
git push -u origin main
```

## Step 2: Create Azure Static Web App
1. Go to [Azure Portal](https://portal.azure.com)
2. Click "Create a resource"
3. Search for "Static Web App"
4. Click "Create"

## Step 3: Configure Static Web App
- **Subscription**: Choose your subscription
- **Resource Group**: Create new or use existing
- **Name**: `nationalparksguiden` (or your preferred name)
- **Region**: Choose closest to you
- **Source**: GitHub
- **Repository**: Select your repository
- **Branch**: `main`
- **Build Preset**: `Custom`
- **App location**: `/` (root)
- **API location**: Leave empty
- **Output location**: Leave empty

## Step 4: Deploy
- Click "Review + create"
- Click "Create"
- Wait for deployment (usually 2-5 minutes)

## Step 5: Access Your App
- Go to your Static Web App resource
- Click on the URL (e.g., `https://your-app.azurestaticapps.net`)
- Your app is now live! 🎉

## Troubleshooting
- If deployment fails, check the GitHub Actions logs
- Ensure all files are committed and pushed
- Verify the staticwebapp.config.json is in the root directory

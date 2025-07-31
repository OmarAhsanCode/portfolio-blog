#!/bin/bash

# Deployment script for portfolio-blog
echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Make sure you're in the project root directory."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run linting
echo "🔍 Running linter..."
npm run lint

# Build the project
echo "🏗️  Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Built files are in the 'dist' directory"
    echo "🌐 Ready for deployment!"
    
    # Optional: Deploy to Vercel (uncomment if using Vercel CLI)
    # echo "🚀 Deploying to Vercel..."
    # vercel --prod
    
    # Optional: Deploy to Netlify (uncomment if using Netlify CLI)
    # echo "🚀 Deploying to Netlify..."
    # netlify deploy --prod --dir=dist
    
else
    echo "❌ Build failed!"
    exit 1
fi

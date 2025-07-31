@echo off
REM Deployment script for portfolio-blog on Windows

echo 🚀 Starting deployment process...

REM Check if we're in the right directory
if not exist package.json (
    echo ❌ Error: package.json not found. Make sure you're in the project root directory.
    exit /b 1
)

REM Install dependencies
echo 📦 Installing dependencies...
call npm install
if errorlevel 1 goto error

REM Run linting
echo 🔍 Running linter...
call npm run lint
if errorlevel 1 goto error

REM Build the project
echo 🏗️ Building project...
call npm run build
if errorlevel 1 goto error

echo ✅ Build successful!
echo 📁 Built files are in the 'dist' directory
echo 🌐 Ready for deployment!

REM Optional: Deploy to Vercel (uncomment if using Vercel CLI)
REM echo 🚀 Deploying to Vercel...
REM call vercel --prod

REM Optional: Deploy to Netlify (uncomment if using Netlify CLI)
REM echo 🚀 Deploying to Netlify...
REM call netlify deploy --prod --dir=dist

goto end

:error
echo ❌ Build failed!
exit /b 1

:end
echo ✨ Deployment process completed!

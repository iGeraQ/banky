# Frontend Setup Commands - Complete Reference

This document contains all commands used to set up the Banky frontend application.

## 📋 Initial Setup (Already Completed)

### 1. Create Vite + React + TypeScript Project
```bash
cd c:\vscodeworkspaces\banky
npm create vite@latest frontend -- --template react-ts
cd frontend
npm install
```

## 📦 Step 2: Install Core Dependencies

### Install Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
```

### Install Routing and State Management
```bash
npm install react-router-dom @tanstack/react-query axios
```

### Install Shadcn/UI Utilities
```bash
npm install clsx tailwind-merge class-variance-authority lucide-react
```

### Install Radix UI Primitives (Required for Shadcn Components)
```bash
npm install @radix-ui/react-slot @radix-ui/react-label @radix-ui/react-dropdown-menu
```

### All Dependencies in One Command
```bash
npm install react-router-dom @tanstack/react-query axios clsx tailwind-merge class-variance-authority lucide-react @radix-ui/react-slot @radix-ui/react-label @radix-ui/react-dropdown-menu
```

## 🎨 Step 3: Shadcn/UI Components

Since the Shadcn CLI had issues, all components have been manually created. The following components are available:

### ✅ Installed Components
- `button` - Button component with variants
- `card` - Card container components
- `input` - Input field component
- `label` - Label component
- `table` - Table components for data display
- `dropdown-menu` - Dropdown menu components

### 🔄 Adding Additional Shadcn Components (Manual Method)

1. Visit https://ui.shadcn.com/docs/components
2. Navigate to the component you want (e.g., Dialog, Select, Toast)
3. Copy the component code from the documentation
4. Create a new file in `src/components/ui/[component-name].tsx`
5. Paste the code and verify imports

**Example: Adding Dialog Component**
```bash
# Create the file
New-Item -Path "src/components/ui/dialog.tsx" -ItemType File

# Install required dependencies (check component docs)
npm install @radix-ui/react-dialog
```

Then copy the dialog component code from Shadcn docs into the file.

### 📌 Popular Components to Add Later

```bash
# For dialogs/modals
npm install @radix-ui/react-dialog

# For select dropdowns
npm install @radix-ui/react-select

# For checkboxes
npm install @radix-ui/react-checkbox

# For radio groups
npm install @radix-ui/react-radio-group

# For tooltips
npm install @radix-ui/react-tooltip

# For toast notifications
npm install @radix-ui/react-toast

# For tabs
npm install @radix-ui/react-tabs

# For progress bars
npm install @radix-ui/react-progress
```

## 🚀 Development Commands

### Start Development Server
```bash
npm run dev
```
Opens at http://localhost:5173

### Build for Production
```bash
npm run build
```
Output in `dist/` directory

### Preview Production Build
```bash
npm run preview
```

### Run Linter
```bash
npm run lint
```

### Type Check (No Emit)
```bash
npx tsc --noEmit
```

## 🔧 Configuration Files Created

All configuration files have been created:
- ✅ `tailwind.config.js` - Tailwind CSS configuration
- ✅ `postcss.config.js` - PostCSS configuration
- ✅ `vite.config.ts` - Vite configuration with path aliases
- ✅ `tsconfig.app.json` - TypeScript configuration with path aliases
- ✅ `.env.example` - Environment variables template

## 📁 Project Structure Created

```
frontend/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── table.tsx
│   │   │   └── dropdown-menu.tsx
│   │   ├── Navbar.tsx
│   │   └── ProtectedRoute.tsx
│   ├── contexts/
│   │   └── AuthContext.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── DashboardPage.tsx
│   │   └── ProfilePage.tsx
│   ├── lib/
│   │   ├── api.ts
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
└── ... (config files)
```

## 🌐 Environment Setup

### Create `.env` file
```bash
# Copy from example
Copy-Item .env.example .env
```

### Edit `.env` with your settings
```env
VITE_API_URL=http://localhost:8000/api
```

## 🔍 Verify Installation

### Check All Dependencies
```bash
npm list
```

### Check for Vulnerabilities
```bash
npm audit
```

### Update Dependencies (if needed)
```bash
npm update
```

## 📊 Package.json Scripts Reference

Your `package.json` includes these scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

## 🎯 Quick Development Workflow

### 1. Start Development
```bash
npm run dev
```

### 2. Open Browser
Navigate to http://localhost:5173

### 3. Test Features
- Visit `/` - See the homepage
- Visit `/login` - Try logging in (any credentials work)
- Visit `/dashboard` - View the dashboard (after login)
- Visit `/profile` - View profile settings (after login)

### 4. Make Changes
Edit files in `src/` - changes appear instantly via HMR (Hot Module Replacement)

### 5. Build for Production
```bash
npm run build
npm run preview
```

## 🐛 Troubleshooting Commands

### Clear Node Modules and Reinstall
```bash
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### Clear Vite Cache
```bash
Remove-Item -Recurse -Force node_modules/.vite
npm run dev
```

### Fix TypeScript Issues
```bash
# Rebuild TypeScript
npx tsc --build --force

# Check for errors
npx tsc --noEmit
```

### Check Port Usage (if dev server won't start)
```bash
# Check what's using port 5173
netstat -ano | findstr :5173

# Kill process (replace PID with actual process ID)
taskkill /PID <PID> /F
```

## 📚 Additional Tools (Optional)

### Install React DevTools
Browser extension for debugging React applications

### Install Redux DevTools (if using Redux)
Not needed for this project - we use TanStack Query

### Install ESLint Extension
For VS Code: `dbaeumer.vscode-eslint`

### Install Tailwind CSS IntelliSense
For VS Code: `bradlc.vscode-tailwindcss`

## 🔄 Future Enhancement Commands

### Add Form Validation
```bash
npm install react-hook-form zod @hookform/resolvers
```

### Add Data Visualization
```bash
npm install recharts
```

### Add Date Utilities
```bash
npm install date-fns
```

### Add File Upload
```bash
npm install react-dropzone
```

### Add Testing
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

## ✅ Verification Checklist

After setup, verify:
- [ ] `npm run dev` starts without errors
- [ ] http://localhost:5173 loads the homepage
- [ ] Login page accepts any credentials
- [ ] Dashboard shows after login
- [ ] Profile page loads
- [ ] Logout works correctly
- [ ] Tailwind classes are applied
- [ ] TypeScript shows no errors
- [ ] All imports resolve correctly

---

**All commands have been tested on Windows PowerShell**

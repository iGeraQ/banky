# 🚀 Banky Frontend - Quick Reference

## Essential Commands

```bash
# Start Development Server
npm run dev
# → Opens at http://localhost:5173

# Build for Production
npm run build
# → Output in dist/

# Preview Production Build
npm run preview

# Type Check
npx tsc --noEmit
```

## Testing Login

**Demo Credentials:** Any email + any password

Example:
- Email: `accountant@example.com`
- Password: `test123`

## Project URLs

- **Homepage:** http://localhost:5173/
- **Login:** http://localhost:5173/login
- **Dashboard:** http://localhost:5173/dashboard (requires login)
- **Profile:** http://localhost:5173/profile (requires login)

## File Structure (Key Files)

```
src/
├── App.tsx                 # Main app + routing
├── pages/
│   ├── HomePage.tsx        # Landing page
│   ├── LoginPage.tsx       # Login + plans
│   ├── DashboardPage.tsx   # Main dashboard
│   └── ProfilePage.tsx     # User profile
├── components/
│   ├── Navbar.tsx          # Top navigation
│   ├── ProtectedRoute.tsx  # Auth guard
│   └── ui/                 # Shadcn components
└── contexts/
    └── AuthContext.tsx     # Auth state
```

## Adding New Shadcn Components

1. Visit: https://ui.shadcn.com/docs/components
2. Browse and select component
3. Copy code to `src/components/ui/[name].tsx`
4. Install dependencies if needed:
   ```bash
   npm install @radix-ui/react-[component]
   ```

## Environment Variables

Create `.env` file:
```env
VITE_API_URL=http://localhost:8000/api
```

## Documentation

- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - Complete overview
- **[FRONTEND_ARCHITECTURE.md](./FRONTEND_ARCHITECTURE.md)** - Detailed guide
- **[SETUP_COMMANDS.md](./SETUP_COMMANDS.md)** - All commands

## Common Issues

**Port in use:**
Vite will auto-select next available port

**Build errors:**
```bash
npm run build
```
Check console output for specific errors

**TypeScript errors:**
```bash
npx tsc --noEmit
```

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS
- Shadcn/UI
- React Router
- TanStack Query
- Axios

---

**Ready to develop!** 🎉

# Banky Frontend - React + TypeScript Application

Professional bank statement processing application built with React, TypeScript, and modern web technologies.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Shadcn/UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── table.tsx
│   │   │   └── dropdown-menu.tsx
│   │   ├── Navbar.tsx      # Navigation component
│   │   └── ProtectedRoute.tsx  # Route guard for authenticated pages
│   ├── contexts/           # React Context providers
│   │   └── AuthContext.tsx # Authentication state management
│   ├── pages/              # Page components
│   │   ├── HomePage.tsx    # Landing page
│   │   ├── LoginPage.tsx   # Login and plans view
│   │   ├── DashboardPage.tsx  # Main dashboard
│   │   └── ProfilePage.tsx    # User profile
│   ├── lib/                # Utility libraries
│   │   ├── api.ts          # Axios configuration
│   │   └── utils.ts        # Helper functions (cn)
│   ├── App.tsx             # Main app component with routing
│   ├── main.tsx            # Application entry point
│   ├── index.css           # Global styles with Tailwind
│   └── vite-env.d.ts       # TypeScript declarations
├── public/                 # Static assets
├── .env.example           # Environment variables template
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Dependencies and scripts
```

## 🏗️ Technology Stack

### Core Framework
- **Vite** - Fast build tool and development server
- **React 19** - UI library
- **TypeScript** - Type safety and better developer experience

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - High-quality, accessible component library built on Radix UI
- **Lucide React** - Beautiful icon library

### Routing & State
- **React Router DOM** - Client-side routing
- **TanStack Query (React Query)** - Server state management and caching
- **React Context API** - Authentication state

### API & Utilities
- **Axios** - HTTP client with interceptors
- **clsx + tailwind-merge** - Conditional class name utilities
- **class-variance-authority** - Component variant styling

## 🔐 Authentication System (Mock)

The application uses a **mock authentication system** for demonstration purposes. Real authentication will be implemented in future iterations.

### How It Works

The `AuthContext` provides:
- `user` - Current user object or null
- `isAuthenticated` - Boolean authentication status
- `isLoading` - Loading state during initialization
- `login(email, password)` - Mock login function (accepts any credentials)
- `logout()` - Clears user session

### Mock Login Behavior
- Accepts **any email and password**
- Simulates a 500ms API delay
- Stores user data in localStorage
- Generates a mock JWT token
- Redirects to dashboard after successful login

### Protected Routes
Routes wrapped in `<ProtectedRoute>` component require authentication:
- `/dashboard` - Main application dashboard
- `/profile` - User profile settings

Unauthenticated users are automatically redirected to `/login`.

## 🎨 Shadcn/UI Components

This project uses Shadcn/UI components for a professional, consistent design. Components are **copied into your project** and can be fully customized.

### Currently Installed Components
- `button` - Versatile button with multiple variants
- `card` - Container component for grouped content
- `input` - Form input field
- `label` - Form label
- `table` - Data table with sorting and styling
- `dropdown-menu` - Accessible dropdown menus

### Adding New Shadcn Components

To add additional components, use the Shadcn CLI (manual installation since CLI may have issues):

1. **Visit the Shadcn/UI website**: https://ui.shadcn.com/docs/components
2. **Browse components** and find what you need
3. **Copy the component code** from the documentation
4. **Create a new file** in `src/components/ui/[component-name].tsx`
5. **Paste the code** and adjust imports if needed

Example components you might want to add:
- `dialog` - Modal dialogs
- `select` - Dropdown select
- `checkbox` - Checkboxes
- `toast` - Notification toasts
- `avatar` - User avatars
- `badge` - Status badges
- `tabs` - Tabbed interfaces
- `form` - Form management with validation

### Component Customization

All Shadcn components use Tailwind CSS and can be customized:
- Modify the component files directly in `src/components/ui/`
- Adjust theme colors in `tailwind.config.js`
- Update CSS variables in `src/index.css`

## 📄 Page Overview

### Public Pages

#### HomePage (`/`)
- Professional landing page
- Value proposition and features
- Use case highlights for accountants, analysts, and business owners
- Call-to-action buttons

#### LoginPage (`/login`)
- Mock login form (accepts any credentials)
- Subscription plans display (Starter, Professional, Enterprise)
- Automatically redirects to dashboard if already authenticated

### Protected Pages

#### DashboardPage (`/dashboard`)
- KPI cards showing key metrics
- Recent transactions table with filtering and sorting
- Recent uploaded statements list
- Quick action buttons for common tasks

#### ProfilePage (`/profile`)
- User information display
- Editable profile form
- Notification preferences
- Security settings

## 🎯 Key Features Implemented

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`
- Fully responsive navigation and layouts

### Professional FinTech Styling
- Clean, trustworthy design
- Primary blue color scheme
- Proper spacing and typography
- Accessible components (Radix UI primitives)

### Route Protection
- Automatic redirect for unauthenticated users
- Loading states during auth check
- Preserved redirect URLs

### API Configuration
- Pre-configured Axios instance
- Request/response interceptors
- Automatic token injection
- 401 error handling

## 🔧 Configuration Files

### Environment Variables
Create a `.env` file based on `.env.example`:
```env
VITE_API_URL=http://localhost:8000/api
```

### TypeScript Configuration
- Strict mode enabled
- Path aliases configured (`@/` points to `src/`)
- Proper module resolution

### Tailwind Configuration
- Custom color palette using CSS variables
- Border radius customization
- Dark mode support (class-based)

## 🚦 Development Workflow

### Running the Development Server
```bash
npm run dev
```
Opens at `http://localhost:5173` (or next available port)

### Building for Production
```bash
npm run build
```
Creates optimized bundle in `dist/` directory

### Previewing Production Build
```bash
npm run preview
```
Serves the production build locally

### Type Checking
```bash
npx tsc --noEmit
```
Validates TypeScript without emitting files

### Linting
```bash
npm run lint
```
Runs ESLint on the codebase

## 🔌 API Integration (Future)

The `src/lib/api.ts` file contains a pre-configured Axios instance ready for backend integration:

```typescript
import { api } from '@/lib/api';

// Example usage
const response = await api.get('/transactions');
const data = await api.post('/statements/upload', formData);
```

### Features
- Base URL from environment variables
- Automatic Bearer token injection
- 401 error handling (auto-logout)
- Request/response interceptors

## 📊 State Management Strategy

### Local State
- Component-specific state using `useState`
- Form state management

### Context API
- Authentication state (AuthContext)
- User information
- Global app settings (future)

### TanStack Query (React Query)
- Server state management
- Automatic caching
- Background refetching
- Optimistic updates

Example usage:
```typescript
import { useQuery } from '@tanstack/react-query';

const { data, isLoading, error } = useQuery({
  queryKey: ['transactions'],
  queryFn: () => api.get('/transactions').then(res => res.data),
});
```

## 🎨 Styling Best Practices

### Using Tailwind CSS
```tsx
<div className="flex items-center justify-between p-4 border rounded-lg">
  <h2 className="text-xl font-bold">Title</h2>
</div>
```

### Conditional Classes with `cn` Utility
```tsx
import { cn } from '@/lib/utils';

<button 
  className={cn(
    "px-4 py-2 rounded",
    isActive && "bg-primary text-white",
    isDisabled && "opacity-50 cursor-not-allowed"
  )}
>
  Click Me
</button>
```

### Component Variants with CVA
```tsx
import { cva } from 'class-variance-authority';

const buttonVariants = cva("base-classes", {
  variants: {
    variant: {
      primary: "bg-primary text-white",
      secondary: "bg-secondary text-black"
    },
    size: {
      sm: "text-sm px-2 py-1",
      lg: "text-lg px-4 py-3"
    }
  }
});
```

## 🔄 Future Enhancements

### Immediate Next Steps
1. **Real Authentication**
   - Connect to backend `/auth/login` endpoint
   - Implement JWT token refresh logic
   - Add password reset flow

2. **File Upload**
   - Drag-and-drop PDF upload component
   - Progress tracking
   - File validation

3. **Data Export**
   - Export to CSV, Excel, JSON
   - Bulk export functionality
   - Custom date range selection

4. **Advanced Features**
   - Transaction filtering and search
   - Data visualization with charts
   - Report generation
   - Multi-user support

### Recommended Additions

#### Form Validation
```bash
npm install react-hook-form zod @hookform/resolvers
```

#### Data Visualization
```bash
npm install recharts
```

#### Date Handling
```bash
npm install date-fns
```

#### File Upload
```bash
npm install react-dropzone
```

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Vite will automatically try the next available port
# Or specify a port manually in vite.config.ts
```

**Type errors with path aliases:**
- Verify `tsconfig.app.json` has correct `paths` configuration
- Restart TypeScript server in your IDE

**Tailwind classes not applying:**
- Check `tailwind.config.js` content paths include your files
- Restart dev server after config changes

**Component imports failing:**
- Ensure `@/` alias is configured in both `tsconfig.app.json` and `vite.config.ts`
- Check file extensions in imports

## 📚 Learning Resources

### Official Documentation
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn/UI](https://ui.shadcn.com/)
- [TanStack Query](https://tanstack.com/query/latest)
- [React Router](https://reactrouter.com/)

### Code Style Guide
- Use functional components with hooks
- Prefer named exports for components
- Use TypeScript interfaces for props
- Keep components small and focused
- Extract reusable logic into custom hooks

## 🤝 Contributing

When adding new features:
1. Follow the existing folder structure
2. Use TypeScript for all new files
3. Leverage Shadcn/UI components instead of building from scratch
4. Maintain responsive design principles
5. Add proper error handling
6. Update this documentation

## 📞 Support

For questions or issues related to:
- **Vite/React:** Check official documentation
- **Shadcn/UI:** Visit component documentation at ui.shadcn.com
- **Backend Integration:** Refer to backend API documentation in `/backend`

---

**Built with ❤️ for Mexican financial professionals**

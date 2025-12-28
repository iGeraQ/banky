import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User, LogOut, FileText, LayoutDashboard, Sparkles, BookOpen, HelpCircle, Menu, X } from 'lucide-react';
import { FaHippo } from 'react-icons/fa';
import { ThemeToggle } from '@/components/ThemeToggle';

export const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`sticky top-0 z-50 border-b transition-all duration-300 ${
      scrolled 
        ? 'bg-background/80 backdrop-blur-xl shadow-sm' 
        : 'bg-background/95 backdrop-blur-lg'
    } supports-[backdrop-filter]:bg-background/60`}>
      <div className="container mx-auto flex h-16 items-center px-4">
        {/* Logo */}
        <div className="flex gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <FaHippo className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="inline-block font-bold text-xl bg-gradient-to-r from-foreground to-primary bg-clip-text">
              Banky
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex ml-8 gap-1">
          <Link to="/">
            <Button 
              variant={isActive('/') ? 'secondary' : 'ghost'} 
              size="sm"
              className="font-medium"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Features
            </Button>
          </Link>
          <Button variant="ghost" size="sm" className="font-medium">
            <BookOpen className="mr-2 h-4 w-4" />
            Docs
          </Button>
          <Button variant="ghost" size="sm" className="font-medium">
            <HelpCircle className="mr-2 h-4 w-4" />
            Support
          </Button>
        </div>
        
        {/* Right Side */}
        <div className="ml-auto flex items-center gap-3">
          {/* Theme Toggle */}
          <ThemeToggle />
          
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="hidden md:block">
                <Button 
                  variant={isActive('/dashboard') ? 'default' : 'ghost'} 
                  size="sm"
                  className={isActive('/dashboard') ? 'shadow-lg shadow-primary/25' : ''}
                >
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="relative h-9 w-9 rounded-full border-2 border-primary/20 hover:border-primary/50 transition-all"
                  >
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user?.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user?.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link to="/dashboard">
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link to="/profile">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="cursor-pointer text-destructive focus:text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link to="/login" className="hidden md:block">
                <Button variant="ghost" size="sm" className="font-medium">
                  Sign In
                </Button>
              </Link>
              <Link to="/login">
                <Button 
                  variant="default" 
                  size="sm" 
                  className="shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/30 transition-all"
                >
                  Get Started
                </Button>
              </Link>
            </>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Sparkles className="mr-2 h-4 w-4" />
                Features
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <BookOpen className="mr-2 h-4 w-4" />
              Docs
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <HelpCircle className="mr-2 h-4 w-4" />
              Support
            </Button>
            {isAuthenticated && (
              <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
            )}
            {!isAuthenticated && (
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="default" size="sm" className="w-full">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

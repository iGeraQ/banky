import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Download, Shield, Zap, CheckCircle, ArrowRight, Upload, Search, Database, TrendingUp, Clock, Users, Star, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { AnimatedGridBackground } from '@/components/AnimatedGridBackground';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Gradient */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/5" style={{ overflow: 'hidden', position: 'relative' }}>
        {/* Animated Grid Background - Contained to Hero only */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, overflow: 'hidden' }}>
          <AnimatedGridBackground />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
              <Zap className="w-4 h-4 mr-2" />
              Powered by Advanced OCR Technology
            </div>
            
            <div className="space-y-6 max-w-4xl backdrop-blur-sm">
              <h1 className="relative text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                <span className="relative bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                  Transform Bank Statements into
                </span>
                <span className="block mt-2 relative bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">Structured Data</span>
              </h1>
              <p className="mx-auto max-w-[800px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                Professional tool for accountants and financial professionals to extract, 
                analyze, and export transaction data from Mexican bank statements with precision and ease.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/login">
                <Button size="lg" className="text-lg px-10 py-6 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 hover:bg-primary/5">
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border/50 w-full max-w-2xl">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">99.8%</p>
                <p className="text-sm text-muted-foreground">Accuracy</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">10k+</p>
                <p className="text-sm text-muted-foreground">Processed</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Users</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Three simple steps to transform your bank statements into actionable data
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <Card className="relative border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="text-center space-y-4 py-8">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-semibold text-primary">Step 1</div>
                    <CardTitle className="text-2xl">Upload Statement</CardTitle>
                    <CardDescription className="text-base">
                      Upload your PDF bank statement securely. We support all major Mexican banks.
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-primary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <Card className="relative border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="text-center space-y-4 py-8">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-semibold text-primary">Step 2</div>
                    <CardTitle className="text-2xl">AI Processing</CardTitle>
                    <CardDescription className="text-base">
                      Our AI extracts and validates every transaction with 99.8% accuracy.
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <Card className="relative border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="text-center space-y-4 py-8">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Download className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-semibold text-primary">Step 3</div>
                    <CardTitle className="text-2xl">Export Data</CardTitle>
                    <CardDescription className="text-base">
                      Download in CSV, Excel, or JSON format ready for your accounting software.
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Powerful Features</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to process bank statements efficiently
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">PDF Scanning</CardTitle>
                <CardDescription className="text-base">
                  Extract transaction data from PDF bank statements automatically with high accuracy
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Download className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Multiple Export Formats</CardTitle>
                <CardDescription className="text-base">
                  Export your data to CSV, Excel, or JSON format for easy integration with your tools
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Secure & Private</CardTitle>
                <CardDescription className="text-base">
                  Your financial data is processed securely with enterprise-grade encryption
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Lightning Fast</CardTitle>
                <CardDescription className="text-base">
                  Process hundreds of transactions in seconds, saving hours of manual data entry
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">High Accuracy</CardTitle>
                <CardDescription className="text-base">
                  Advanced OCR technology ensures precise data extraction from various bank formats
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Database className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Mexican Banks</CardTitle>
                <CardDescription className="text-base">
                  Optimized for Mexican bank statement formats including Banorte, BBVA, Santander, and more
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Perfect for Financial Professionals</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trusted by accountants, analysts, and business owners across Mexico
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 border-primary/20 hover:border-primary/50 hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Accountants</CardTitle>
                <CardDescription className="text-base">
                  Streamline client bookkeeping by quickly digitizing bank statements and reconciling accounts
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/50 hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Financial Analysts</CardTitle>
                <CardDescription className="text-base">
                  Extract transaction data for analysis, reporting, and financial forecasting with ease
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/50 hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Business Owners</CardTitle>
                <CardDescription className="text-base">
                  Monitor cash flow and expenses by converting statements into actionable insights
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-blue-600 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-4 text-center">
            <div className="space-y-2">
              <p className="text-5xl font-bold">99.8%</p>
              <p className="text-lg opacity-90">Extraction Accuracy</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold">10k+</p>
              <p className="text-lg opacity-90">Statements Processed</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold">500+</p>
              <p className="text-lg opacity-90">Happy Users</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold">15+</p>
              <p className="text-lg opacity-90">Banks Supported</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">What Our Users Say</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join hundreds of professionals who trust Banky
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <CardDescription className="text-base">
                  "Banky has saved me countless hours. The accuracy is incredible and the export formats work perfectly with our accounting software."
                </CardDescription>
                <div className="pt-4">
                  <CardTitle className="text-lg">María González</CardTitle>
                  <p className="text-sm text-muted-foreground">Senior Accountant, CDMX</p>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <CardDescription className="text-base">
                  "As a financial analyst, I need accurate data quickly. Banky delivers exactly that. It's become an essential tool in my workflow."
                </CardDescription>
                <div className="pt-4">
                  <CardTitle className="text-lg">Carlos Ramírez</CardTitle>
                  <p className="text-sm text-muted-foreground">Financial Analyst, Monterrey</p>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <CardDescription className="text-base">
                  "The security features give me peace of mind when handling sensitive financial documents. Highly recommended!"
                </CardDescription>
                <div className="pt-4">
                  <CardTitle className="text-lg">Ana López</CardTitle>
                  <p className="text-sm text-muted-foreground">Business Owner, Guadalajara</p>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-muted-foreground text-xl">
              Join hundreds of professionals using Banky to process bank statements faster and more accurately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/login">
                <Button size="lg" className="text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-2">
                <FileText className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">Banky</span>
              </div>
              <p className="text-muted-foreground text-sm max-w-xs">
                Professional bank statement processing for Mexican financial professionals. 
                Transform PDFs into structured data with AI-powered accuracy.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="mailto:contact@banky.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-4">
              <h3 className="font-semibold">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h3 className="font-semibold">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Partners</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-4">
              <h3 className="font-semibold">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Banky. All rights reserved. Professional bank statement processing for Mexico.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Status</a>
              <a href="#" className="hover:text-primary transition-colors">Support</a>
              <a href="#" className="hover:text-primary transition-colors">Documentation</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

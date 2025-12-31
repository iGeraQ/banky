import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Download, Shield, Zap, CheckCircle, ArrowRight, Upload, Search, Database, TrendingUp, Clock, Users, Building2, HelpCircle, CreditCard, BarChart3, Mail, Twitter, Linkedin, Github } from 'lucide-react';
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
              Impulsado por Tecnología OCR Avanzada
            </div>
            
            <div className="space-y-6 max-w-4xl">
                <h1 className="relative text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                <div className='inline-flex flex-col backdrop-blur-sm rounded-lg'>
                  <span className="relative bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                    Transforma Estados de Cuenta en
                  </span>
                <span className="inline-block mt-2 relative bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">Datos Estructurados</span>
                </div>
                </h1>
                <p className="mx-auto max-w-[800px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                  Herramienta profesional para contadores y profesionales financieros para extraer, 
                  analizar y exportar datos de transacciones de estados de cuenta bancarios mexicanos con precisión y facilidad.
                </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/login">
                <Button size="lg" className="text-lg px-10 py-6 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group">
                  Comenzar Gratis
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 hover:bg-primary/5">
                Ver Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border/50 w-full max-w-2xl">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">99.8%</p>
                <p className="text-sm text-muted-foreground">Precisión</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">&lt; 30s</p>
                <p className="text-sm text-muted-foreground">Procesamiento</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">8</p>
                <p className="text-sm text-muted-foreground">Bancos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Cómo Funciona</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tres simples pasos para transformar tus estados de cuenta en datos accionables
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
                    <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-semibold text-primary">Paso 1</div>
                    <CardTitle className="text-2xl">Subir Estado de Cuenta</CardTitle>
                    <CardDescription className="text-base">
                      Sube tu estado de cuenta bancario en PDF de forma segura. Soportamos todos los bancos mexicanos principales.
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
                    <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-semibold text-primary">Paso 2</div>
                    <CardTitle className="text-2xl">Procesamiento IA</CardTitle>
                    <CardDescription className="text-base">
                      Nuestra IA extrae y valida cada transacción con 99.8% de precisión.
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
                    <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-semibold text-primary">Paso 3</div>
                    <CardTitle className="text-2xl">Exportar Datos</CardTitle>
                    <CardDescription className="text-base">
                      Descarga en formato CSV, Excel o JSON listo para tu software contable.
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
            <h2 className="text-4xl font-bold tracking-tight">Características Potentes</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Todo lo que necesitas para procesar estados de cuenta bancarios eficientemente
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Escaneo de PDFs</CardTitle>
                <CardDescription className="text-base">
                  Extrae datos de transacciones de estados de cuenta bancarios en PDF automáticamente con alta precisión
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Download className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Múltiples Formatos de Exportación</CardTitle>
                <CardDescription className="text-base">
                  Exporta tus datos a formato CSV, Excel o JSON para fácil integración con tus herramientas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Seguro y Privado</CardTitle>
                <CardDescription className="text-base">
                  Tus datos financieros son procesados de forma segura con encriptación de nivel empresarial
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Súper Rápido</CardTitle>
                <CardDescription className="text-base">
                  Procesa cientos de transacciones en segundos, ahorrando horas de entrada manual de datos
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Alta Precisión</CardTitle>
                <CardDescription className="text-base">
                  Tecnología OCR avanzada asegura extracción precisa de datos de varios formatos bancarios
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Database className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Bancos Mexicanos</CardTitle>
                <CardDescription className="text-base">
                  Optimizado para formatos de estados de cuenta de bancos mexicanos incluyendo Banorte, BBVA, Santander, y más
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
            <h2 className="text-4xl font-bold tracking-tight">Perfecto para Profesionales Financieros</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Confiado por contadores, analistas y dueños de negocios en todo México
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 border-primary/20 hover:border-primary/50 hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Contadores</CardTitle>
                <CardDescription className="text-base">
                  Agiliza la contabilidad de clientes digitalizando rápidamente estados de cuenta y conciliando cuentas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/50 hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Analistas Financieros</CardTitle>
                <CardDescription className="text-base">
                  Extrae datos de transacciones para análisis, reportes y pronósticos financieros con facilidad
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/50 hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Dueños de Negocios</CardTitle>
                <CardDescription className="text-base">
                  Monitorea flujo de efectivo y gastos convirtiendo estados de cuenta en información accionable
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-orange-900 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-4 text-center">
            <div className="space-y-2">
              <p className="text-5xl font-bold">99.8%</p>
              <p className="text-lg opacity-90">Precisión de Extracción</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold">10k+</p>
              <p className="text-lg opacity-90">Estados Procesados</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold">500+</p>
              <p className="text-lg opacity-90">Usuarios Felices</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold">15+</p>
              <p className="text-lg opacity-90">Bancos Soportados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bancos Soportados Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Bancos Soportados</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trabajamos con los principales bancos de México
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">BBVA</CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Santander</CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Banorte</CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Citibanamex</CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">HSBC</CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Scotiabank</CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Inbursa</CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardHeader className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Y proximamente más...</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Casos de Uso Detallados Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Casos de Uso</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Descubre cómo Banky puede ayudarte en tu día a día
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Conciliación Bancaria</CardTitle>
                <CardDescription className="text-base">
                  Extrae automáticamente todas las transacciones de tus estados de cuenta para conciliar con tu contabilidad en minutos en lugar de horas.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Análisis de Gastos</CardTitle>
                <CardDescription className="text-base">
                  Identifica patrones de gasto, categoriza transacciones automáticamente y genera reportes detallados para mejor toma de decisiones.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Auditorías</CardTitle>
                <CardDescription className="text-base">
                  Prepara documentación de auditoría rápidamente con datos estructurados y fácilmente verificables de todos tus movimientos bancarios.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Flujo de Efectivo</CardTitle>
                <CardDescription className="text-base">
                  Monitorea entradas y salidas de efectivo con datos precisos para proyecciones financieras y planeación de capital de trabajo.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Múltiples Clientes</CardTitle>
                <CardDescription className="text-base">
                  Procesa estados de cuenta de múltiples clientes de forma eficiente, manteniendo organizada la información de cada uno por separado.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Database className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Integración Contable</CardTitle>
                <CardDescription className="text-base">
                  Exporta datos en formatos compatibles con tu software contable favorito (CONTPAQi, Aspel, QuickBooks, etc.).
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Preguntas Frecuentes</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Respuestas a las preguntas más comunes sobre Banky
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <HelpCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <CardTitle className="text-lg">¿Qué formatos de archivo soportan?</CardTitle>
                    <CardDescription className="text-base">
                      Actualmente soportamos archivos PDF de estados de cuenta bancarios. Estamos trabajando en agregar soporte para imágenes (JPG, PNG) próximamente.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <HelpCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <CardTitle className="text-lg">¿Mis datos están seguros?</CardTitle>
                    <CardDescription className="text-base">
                      Sí, absolutamente. Utilizamos encriptación de nivel bancario (AES-256) para todos los archivos. Tus documentos se procesan de forma segura y se eliminan automáticamente después de 24 horas.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <HelpCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <CardTitle className="text-lg">¿Cuánto tiempo tarda el procesamiento?</CardTitle>
                    <CardDescription className="text-base">
                      La mayoría de los estados de cuenta se procesan en menos de 30 segundos. Estados de cuenta muy extensos pueden tomar hasta 2 minutos.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <HelpCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <CardTitle className="text-lg">¿Puedo procesar múltiples archivos a la vez?</CardTitle>
                    <CardDescription className="text-base">
                      Sí, puedes subir y procesar múltiples estados de cuenta simultáneamente. El plan gratuito permite hasta 5 archivos por lote, mientras que los planes de pago permiten hasta 50.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <HelpCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <CardTitle className="text-lg">¿Qué pasa si el OCR no puede leer algo correctamente?</CardTitle>
                    <CardDescription className="text-base">
                      Nuestro sistema tiene 99.8% de precisión, pero en casos excepcionales puedes editar manualmente cualquier campo antes de exportar. También puedes reportar errores para que mejoremos nuestros modelos.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <HelpCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <CardTitle className="text-lg">¿Ofrecen API para integración?</CardTitle>
                    <CardDescription className="text-base">
                      Sí, contamos con una API REST completa para integrar Banky directamente en tu sistema. Contacta a nuestro equipo de ventas para más información sobre planes empresariales.
                    </CardDescription>
                  </div>
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
              ¿Listo para Transformar tu Flujo de Trabajo?
            </h2>
            <p className="text-muted-foreground text-xl">
              Únete a cientos de profesionales que usan Banky para procesar estados de cuenta más rápido y con mayor precisión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/login">
                <Button size="lg" className="text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  Comenzar Prueba Gratuita
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2">
                Agendar Demo
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
                Procesamiento profesional de estados de cuenta bancarios para profesionales financieros mexicanos. 
                Transforma PDFs en datos estructurados con precisión impulsada por IA.
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
              <h3 className="font-semibold">Producto</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Características</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Precios</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Integraciones</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Registro de Cambios</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h3 className="font-semibold">Compañía</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Nosotros</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Carreras</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Socios</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-4">
              <h3 className="font-semibold">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Términos de Servicio</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Política de Cookies</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Seguridad</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cumplimiento</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Banky. Todos los derechos reservados. Procesamiento profesional de estados de cuenta bancarios para México.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Estado</a>
              <a href="#" className="hover:text-primary transition-colors">Soporte</a>
              <a href="#" className="hover:text-primary transition-colors">Documentación</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

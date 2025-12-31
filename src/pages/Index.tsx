import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Crown, Lock, ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import heroImage from "@/assets/hero-jet.jpg";
import heroVideo from "@/assets/hero-video.mp4";
import pilotImage from "@/assets/pilot-luggage.jpg";
import terminalImage from "@/assets/terminal.jpg";

const Index = () => {
  const coreValues = [
    { icon: Lock, label: "Discretion" },
    { icon: Zap, label: "Speed" },
    { icon: Shield, label: "Control" },
    { icon: Crown, label: "Prestige" },
  ];

  const services = [
    {
      title: "Private Charter Services",
      description: "Bespoke private jet solutions across continents. Fly on your schedule. Land where airlines cannot.",
    },
    {
      title: "First Class & Business Class Reservations",
      description: "Priority access to premium cabins on global routes. Handled discreetly. Delivered flawlessly.",
    },
    {
      title: "Diplomatic & Executive Travel Management",
      description: "Specialised coordination for ambassadors, government officials, and corporate leaders — from planning to arrival.",
    },
    {
      title: "The RULERS Circle",
      badge: "Invitation Only",
      description: "An exclusive tier reserved for royalty, heads of institutions, and ultra high net worth individuals. Unmatched discretion. Absolute priority. No compromise.",
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={heroImage}
            className="w-full h-full object-cover scale-105"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-gold/40 to-transparent opacity-0 animate-fade-in animation-delay-800" />
        <div className="absolute top-1/3 right-10 w-px h-40 bg-gradient-to-b from-transparent via-gold/40 to-transparent opacity-0 animate-fade-in animation-delay-1000" />

        {/* Content */}
        <div className="relative z-10 container-luxury text-center pt-20">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Eyebrow */}
            <div className="opacity-0 animate-fade-in">
              <span className="inline-flex items-center gap-3 text-xs tracking-[0.4em] uppercase text-gold/80 border border-gold/20 rounded-full px-6 py-2 backdrop-blur-sm bg-gold/5">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse-glow" />
                Private Air Mobility
              </span>
            </div>

            {/* Headline */}
            <h1 className="luxury-heading text-5xl md:text-7xl lg:text-8xl xl:text-[7rem] opacity-0 animate-fade-up animation-delay-200">
              Fly Beyond{" "}
              <span className="gold-gradient">Limits.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-2xl mx-auto opacity-0 animate-fade-up animation-delay-400">
              Private Air Mobility for Those Who Lead.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 opacity-0 animate-fade-up animation-delay-600">
              <Link to="/contact">
                <Button variant="luxury" size="lg" className="group min-w-[240px]">
                  Request Elite Access
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="luxuryOutline" size="lg" className="min-w-[240px]">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 animate-fade-in animation-delay-1000">
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Scroll</span>
          <ChevronDown size={20} className="text-gold animate-float" />
        </div>
      </section>

      {/* Authority Snapshot */}
      <section className="py-28 md:py-36 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="container-luxury relative">
          <ScrollReveal variant="fade-up" duration={800}>
            <div className="max-w-4xl mx-auto text-center">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-gold/60 via-gold/20 to-transparent rounded-full" />
                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light leading-[1.9] tracking-wide pl-8">
                  JETMATAS is a premium air mobility brand serving rulers, diplomats, and high net worth individuals with private charter, first class, and business class travel solutions — delivered with absolute discretion.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--gold)/0.05)_0%,_transparent_70%)]" />
        <div className="container-luxury relative">
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-24">
            {coreValues.map((value, index) => (
              <ScrollReveal key={value.label} variant="zoom-in" delay={index * 100}>
                <div className="group flex flex-col items-center gap-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-card flex items-center justify-center border border-border/60 group-hover:border-gold/40 transition-all duration-500">
                      <value.icon size={24} className="text-gold" strokeWidth={1.5} />
                    </div>
                  </div>
                  <span className="text-xs md:text-sm tracking-[0.3em] uppercase font-light text-foreground/80 group-hover:text-gold transition-colors duration-500">
                    {value.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-gold/40 to-gold/10" />
        <div className="container-luxury">
          <ScrollReveal variant="fade-up" className="text-center mb-20 md:mb-28">
            <span className="inline-block text-xs tracking-[0.4em] uppercase text-gold mb-6">
              Services
            </span>
            <h2 className="luxury-heading text-3xl md:text-5xl lg:text-6xl">
              Tailored Solutions for{" "}
              <br className="hidden md:block" />
              <span className="gold-gradient">Discerning Clients</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} variant="slide-up" delay={index * 100}>
                <div className="elite-card p-8 md:p-10 lg:p-12 rounded-2xl h-full">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <h3 className="text-lg md:text-xl font-display font-medium tracking-wide leading-snug">
                      {service.title}
                    </h3>
                    {service.badge && (
                      <span className="text-[10px] tracking-[0.2em] uppercase text-gold border border-gold/40 rounded-full px-4 py-1.5 whitespace-nowrap bg-gold/5">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="fade-up" delay={400} className="text-center mt-16">
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 text-gold hover:gap-5 transition-all duration-500 text-sm tracking-[0.2em] uppercase font-light"
            >
              View Full Services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* High Class Experience */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <ScrollReveal variant="fade-right">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
                <img 
                  src={pilotImage} 
                  alt="Elite pilot with luggage" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
            </ScrollReveal>

            {/* Content */}
            <div className="lg:pl-8">
              <ScrollReveal variant="fade-left">
                <span className="inline-block text-xs tracking-[0.4em] uppercase text-gold mb-8">
                  Experience
                </span>
              </ScrollReveal>
              <ScrollReveal variant="fade-left" delay={100}>
                <h2 className="luxury-heading text-4xl md:text-5xl lg:text-6xl mb-10 leading-[1.1]">
                  The Experience of Moving{" "}
                  <span className="gold-gradient">Without Friction</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal variant="fade-left" delay={200}>
                <div className="space-y-4 text-lg text-muted-foreground font-light leading-relaxed">
                  <p>At JETMATAS, luxury is not excess.</p>
                  <p>It is freedom, precision, and certainty.</p>
                  <p>Every journey is curated with intention.</p>
                  <p>Every detail handled quietly.</p>
                  <p className="text-foreground pt-4 font-normal">Every movement designed around your control.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-secondary/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--gold)/0.03)_0%,_transparent_50%)]" />
        <div className="container-luxury relative">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <ScrollReveal variant="zoom-in">
              <h2 className="luxury-heading text-5xl md:text-6xl lg:text-8xl">
                Not Luxury.
                <br />
                <span className="gold-gradient">It's Freedom.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={200}>
              <div className="space-y-3 pt-8">
                <p className="text-muted-foreground font-light text-xl md:text-2xl tracking-wide">
                  Save hours. Not minutes.
                </p>
                <p className="text-muted-foreground font-light text-xl md:text-2xl tracking-wide">
                  Fly where airlines cannot.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/30" />
        <div className="container-luxury relative">
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 mb-8">
                <Lock size={28} className="text-gold" strokeWidth={1.5} />
              </div>
              <p className="text-sm tracking-[0.4em] uppercase text-gold font-light mb-6">
                Privacy is non-negotiable.
              </p>
              <p className="text-muted-foreground font-light leading-[1.9] text-base md:text-lg">
                Every engagement with JETMATAS is governed by strict confidentiality, discretion, and secure handling of client information. Your movements remain yours alone.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 md:py-44 lg:py-52 overflow-hidden">
        <ParallaxImage
          src={terminalImage}
          alt="Private jet terminal"
          speed={0.3}
          className="opacity-40"
          overlayClassName="bg-background/90 bg-[radial-gradient(ellipse_at_center,_hsl(var(--gold)/0.08)_0%,_transparent_60%)]"
        />
        <div className="container-luxury relative z-10 text-center">
          <ScrollReveal variant="fade-up">
            <span className="inline-block text-xs tracking-[0.4em] uppercase text-gold mb-8">
              Elite Access
            </span>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100}>
            <h2 className="luxury-heading text-4xl md:text-5xl lg:text-7xl mb-8">
              Move Without{" "}
              <span className="gold-gradient">Compromise.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={200}>
            <p className="text-muted-foreground font-light text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Elite access to JETMATAS is reserved for individuals and institutions that value time, control, and excellence.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={300}>
            <div className="space-y-6">
              <Link to="/contact">
                <Button variant="luxury" size="xl" className="group">
                  Request Elite Access
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground font-light tracking-wide">
                Our team responds personally and discreetly.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Index;

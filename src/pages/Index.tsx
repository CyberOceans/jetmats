import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Crown, Lock } from "lucide-react";
import heroImage from "@/assets/hero-jet.jpg";
import heroVideo from "@/assets/hero-video.mp4";
import jetExterior from "@/assets/jet-exterior.jpg";
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
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background with image fallback */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={heroImage}
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/75 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-luxury text-center pt-20">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="space-y-6">
              <h1 className="luxury-heading text-5xl md:text-7xl lg:text-8xl xl:text-9xl opacity-0 animate-fade-up">
                Fly Beyond Limits.
              </h1>
              <p className="luxury-subtext text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto opacity-0 animate-fade-up animation-delay-200">
                Private Air Mobility for Those Who Lead.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6 opacity-0 animate-fade-up animation-delay-400">
              <Link to="/contact">
                <Button variant="luxury" size="lg" className="group min-w-[220px]">
                  Request Elite Access
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-500" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="luxuryOutline" size="lg" className="min-w-[220px]">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-1000">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-gold/40 to-gold/80" />
        </div>
      </section>

      {/* Authority Snapshot */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-light leading-[1.9] tracking-wide opacity-0 animate-fade-in">
              JETMATAS is a premium air mobility brand serving rulers, diplomats, and high net worth individuals with private charter, first class, and business class travel solutions — delivered with absolute discretion.
            </p>
          </div>
        </div>
      </section>

      {/* Core Value Strip */}
      <section className="py-20 md:py-24 bg-secondary/50 border-y border-border/50">
        <div className="container-luxury">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 lg:gap-28">
            {coreValues.map((value, index) => (
              <div
                key={value.label}
                className="flex flex-col items-center gap-4 opacity-0 animate-slide-up"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <value.icon size={26} className="text-gold" strokeWidth={1.25} />
                <span className="text-xs md:text-sm tracking-[0.25em] uppercase font-light text-foreground/90">
                  {value.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="text-center mb-20 md:mb-28">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6 opacity-0 animate-fade-in">Services</p>
            <h2 className="luxury-heading text-3xl md:text-4xl lg:text-5xl opacity-0 animate-fade-up animation-delay-100">
              Tailored Solutions for <br className="hidden md:block" />Discerning Clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="elite-card p-10 md:p-12 lg:p-14 opacity-0 animate-slide-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <h3 className="text-lg md:text-xl font-normal tracking-wide leading-snug">
                    {service.title}
                  </h3>
                  {service.badge && (
                    <span className="text-[10px] tracking-[0.2em] uppercase text-gold border border-gold/30 px-3 py-1.5 whitespace-nowrap">
                      {service.badge}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link
              to="/services"
              className="inline-flex items-center gap-4 text-gold hover:gap-6 transition-all duration-500 text-sm tracking-[0.2em] uppercase font-light"
            >
              View Full Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* High Class Experience Section */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
          {/* Image Side */}
          <div className="relative h-[60vh] lg:h-auto order-1 lg:order-none">
            <img
              src={jetExterior}
              alt="Private jet in flight"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/20 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-background/20 lg:to-background/60" />
          </div>

          {/* Text Side */}
          <div className="flex items-center bg-background order-2 lg:order-none">
            <div className="container-luxury py-24 lg:py-0 lg:pl-20 xl:pl-28">
              <div className="max-w-lg">
                <p className="text-xs tracking-[0.3em] uppercase text-gold mb-8 opacity-0 animate-fade-in">Experience</p>
                <h2 className="luxury-heading text-3xl md:text-4xl lg:text-5xl mb-10 leading-[1.15] opacity-0 animate-fade-up animation-delay-100">
                  The Experience of Moving Without Friction
                </h2>
                <div className="space-y-5 text-muted-foreground font-light leading-relaxed text-base md:text-lg opacity-0 animate-fade-up animation-delay-200">
                  <p>At JETMATAS, luxury is not excess.</p>
                  <p>It is freedom, precision, and certainty.</p>
                  <p>Every journey is curated with intention.</p>
                  <p>Every detail handled quietly.</p>
                  <p className="text-foreground pt-2">Every movement designed around your control.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="section-padding bg-secondary/30">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="luxury-heading text-4xl md:text-5xl lg:text-7xl opacity-0 animate-fade-up">
              Not Luxury.
              <br />
              <span className="text-gold">It's Freedom.</span>
            </h2>
            <div className="space-y-4 pt-6 opacity-0 animate-fade-up animation-delay-200">
              <p className="text-muted-foreground font-light text-lg md:text-xl tracking-wide">
                Save hours. Not minutes.
              </p>
              <p className="text-muted-foreground font-light text-lg md:text-xl tracking-wide">
                Fly where airlines cannot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality Statement */}
      <section className="py-20 md:py-28 bg-background border-y border-border/50">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-xs tracking-[0.3em] uppercase text-gold font-light">
              Privacy is non-negotiable.
            </p>
            <p className="text-muted-foreground font-light leading-[1.9] text-sm md:text-base">
              Every engagement with JETMATAS is governed by strict confidentiality, discretion, and secure handling of client information. Your movements remain yours alone.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-36 md:py-44 lg:py-52 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={terminalImage}
            alt="Private jet terminal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/95" />
        </div>
        <div className="container-luxury relative z-10 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-8 opacity-0 animate-fade-in">Elite Access</p>
          <h2 className="luxury-heading text-4xl md:text-5xl lg:text-6xl mb-8 opacity-0 animate-fade-up animation-delay-100">
            Move Without Compromise.
          </h2>
          <p className="luxury-subtext text-base md:text-lg max-w-2xl mx-auto mb-14 opacity-0 animate-fade-up animation-delay-200">
            Elite access to JETMATAS is reserved for individuals and institutions that value time, control, and excellence.
          </p>
          <div className="space-y-8 opacity-0 animate-fade-up animation-delay-300">
            <Link to="/contact">
              <Button variant="luxury" size="lg" className="group min-w-[220px]">
                Request Elite Access
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-500" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground font-light tracking-wide">
              Our team responds personally and discreetly.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;

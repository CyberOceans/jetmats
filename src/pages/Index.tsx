import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Crown, Lock } from "lucide-react";
import heroImage from "@/assets/hero-jet.jpg";
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
        {/* Background Image with subtle parallax effect */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury private jet interior"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-luxury text-center pt-24">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="luxury-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl opacity-0 animate-fade-up">
              Fly Beyond Limits.
            </h1>
            <p className="luxury-subtext text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto opacity-0 animate-fade-up animation-delay-200">
              Private Air Mobility for Those Who Lead.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 opacity-0 animate-fade-up animation-delay-400">
              <Link to="/contact">
                <Button variant="luxury" size="lg" className="group">
                  Request Elite Access
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="luxuryOutline" size="lg">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-800">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold/50 to-gold" />
        </div>
      </section>

      {/* Authority Snapshot */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-light leading-relaxed tracking-wide opacity-0 animate-fade-in">
              JETMATAS is a premium air mobility brand serving rulers, diplomats, and high net worth individuals with private charter, first class, and business class travel solutions — delivered with absolute discretion.
            </p>
          </div>
        </div>
      </section>

      {/* Core Value Strip */}
      <section className="py-16 md:py-20 bg-secondary border-y border-border">
        <div className="container-luxury">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24">
            {coreValues.map((value, index) => (
              <div
                key={value.label}
                className="flex flex-col items-center gap-3 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <value.icon size={28} className="text-gold" strokeWidth={1.5} />
                <span className="text-sm md:text-base tracking-[0.2em] uppercase font-light text-foreground">
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
          <div className="text-center mb-16 md:mb-24">
            <h2 className="luxury-heading text-3xl md:text-5xl mb-6">Our Services</h2>
            <p className="luxury-subtext text-lg max-w-xl mx-auto">
              Tailored solutions for discerning clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-8 md:p-10 lg:p-12 border border-border bg-card hover:border-gold/30 transition-all duration-700"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg md:text-xl font-light tracking-wide">
                    {service.title}
                  </h3>
                  {service.badge && (
                    <span className="text-[10px] tracking-[0.15em] uppercase text-gold border border-gold/30 px-2 py-1">
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

          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 text-gold hover:gap-5 transition-all duration-300 text-sm tracking-[0.15em] uppercase"
            >
              View Full Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* High Class Experience Section */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          {/* Image Side */}
          <div className="relative h-[50vh] lg:h-auto order-1 lg:order-none">
            <img
              src={jetExterior}
              alt="Private jet in flight"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent lg:bg-gradient-to-l" />
          </div>

          {/* Text Side */}
          <div className="flex items-center bg-background order-2 lg:order-none">
            <div className="container-luxury py-20 lg:py-0 lg:pl-16 xl:pl-24">
              <div className="max-w-lg">
                <h2 className="luxury-heading text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight">
                  The Experience of Moving Without Friction
                </h2>
                <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                  <p>At JETMATAS, luxury is not excess.</p>
                  <p>It is freedom, precision, and certainty.</p>
                  <p>Every journey is curated with intention.</p>
                  <p>Every detail handled quietly.</p>
                  <p className="text-foreground">Every movement designed around your control.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="luxury-heading text-3xl md:text-5xl lg:text-6xl opacity-0 animate-fade-up">
              Not Luxury.
              <br />
              <span className="text-gold">It's Freedom.</span>
            </h2>
            <div className="space-y-4 pt-8 opacity-0 animate-fade-up animation-delay-200">
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
      <section className="py-16 md:py-20 bg-background border-y border-border">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-light">
              Privacy is non-negotiable.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-base">
              Every engagement with JETMATAS is governed by strict confidentiality, discretion, and secure handling of client information. Your movements remain yours alone.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={terminalImage}
            alt="Private jet terminal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/92" />
        </div>
        <div className="container-luxury relative z-10 text-center">
          <h2 className="luxury-heading text-3xl md:text-5xl lg:text-6xl mb-6">
            Move Without Compromise.
          </h2>
          <p className="luxury-subtext text-base md:text-lg max-w-2xl mx-auto mb-12">
            Elite access to JETMATAS is reserved for individuals and institutions that value time, control, and excellence.
          </p>
          <div className="space-y-6">
            <Link to="/contact">
              <Button variant="luxury" size="lg" className="group">
                Request Elite Access
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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

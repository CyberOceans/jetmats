import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Shield, Clock, Globe, Lock, Sparkles, Zap, Plane, Users, Heart, Building } from "lucide-react";
import heroImage from "@/assets/hero-jet.jpg";
import jetExterior from "@/assets/jet-exterior.jpg";
import terminalImage from "@/assets/terminal.jpg";

const Index = () => {
  const services = [
    {
      icon: Plane,
      title: "Private Jet Charter",
      description: "On-demand access to aircraft worldwide",
    },
    {
      icon: Building,
      title: "Business & Executive Travel",
      description: "Time-critical corporate flight solutions",
    },
    {
      icon: Users,
      title: "Group & VIP Travel",
      description: "Seamless travel for distinguished parties",
    },
    {
      icon: Heart,
      title: "Medical & Emergency Flights",
      description: "Urgent medical transport services",
    },
    {
      icon: Sparkles,
      title: "Concierge Services",
      description: "Complete journey management",
    },
  ];

  const steps = [
    { number: "01", title: "Share Your Itinerary", description: "Tell us your travel requirements" },
    { number: "02", title: "We Source the Ideal Aircraft", description: "Access to our global network" },
    { number: "03", title: "Receive Your Quote", description: "Transparent pricing, no hidden fees" },
    { number: "04", title: "Confirm and Fly", description: "Your journey begins" },
  ];

  const fleetCategories = [
    { name: "Light Jets", passengers: "4-7", use: "Short to medium hauls" },
    { name: "Midsize Jets", passengers: "6-8", use: "Continental travel" },
    { name: "Heavy Jets", passengers: "8-16", use: "Intercontinental flights" },
    { name: "Helicopters", passengers: "2-6", use: "City transfers & scenic" },
  ];

  const whyJetmatas = [
    { icon: Lock, text: "Discreet and confidential service" },
    { icon: Clock, text: "24/7 personalised support" },
    { icon: Globe, text: "Global charter access" },
    { icon: Shield, text: "Safety-focused operations" },
    { icon: Sparkles, text: "Transparent process" },
    { icon: Zap, text: "Fast response time" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury private jet interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-luxury text-center pt-24">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="luxury-heading text-4xl md:text-6xl lg:text-7xl opacity-0 animate-fade-up">
              Fly Private. Fly Without Limits.
            </h1>
            <p className="luxury-subtext text-lg md:text-xl max-w-2xl mx-auto opacity-0 animate-fade-up animation-delay-200">
              Private jet charter services for those who value time, privacy, and precision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 opacity-0 animate-fade-up animation-delay-400">
              <Link to="/contact">
                <Button variant="luxury" size="lg">
                  Request a Quote
                </Button>
              </Link>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <Button variant="luxuryOutline" size="lg">
                  <MessageCircle size={18} />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-800">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold/50 to-gold" />
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <p className="luxury-subtext text-lg md:text-xl leading-relaxed">
              Jetmatas provides seamless access to private aviation through a trusted global network of aircraft, delivering comfort, discretion and efficiency.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 text-gold hover:gap-5 transition-all duration-300 text-sm tracking-[0.15em] uppercase"
            >
              Discover Jetmatas
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="luxury-heading text-3xl md:text-5xl mb-6">Our Services</h2>
            <p className="luxury-subtext text-lg max-w-xl mx-auto">
              Comprehensive private aviation solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-8 md:p-10 border border-border bg-card hover:border-gold/30 transition-all duration-500"
              >
                <service.icon
                  size={32}
                  className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-xl font-light tracking-wide mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-light">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={jetExterior}
            alt="Private jet in flight"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container-luxury relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="luxury-heading text-3xl md:text-5xl mb-6">How It Works</h2>
            <p className="luxury-subtext text-lg max-w-xl mx-auto">
              Four simple steps to your private flight
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center space-y-4">
                <span className="text-5xl md:text-6xl font-light text-gold/30">
                  {step.number}
                </span>
                <h3 className="text-lg font-light tracking-wide">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Categories */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="luxury-heading text-3xl md:text-5xl mb-6">Fleet Categories</h2>
            <p className="luxury-subtext text-lg max-w-xl mx-auto">
              Access to a diverse range of aircraft
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleetCategories.map((category) => (
              <div
                key={category.name}
                className="group p-8 border border-border bg-card hover:border-gold/30 transition-all duration-500 text-center"
              >
                <h3 className="text-lg font-light tracking-wide mb-4">
                  {category.name}
                </h3>
                <p className="text-gold text-sm mb-2">{category.passengers} passengers</p>
                <p className="text-sm text-muted-foreground">{category.use}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-12">
            Aircraft availability depends on route and operator.
          </p>
        </div>
      </section>

      {/* Why Jetmatas */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="luxury-heading text-3xl md:text-5xl mb-6">Why Jetmatas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyJetmatas.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-4 p-6 border-b border-border hover:border-gold/30 transition-colors"
              >
                <item.icon size={24} className="text-gold flex-shrink-0" />
                <span className="text-lg font-light">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={terminalImage}
            alt="Private jet terminal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="container-luxury relative z-10 text-center">
          <h2 className="luxury-heading text-3xl md:text-5xl lg:text-6xl mb-8">
            Ready to fly with Jetmatas?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/contact">
              <Button variant="luxury" size="lg">
                Request a Quote
              </Button>
            </Link>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <Button variant="luxuryOutline" size="lg">
                <MessageCircle size={18} />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;

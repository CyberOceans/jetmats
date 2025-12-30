import { Plane, Building, Users, Crown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Private Charter Services",
      description:
        "Bespoke private jet solutions across continents. Fly on your schedule. Land where airlines cannot.",
      features: ["On-demand access to global fleet", "Light jets to heavy long-range aircraft", "24/7 availability"],
    },
    {
      icon: Building,
      title: "First Class & Business Class Reservations",
      description:
        "Priority access to premium cabins on global routes. Handled discreetly. Delivered flawlessly.",
      features: ["Premium cabin bookings", "Priority confirmation", "Seamless coordination"],
    },
    {
      icon: Users,
      title: "Diplomatic & Executive Travel",
      description:
        "Specialised coordination for ambassadors, government officials, and corporate leaders — from planning to arrival.",
      features: ["Protocol-aware service", "Security coordination", "Ground transportation"],
    },
    {
      icon: Crown,
      title: "The RULERS Circle",
      description:
        "An exclusive tier reserved for royalty, heads of institutions, and ultra high net worth individuals. Unmatched discretion. Absolute priority. No compromise.",
      badge: "Invitation Only",
      features: ["Dedicated liaison", "Priority over all requests", "Complete privacy guarantee"],
    },
  ];

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6 opacity-0 animate-fade-in">Services</p>
            <h1 className="luxury-heading text-4xl md:text-6xl lg:text-7xl mb-8 opacity-0 animate-fade-up animation-delay-100">
              Our Services
            </h1>
            <p className="luxury-subtext text-xl md:text-2xl max-w-2xl opacity-0 animate-fade-up animation-delay-200">
              Comprehensive private aviation solutions for discerning clients.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-secondary/30">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="elite-card p-10 md:p-14 opacity-0 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <service.icon
                    size={32}
                    className="text-gold flex-shrink-0"
                    strokeWidth={1.25}
                  />
                  {service.badge && (
                    <span className="text-[10px] tracking-[0.2em] uppercase text-gold border border-gold/30 px-3 py-1.5">
                      {service.badge}
                    </span>
                  )}
                </div>
                <h2 className="text-xl md:text-2xl font-normal tracking-wide mb-5">
                  {service.title}
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground font-light flex items-center gap-3">
                      <span className="w-1 h-1 bg-gold rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-luxury text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Get Started</p>
          <h2 className="luxury-heading text-3xl md:text-4xl lg:text-5xl mb-8">
            Ready to Experience Elite Air Mobility?
          </h2>
          <p className="luxury-subtext text-base md:text-lg max-w-xl mx-auto mb-12">
            Our team responds personally and discreetly to every enquiry.
          </p>
          <Link to="/contact">
            <Button variant="luxury" size="lg" className="group">
              Request Elite Access
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-500" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;

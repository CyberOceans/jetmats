import { Plane, Building, Users, Crown, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import jetExterior from "@/assets/jet-exterior.jpg";

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
    <main className="overflow-hidden">
      {/* Page Header */}
      <PageHeader
        title="Our"
        titleAccent="Services"
        subtitle="Comprehensive private aviation solutions for discerning clients."
        breadcrumb="Services"
        backgroundImage={jetExterior}
      />

      {/* Services Grid */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
        <div className="container-luxury relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} variant="slide-up" delay={index * 100}>
                <div className="group elite-card p-8 md:p-10 lg:p-12 rounded-2xl h-full">
                  <div className="flex items-start justify-between gap-4 mb-8">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center border border-gold/20 group-hover:border-gold/40 transition-colors duration-500">
                      <service.icon size={24} className="text-gold" strokeWidth={1.5} />
                    </div>
                    {service.badge && (
                      <span className="text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/40 rounded-full px-4 py-2 bg-gold/5">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-medium tracking-wide mb-5">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-4 text-sm text-muted-foreground font-light">
                        <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                          <Check size={12} className="text-gold" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--gold)/0.05)_0%,_transparent_60%)]" />
        <div className="container-luxury relative text-center">
          <ScrollReveal variant="fade-up">
            <span className="inline-block text-xs tracking-[0.4em] uppercase text-gold mb-6">
              Get Started
            </span>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100}>
            <h2 className="luxury-heading text-3xl md:text-5xl lg:text-6xl mb-8">
              Ready to Experience{" "}
              <span className="gold-gradient">Elite Air Mobility?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={200}>
            <p className="text-muted-foreground font-light text-lg md:text-xl max-w-xl mx-auto mb-12">
              Our team responds personally and discreetly to every enquiry.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={300}>
            <Link to="/contact">
              <Button variant="luxury" size="xl" className="group">
                Request Elite Access
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Services;

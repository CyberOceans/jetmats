import { Plane, Building, Users, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Private Jet Charter",
      description:
        "On-demand access to a global network of aircraft. From light jets to heavy long-range jets, we source the perfect aircraft for your journey.",
    },
    {
      icon: Building,
      title: "Business & Executive Travel",
      description:
        "Time-critical flight solutions for corporate clients. Maximise productivity with flexible schedules and complete privacy.",
    },
    {
      icon: Users,
      title: "Group & VIP Travel",
      description:
        "Seamless travel coordination for distinguished parties, sports teams, entertainment tours and private events.",
    },
    {
      icon: Heart,
      title: "Medical & Emergency Flights",
      description:
        "Urgent medical transport and repatriation services. Equipped aircraft and rapid response when time is critical.",
    },
    {
      icon: Sparkles,
      title: "Concierge Services",
      description:
        "Complete journey management including ground transportation, catering preferences and special requests.",
    },
  ];

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="max-w-4xl">
            <h1 className="luxury-heading text-4xl md:text-6xl lg:text-7xl mb-8 opacity-0 animate-fade-up">
              Our Services
            </h1>
            <p className="luxury-subtext text-xl md:text-2xl opacity-0 animate-fade-up animation-delay-200">
              Comprehensive private aviation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <div className="space-y-0">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group py-12 md:py-16 border-b border-border last:border-b-0 hover:bg-card/50 transition-colors -mx-6 md:-mx-12 lg:-mx-16 px-6 md:px-12 lg:px-16"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                  <service.icon
                    size={40}
                    className="text-gold group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-luxury text-center">
          <h2 className="luxury-heading text-3xl md:text-4xl mb-8">
            Ready to Experience Private Aviation?
          </h2>
          <Link to="/contact">
            <Button variant="luxury" size="lg">
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;

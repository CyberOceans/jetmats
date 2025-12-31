import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import jetExterior from "@/assets/jet-exterior.jpg";

const Fleet = () => {
  const fleetCategories = [
    {
      name: "Light Jets",
      passengers: "4–7 passengers",
      range: "Up to 2,500 km",
      description: "Ideal for short to medium haul journeys. Perfect for quick business trips and regional travel.",
      examples: "Citation CJ series, Phenom 300, Premier 1A",
    },
    {
      name: "Midsize Jets",
      passengers: "6–8 passengers",
      range: "Up to 4,500 km",
      description: "The perfect balance of comfort and efficiency. Suitable for continental travel with full stand-up cabins.",
      examples: "Citation XLS, Learjet 60, Hawker 800XP",
    },
    {
      name: "Heavy Jets",
      passengers: "8–16 passengers",
      range: "Up to 12,000 km",
      description: "Maximum comfort for intercontinental flights. Full sleeping arrangements and conference facilities available.",
      examples: "Gulfstream G650, Global 6000, Falcon 7X",
    },
    {
      name: "Helicopters",
      passengers: "2–6 passengers",
      range: "Up to 800 km",
      description: "City-to-city transfers, airport connections and scenic experiences. Flexibility without the runway.",
      examples: "AW109, EC145, Sikorsky S-76",
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* Page Header */}
      <PageHeader
        title="Fleet"
        titleAccent="Categories"
        subtitle="Access to the finest aircraft worldwide."
        breadcrumb="Fleet"
        backgroundImage={jetExterior}
      />

      {/* Fleet Grid */}
      <section className="section-padding bg-secondary/30">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {fleetCategories.map((category, index) => (
              <ScrollReveal key={category.name} variant="slide-up" delay={index * 100}>
                <div className="elite-card p-10 md:p-14 h-full">
                  <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-6">
                    {category.name}
                  </h2>
                  
                  <div className="flex gap-6 mb-6 text-sm">
                    <span className="text-gold">{category.passengers}</span>
                    <span className="text-muted-foreground">{category.range}</span>
                  </div>
                  
                  <p className="text-muted-foreground font-light leading-relaxed mb-8">
                    {category.description}
                  </p>
                  
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground/70">Examples:</span> {category.examples}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="fade-up" delay={400}>
            <div className="mt-16 elite-card p-10 md:p-14 text-center max-w-3xl mx-auto">
              <p className="text-muted-foreground font-light mb-8 leading-relaxed">
                Aircraft availability depends on route, date and operator. We source the optimal aircraft for your specific requirements.
              </p>
              <Link to="/contact">
                <Button variant="luxuryOutline" className="group">
                  Request Aircraft Options
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-500" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Fleet;

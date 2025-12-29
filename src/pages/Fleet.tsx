import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import jetExterior from "@/assets/jet-exterior.jpg";

const Fleet = () => {
  const fleetCategories = [
    {
      name: "Light Jets",
      passengers: "4-7 passengers",
      range: "Up to 2,500 km",
      description: "Ideal for short to medium haul journeys. Perfect for quick business trips and regional travel.",
      examples: "Citation CJ series, Phenom 300, Premier 1A",
    },
    {
      name: "Midsize Jets",
      passengers: "6-8 passengers",
      range: "Up to 4,500 km",
      description: "The perfect balance of comfort and efficiency. Suitable for continental travel with full stand-up cabins.",
      examples: "Citation XLS, Learjet 60, Hawker 800XP",
    },
    {
      name: "Heavy Jets",
      passengers: "8-16 passengers",
      range: "Up to 12,000 km",
      description: "Maximum comfort for intercontinental flights. Full sleeping arrangements and conference facilities available.",
      examples: "Gulfstream G650, Global 6000, Falcon 7X",
    },
    {
      name: "Helicopters",
      passengers: "2-6 passengers",
      range: "Up to 800 km",
      description: "City-to-city transfers, airport connections and scenic experiences. Flexibility without the runway.",
      examples: "AW109, EC145, Sikorsky S-76",
    },
  ];

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative section-padding bg-background overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={jetExterior}
            alt="Private jet in flight"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        </div>
        <div className="container-luxury relative z-10">
          <div className="max-w-4xl">
            <h1 className="luxury-heading text-4xl md:text-6xl lg:text-7xl mb-8 opacity-0 animate-fade-up">
              Fleet Categories
            </h1>
            <p className="luxury-subtext text-xl md:text-2xl opacity-0 animate-fade-up animation-delay-200">
              Access to the finest aircraft worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {fleetCategories.map((category) => (
              <div
                key={category.name}
                className="group p-8 md:p-12 border border-border bg-card hover:border-gold/30 transition-all duration-500"
              >
                <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-6">
                  {category.name}
                </h2>
                
                <div className="flex gap-6 mb-6 text-sm">
                  <span className="text-gold">{category.passengers}</span>
                  <span className="text-muted-foreground">{category.range}</span>
                </div>
                
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  {category.description}
                </p>
                
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground/70">Examples:</span> {category.examples}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 border border-border bg-card text-center">
            <p className="text-muted-foreground font-light mb-6">
              Aircraft availability depends on route, date and operator. We source the optimal aircraft for your specific requirements.
            </p>
            <Link to="/contact">
              <Button variant="luxuryOutline">
                Request Aircraft Options
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Fleet;

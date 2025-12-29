import { Shield, Globe, Lock, Eye } from "lucide-react";

const About = () => {
  const sections = [
    {
      title: "Who We Are",
      content:
        "Jetmatas is a private jet charter broker connecting discerning travellers with premium aircraft operators worldwide. We specialise in delivering bespoke flight solutions with an unwavering focus on quality, discretion and efficiency.",
    },
    {
      title: "What We Do",
      content:
        "We source and arrange private jet charters tailored to your specific requirements. From light jets for short trips to heavy jets for intercontinental travel, we ensure every journey meets the highest standards.",
    },
    {
      title: "Our Commitment",
      content:
        "Excellence is not negotiable. We are committed to providing a seamless experience from the first enquiry to the final destination. Every detail is managed with precision and care.",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety & Discretion",
      description:
        "We partner only with operators who maintain impeccable safety records and adhere to the strictest industry standards.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Access to thousands of aircraft across six continents. Wherever you need to go, we can get you there.",
    },
    {
      icon: Lock,
      title: "Privacy",
      description:
        "Your information remains confidential. We understand that discretion is paramount for our clients.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description:
        "Clear pricing, no hidden fees. You know exactly what you are paying for before you confirm.",
    },
  ];

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="max-w-4xl">
            <h1 className="luxury-heading text-4xl md:text-6xl lg:text-7xl mb-8 opacity-0 animate-fade-up">
              About Jetmatas
            </h1>
            <p className="luxury-subtext text-xl md:text-2xl opacity-0 animate-fade-up animation-delay-200">
              Private aviation, elevated.
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <div className="grid gap-16 md:gap-24">
            {sections.map((section, index) => (
              <div key={section.title} className="max-w-3xl">
                <h2 className="text-sm tracking-[0.2em] uppercase text-gold mb-6">
                  {section.title}
                </h2>
                <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {values.map((value) => (
              <div key={value.title} className="space-y-4">
                <value.icon size={32} className="text-gold" />
                <h3 className="text-xl font-light tracking-wide">
                  {value.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

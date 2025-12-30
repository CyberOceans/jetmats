import { Shield, Globe, Lock, Eye } from "lucide-react";
import jetExterior from "@/assets/jet-exterior.jpg";

const About = () => {
  const sections = [
    {
      label: "Who We Are",
      content:
        "JETMATAS is a discreet air mobility brand connecting influential individuals through private aviation and premium travel coordination.",
    },
    {
      label: "What We Do",
      content:
        "We deliver private charter, premium cabin access, and executive travel solutions with absolute discretion.",
    },
    {
      label: "Our Philosophy",
      content:
        "True power moves quietly. We exist to make movement effortless for those who shape the world.",
    },
    {
      label: "Confidentiality",
      content:
        "Privacy is non-negotiable. Every engagement is handled with strict confidentiality and secure information handling.",
    },
    {
      label: "Global Reach",
      content:
        "Serving clients across regions through a trusted international network of operators and partners.",
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
      title: "Global Network",
      description:
        "Access to thousands of aircraft across six continents. Wherever you need to go, we can get you there.",
    },
    {
      icon: Lock,
      title: "Absolute Privacy",
      description:
        "Your information remains confidential. We understand that discretion is paramount for our clients.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description:
        "Clear communication, no hidden processes. You know exactly what to expect before you confirm.",
    },
  ];

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative section-padding bg-background overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={jetExterior}
            alt="Private jet"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="container-luxury relative z-10">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6 opacity-0 animate-fade-in">About</p>
            <h1 className="luxury-heading text-4xl md:text-6xl lg:text-7xl mb-8 opacity-0 animate-fade-up animation-delay-100">
              About JETMATAS
            </h1>
            <p className="luxury-subtext text-xl md:text-2xl max-w-2xl opacity-0 animate-fade-up animation-delay-200">
              Private air mobility, elevated.
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="section-padding bg-secondary/30">
        <div className="container-luxury">
          <div className="grid gap-20 md:gap-28">
            {sections.map((section, index) => (
              <div 
                key={section.label} 
                className="max-w-3xl opacity-0 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-xs tracking-[0.3em] uppercase text-gold mb-8">
                  {section.label}
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl font-light leading-[1.6] text-foreground">
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
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Our Principles</p>
            <h2 className="luxury-heading text-3xl md:text-4xl">What Defines Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="elite-card p-10 md:p-12 opacity-0 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <value.icon size={28} className="text-gold mb-6" strokeWidth={1.25} />
                <h3 className="text-lg md:text-xl font-normal tracking-wide mb-4">
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

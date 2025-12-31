import { Shield, Globe, Lock, Eye } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHeader from "@/components/PageHeader";
import pilotImage from "@/assets/pilot-luggage.jpg";

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
    <main className="overflow-hidden">
      {/* Page Header */}
      <PageHeader
        title="About"
        titleAccent="JETMATAS"
        subtitle="Private air mobility, elevated."
        breadcrumb="About"
        backgroundImage={pilotImage}
      />

      {/* Sections */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
        <div className="container-luxury relative">
          <div className="max-w-4xl mx-auto space-y-24 md:space-y-32">
            {sections.map((section, index) => (
              <ScrollReveal key={section.label} variant="fade-left" delay={index * 100}>
                <div className="relative">
                  <div className="flex items-start gap-8 md:gap-12">
                    <div className="hidden md:block pt-3">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block text-xs tracking-[0.4em] uppercase text-gold mb-6 md:mb-8">
                        {section.label}
                      </span>
                      <p className="text-2xl md:text-3xl lg:text-4xl font-display font-light leading-[1.4] text-foreground">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--gold)/0.03)_0%,_transparent_60%)]" />
        <div className="container-luxury relative">
          <ScrollReveal variant="fade-up" className="text-center mb-20">
            <span className="inline-block text-xs tracking-[0.4em] uppercase text-gold mb-6">
              Our Principles
            </span>
            <h2 className="luxury-heading text-3xl md:text-5xl">
              What{" "}
              <span className="gold-gradient">Defines Us</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} variant="zoom-in" delay={index * 100}>
                <div className="elite-card p-8 md:p-10 rounded-2xl h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center border border-gold/20 mb-6">
                    <value.icon size={24} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-display font-medium tracking-wide mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

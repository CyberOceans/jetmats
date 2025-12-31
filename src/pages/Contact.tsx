import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, ArrowRight, Mail, Clock, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    departure: "",
    destination: "",
    date: "",
    passengers: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct email body
    const emailBody = `
Elite Access Request

Name: ${formData.name}
Email: ${formData.email}
Phone/WhatsApp: ${formData.phone || 'Not provided'}

Travel Details:
- Departure: ${formData.departure || 'Not specified'}
- Destination: ${formData.destination || 'Not specified'}
- Preferred Date: ${formData.date || 'Not specified'}
- Passengers: ${formData.passengers || 'Not specified'}

Message:
${formData.message || 'No additional message'}
    `.trim();

    // Construct mailto URL
    const mailtoUrl = `mailto:henryeguaroje@gmail.com?subject=${encodeURIComponent(`Elite Access Request from ${formData.name}`)}&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoUrl;

    // Show confirmation toast
    setTimeout(() => {
      toast({
        title: "Email Client Opened",
        description: "Please send the email to complete your request.",
      });
      setIsSubmitting(false);
    }, 500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "charter@jetmatas.com",
      href: "mailto:charter@jetmatas.com",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Quick Contact",
      href: "https://wa.me/1234567890",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 2 hours",
      description: "During business hours",
    },
  ];

  return (
    <main className="pt-24 overflow-hidden">
      {/* Hero */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="container-luxury relative">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-3 text-xs tracking-[0.4em] uppercase text-gold mb-8 opacity-0 animate-fade-in">
              <span className="w-8 h-px bg-gold" />
              Contact
            </span>
            <h1 className="luxury-heading text-4xl md:text-6xl lg:text-7xl mb-8 opacity-0 animate-fade-up animation-delay-100">
              Request{" "}
              <span className="gold-gradient">Elite Access</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl opacity-0 animate-fade-up animation-delay-200">
              Your request is handled personally and discreetly.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
        <div className="container-luxury relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            {/* Contact Info */}
            <div className="lg:col-span-4 space-y-10">
              {contactInfo.map((info, index) => (
                <ScrollReveal key={info.label} variant="fade-right" delay={index * 100}>
                  <div className="group">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center border border-gold/20 group-hover:border-gold/40 transition-colors duration-500">
                        <info.icon size={20} className="text-gold" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-foreground hover:text-gold transition-colors duration-300 font-light"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <>
                            <p className="text-foreground font-light">{info.value}</p>
                            {info.description && (
                              <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              {/* Confidentiality Notice */}
              <ScrollReveal variant="fade-right" delay={400}>
                <div className="pt-8 border-t border-border/50">
                  <div className="flex items-start gap-4">
                    <Shield size={18} className="text-gold mt-1" strokeWidth={1.5} />
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Every enquiry is handled with strict confidentiality. Your information is never shared.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <ScrollReveal variant="fade-up">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="h-14 bg-secondary/50 border-border/60 focus:border-gold/60 rounded-lg text-foreground placeholder:text-muted-foreground/50"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="h-14 bg-secondary/50 border-border/60 focus:border-gold/60 rounded-lg text-foreground placeholder:text-muted-foreground/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block">
                      Phone / WhatsApp
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 890"
                      className="h-14 bg-secondary/50 border-border/60 focus:border-gold/60 rounded-lg text-foreground placeholder:text-muted-foreground/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block">
                        Departure
                      </label>
                      <Input
                        name="departure"
                        value={formData.departure}
                        onChange={handleChange}
                        placeholder="City or airport"
                        className="h-14 bg-secondary/50 border-border/60 focus:border-gold/60 rounded-lg text-foreground placeholder:text-muted-foreground/50"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block">
                        Destination
                      </label>
                      <Input
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="City or airport"
                        className="h-14 bg-secondary/50 border-border/60 focus:border-gold/60 rounded-lg text-foreground placeholder:text-muted-foreground/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block">
                        Preferred Date
                      </label>
                      <Input
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="h-14 bg-secondary/50 border-border/60 focus:border-gold/60 rounded-lg text-foreground"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block">
                        Passengers
                      </label>
                      <Input
                        name="passengers"
                        type="number"
                        min="1"
                        value={formData.passengers}
                        onChange={handleChange}
                        placeholder="Number of passengers"
                        className="h-14 bg-secondary/50 border-border/60 focus:border-gold/60 rounded-lg text-foreground placeholder:text-muted-foreground/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Additional details or special requests"
                      className="w-full bg-secondary/50 border border-border/60 focus:border-gold/60 rounded-lg px-4 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300 resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      variant="luxury"
                      size="xl"
                      disabled={isSubmitting}
                      className="w-full md:w-auto group"
                    >
                      {isSubmitting ? (
                        "Opening Email..."
                      ) : (
                        <>
                          Request Elite Access
                          <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

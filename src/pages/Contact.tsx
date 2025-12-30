import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Request Received",
      description: "Our team will respond personally and discreetly.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      departure: "",
      destination: "",
      date: "",
      passengers: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6 opacity-0 animate-fade-in">Contact</p>
            <h1 className="luxury-heading text-4xl md:text-6xl lg:text-7xl mb-8 opacity-0 animate-fade-up animation-delay-100">
              Request Elite Access
            </h1>
            <p className="luxury-subtext text-xl md:text-2xl max-w-2xl opacity-0 animate-fade-up animation-delay-200">
              Your request is handled personally and discreetly.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {/* Contact Info */}
            <div className="space-y-14">
              <div className="opacity-0 animate-slide-up">
                <p className="text-xs tracking-[0.3em] uppercase text-gold mb-5">
                  Email
                </p>
                <a
                  href="mailto:charter@jetmatas.com"
                  className="text-lg text-foreground hover:text-gold transition-colors duration-300"
                >
                  charter@jetmatas.com
                </a>
              </div>

              <div className="opacity-0 animate-slide-up animation-delay-100">
                <p className="text-xs tracking-[0.3em] uppercase text-gold mb-5">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-lg text-foreground hover:text-gold transition-colors duration-300"
                >
                  <MessageCircle size={20} />
                  Quick Contact
                </a>
              </div>

              <div className="opacity-0 animate-slide-up animation-delay-200">
                <p className="text-xs tracking-[0.3em] uppercase text-gold mb-5">
                  Response Time
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  We typically respond within 2 hours during business hours.
                </p>
              </div>

              <div className="pt-8 border-t border-border opacity-0 animate-slide-up animation-delay-300">
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Every enquiry is handled with strict confidentiality. Your information is never shared.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="opacity-0 animate-slide-up">
                    <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4 block">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div className="opacity-0 animate-slide-up animation-delay-100">
                    <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4 block">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="opacity-0 animate-slide-up animation-delay-200">
                  <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4 block">
                    Phone / WhatsApp
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 890"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="opacity-0 animate-slide-up animation-delay-300">
                    <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4 block">
                      Departure
                    </label>
                    <Input
                      name="departure"
                      value={formData.departure}
                      onChange={handleChange}
                      placeholder="City or airport"
                    />
                  </div>
                  <div className="opacity-0 animate-slide-up animation-delay-400">
                    <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4 block">
                      Destination
                    </label>
                    <Input
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="City or airport"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="opacity-0 animate-slide-up animation-delay-500">
                    <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4 block">
                      Preferred Date
                    </label>
                    <Input
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="opacity-0 animate-slide-up animation-delay-600">
                    <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4 block">
                      Passengers
                    </label>
                    <Input
                      name="passengers"
                      type="number"
                      min="1"
                      value={formData.passengers}
                      onChange={handleChange}
                      placeholder="Number of passengers"
                    />
                  </div>
                </div>

                <div className="opacity-0 animate-slide-up animation-delay-600">
                  <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Additional details or special requests"
                    className="flex w-full border-0 border-b border-border bg-transparent px-0 py-4 text-base text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-gold transition-colors duration-300 resize-none"
                  />
                </div>

                <div className="pt-4 opacity-0 animate-slide-up animation-delay-800">
                  <Button
                    type="submit"
                    variant="luxury"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto group"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Request Elite Access
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-500" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

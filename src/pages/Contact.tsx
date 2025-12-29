import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send } from "lucide-react";
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Request Submitted",
      description: "We will contact you within 24 hours.",
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
            <h1 className="luxury-heading text-4xl md:text-6xl lg:text-7xl mb-8 opacity-0 animate-fade-up">
              Contact
            </h1>
            <p className="luxury-subtext text-xl md:text-2xl opacity-0 animate-fade-up animation-delay-200">
              Request a quote or speak with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h3 className="text-sm tracking-[0.2em] uppercase text-gold mb-4">
                  Email
                </h3>
                <a
                  href="mailto:charter@jetmatas.com"
                  className="text-lg text-foreground hover:text-gold transition-colors"
                >
                  charter@jetmatas.com
                </a>
              </div>

              <div>
                <h3 className="text-sm tracking-[0.2em] uppercase text-gold mb-4">
                  WhatsApp
                </h3>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-lg text-foreground hover:text-gold transition-colors"
                >
                  <MessageCircle size={20} />
                  Quick Contact
                </a>
              </div>

              <div>
                <h3 className="text-sm tracking-[0.2em] uppercase text-gold mb-4">
                  Response Time
                </h3>
                <p className="text-muted-foreground font-light">
                  We typically respond within 2 hours during business hours.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-sm tracking-[0.1em] uppercase text-muted-foreground mb-2 block">
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
                  <div>
                    <label className="text-sm tracking-[0.1em] uppercase text-muted-foreground mb-2 block">
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

                <div>
                  <label className="text-sm tracking-[0.1em] uppercase text-muted-foreground mb-2 block">
                    Phone / WhatsApp
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 890"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-sm tracking-[0.1em] uppercase text-muted-foreground mb-2 block">
                      Departure
                    </label>
                    <Input
                      name="departure"
                      value={formData.departure}
                      onChange={handleChange}
                      placeholder="City or airport"
                    />
                  </div>
                  <div>
                    <label className="text-sm tracking-[0.1em] uppercase text-muted-foreground mb-2 block">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-sm tracking-[0.1em] uppercase text-muted-foreground mb-2 block">
                      Preferred Date
                    </label>
                    <Input
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="text-sm tracking-[0.1em] uppercase text-muted-foreground mb-2 block">
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

                <div>
                  <label className="text-sm tracking-[0.1em] uppercase text-muted-foreground mb-2 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Additional details or special requests"
                    className="flex w-full border-0 border-b border-border bg-transparent px-0 py-4 text-base text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-gold transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="luxury"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Request
                      <Send size={18} />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

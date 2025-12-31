import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, ArrowRight, Mail, Clock, Shield, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import jetImage from "@/assets/jet-exterior.jpg";
import { z } from "zod";

// EmailJS configuration - Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "service_jetmatas";
const EMAILJS_TEMPLATE_ID = "template_elite_access";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

// Form validation schema
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().min(1, "Email is required").email("Please enter a valid email address"),
  phone: z.string().trim().min(1, "Phone number is required").regex(/^[\d\s\+\-\(\)]+$/, "Please enter a valid phone number"),
  departure: z.string().optional(),
  destination: z.string().optional(),
  date: z.string().optional(),
  passengers: z.string().optional(),
  message: z.string().max(1000, "Message must be less than 1000 characters").optional(),
});

type FormErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
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
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name as keyof FormErrors];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof FormErrors] = err.message;
        }
      });
      setErrors(fieldErrors);
      toast({
        title: "Please fix the errors",
        description: "Some required fields need your attention.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      to_email: "henryeguaroje@gmail.com",
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || "Not provided",
      departure: formData.departure || "Not specified",
      destination: formData.destination || "Not specified",
      date: formData.date || "Not specified",
      passengers: formData.passengers || "Not specified",
      message: formData.message || "No additional message",
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
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

      toast({
        title: "Request Submitted",
        description: "We've received your Elite Access request and will respond within 2 hours.",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@jetmatas.com",
      href: "mailto:contact@jetmatas.com",
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
      <section className="section-padding relative overflow-hidden">
        <ParallaxImage
          src={jetImage}
          alt="Private jet"
          speed={0.3}
          className="opacity-20"
          overlayClassName="bg-gradient-to-b from-background via-background/95 to-background"
        />
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
                        placeholder="Your name"
                        className={`h-14 bg-secondary/50 border-border/60 focus:border-gold/60 rounded-lg text-foreground placeholder:text-muted-foreground/50 ${errors.name ? 'border-destructive focus:border-destructive' : ''}`}
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive flex items-center gap-1">
                          <AlertCircle size={12} />
                          {errors.name}
                        </p>
                      )}
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
                        placeholder="your@email.com"
                        className={`h-14 bg-secondary/50 border-border/60 focus:border-gold/60 rounded-lg text-foreground placeholder:text-muted-foreground/50 ${errors.email ? 'border-destructive focus:border-destructive' : ''}`}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive flex items-center gap-1">
                          <AlertCircle size={12} />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block">
                      Phone / WhatsApp *
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 890"
                      className={`h-14 bg-secondary/50 border-border/60 focus:border-gold/60 rounded-lg text-foreground placeholder:text-muted-foreground/50 ${errors.phone ? 'border-destructive focus:border-destructive' : ''}`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.phone}
                      </p>
                    )}
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
                        <>
                          <Loader2 size={18} className="mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : isSubmitted ? (
                        <>
                          <CheckCircle size={18} className="mr-2" />
                          Request Sent
                        </>
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

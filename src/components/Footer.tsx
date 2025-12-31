import { Link } from "react-router-dom";
import { MessageCircle, Shield, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com/jetmatas", icon: Instagram },
    { name: "Twitter", href: "https://x.com/jetmatas", icon: Twitter },
    { name: "LinkedIn", href: "https://linkedin.com/company/jetmatas", icon: Linkedin },
  ];

  return (
    <footer className="relative bg-card border-t border-border/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(var(--gold)/0.02)_0%,_transparent_60%)]" />
      <div className="container-luxury py-20 md:py-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 md:gap-10">
          {/* Brand */}
          <div className="space-y-6 md:col-span-2">
            <Link
              to="/"
              className="text-2xl font-display font-light tracking-[0.2em] text-foreground hover:text-gold transition-colors"
            >
              JETMATAS
            </Link>
            <p className="text-sm text-muted-foreground font-light">
              Private Air Mobility
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/60 hover:bg-gold/5 transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <p className="text-xs tracking-[0.2em] uppercase text-gold">
              Navigation
            </p>
            <div className="flex flex-col gap-4">
              {["About", "Services", "Fleet", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <p className="text-xs tracking-[0.2em] uppercase text-gold">
              Contact
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:contact@jetmatas.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                contact@jetmatas.com
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Confidentiality */}
        <div className="border-t border-border/50 mt-16 pt-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield size={14} className="text-gold" />
            <p className="text-xs text-muted-foreground/60 text-center font-light">
              Privacy is non-negotiable. Every engagement is governed by strict confidentiality.
            </p>
          </div>
          <p className="text-xs text-muted-foreground/40 text-center">
            © {new Date().getFullYear()} JETMATAS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

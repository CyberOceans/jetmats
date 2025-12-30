import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { name: "X", href: "https://x.com/jetmatas" },
    { name: "Instagram", href: "https://instagram.com/jetmatas" },
    { name: "LinkedIn", href: "https://linkedin.com/company/jetmatas" },
    { name: "Facebook", href: "https://facebook.com/jetmatas" },
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container-luxury py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 md:gap-10">
          {/* Brand */}
          <div className="space-y-8 md:col-span-2">
            <Link
              to="/"
              className="text-2xl font-light tracking-[0.25em] text-foreground"
            >
              JETMATAS
            </Link>
            <p className="text-sm text-muted-foreground font-light">
              Private Air Mobility
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-8 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-gold transition-colors duration-300"
                >
                  {social.name}
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground/70 font-light">
              @jetmatas
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-8">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Navigation
            </p>
            <div className="flex flex-col gap-5">
              <Link
                to="/about"
                className="text-sm text-foreground hover:text-gold transition-colors duration-300"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-sm text-foreground hover:text-gold transition-colors duration-300"
              >
                Services
              </Link>
              <Link
                to="/fleet"
                className="text-sm text-foreground hover:text-gold transition-colors duration-300"
              >
                Fleet
              </Link>
              <Link
                to="/contact"
                className="text-sm text-foreground hover:text-gold transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Contact
            </p>
            <div className="flex flex-col gap-5">
              <a
                href="mailto:charter@jetmatas.com"
                className="text-sm text-foreground hover:text-gold transition-colors duration-300"
              >
                charter@jetmatas.com
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-gold transition-colors duration-300 flex items-center gap-2"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Confidentiality */}
        <div className="border-t border-border/50 mt-20 pt-10">
          <p className="text-xs text-muted-foreground/60 text-center font-light leading-relaxed max-w-2xl mx-auto mb-6">
            Privacy is non-negotiable. Every engagement with JETMATAS is governed by strict confidentiality.
          </p>
          <p className="text-xs text-muted-foreground/50 text-center">
            © {new Date().getFullYear()} JETMATAS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

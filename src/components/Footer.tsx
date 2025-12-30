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
    <footer className="bg-secondary border-t border-border">
      <div className="container-luxury py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-6 md:col-span-2">
            <Link
              to="/"
              className="text-2xl font-light tracking-[0.2em] text-foreground"
            >
              JETMATAS
            </Link>
            <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-sm">
              Private Air Mobility
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-gold transition-colors duration-300"
                >
                  {social.name}
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground font-light">
              @jetmatas
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="text-sm tracking-[0.15em] uppercase text-muted-foreground">
              Navigation
            </h4>
            <div className="flex flex-col gap-4">
              <Link
                to="/about"
                className="text-sm text-foreground hover:text-gold transition-colors"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-sm text-foreground hover:text-gold transition-colors"
              >
                Services
              </Link>
              <Link
                to="/fleet"
                className="text-sm text-foreground hover:text-gold transition-colors"
              >
                Fleet
              </Link>
              <Link
                to="/contact"
                className="text-sm text-foreground hover:text-gold transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-sm tracking-[0.15em] uppercase text-muted-foreground">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:charter@jetmatas.com"
                className="text-sm text-foreground hover:text-gold transition-colors"
              >
                charter@jetmatas.com
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-gold transition-colors flex items-center gap-2"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-16 pt-8">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Jetmatas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

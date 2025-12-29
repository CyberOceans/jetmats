import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-luxury py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <Link
              to="/"
              className="text-2xl font-light tracking-[0.2em] text-foreground"
            >
              JETMATAS
            </Link>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Private Jet Charter
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

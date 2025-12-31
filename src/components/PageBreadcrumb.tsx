import { Link } from "react-router-dom";
import terminalImage from "@/assets/terminal.jpg";

interface PageBreadcrumbProps {
  title: string;
  highlight?: string;
  description: string;
}

const PageBreadcrumb = ({ title, highlight, description }: PageBreadcrumbProps) => {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={terminalImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container-luxury relative z-10">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-3 text-xs tracking-[0.4em] uppercase text-gold mb-8 opacity-0 animate-fade-in">
            <span className="w-8 h-px bg-gold" />
            <Link to="/" className="hover:text-gold/80 transition-colors">Home</Link>
            <span className="text-gold/50">/</span>
            {title}
          </span>
          <h1 className="luxury-heading text-4xl md:text-6xl lg:text-7xl mb-8 opacity-0 animate-fade-up animation-delay-100">
            {highlight ? (
              <>
                {title.replace(highlight, "")}{" "}
                <span className="gold-gradient">{highlight}</span>
              </>
            ) : (
              title
            )}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl opacity-0 animate-fade-up animation-delay-200">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageBreadcrumb;

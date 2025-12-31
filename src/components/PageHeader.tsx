import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ParallaxImage from "@/components/ParallaxImage";

interface PageHeaderProps {
  title: string;
  titleAccent?: string;
  subtitle?: string;
  breadcrumb: string;
  backgroundImage: string;
}

const PageHeader = ({ 
  title, 
  titleAccent, 
  subtitle, 
  breadcrumb, 
  backgroundImage 
}: PageHeaderProps) => {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center pt-24 overflow-hidden">
      {/* Background Image with Parallax */}
      <ParallaxImage
        src={backgroundImage}
        alt={title}
        speed={0.3}
        className="opacity-40"
        overlayClassName="bg-gradient-to-b from-background/70 via-background/80 to-background"
      />
      
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--gold)/0.08)_0%,_transparent_50%)]" />
      
      {/* Content */}
      <div className="container-luxury relative z-10">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 opacity-0 animate-fade-in">
            <Link 
              to="/" 
              className="hover:text-gold transition-colors duration-300"
            >
              Home
            </Link>
            <ChevronRight size={14} className="text-gold/50" />
            <span className="text-gold">{breadcrumb}</span>
          </nav>

          {/* Title */}
          <h1 className="luxury-heading text-4xl md:text-6xl lg:text-7xl mb-6 opacity-0 animate-fade-up animation-delay-100">
            {title}
            {titleAccent && (
              <>
                {" "}
                <span className="gold-gradient">{titleAccent}</span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl opacity-0 animate-fade-up animation-delay-200">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default PageHeader;

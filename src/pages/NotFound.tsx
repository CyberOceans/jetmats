import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center pt-24">
      <div className="container-luxury text-center">
        <h1 className="text-8xl md:text-9xl font-light text-gold/30 mb-8">404</h1>
        <h2 className="luxury-heading text-2xl md:text-4xl mb-6">
          Page Not Found
        </h2>
        <p className="luxury-subtext text-lg mb-12 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="luxuryOutline" size="lg">
            Return Home
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;

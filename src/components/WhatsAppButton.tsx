import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/2348021248292?text=Hello%20Jetmatas%20team%2C%20I'd%20like%20to%20request%20elite%20air%20mobility%20access.%20Please%20assist%20me%20with%20my%20travel%20needs."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-gold text-navy p-4 rounded-full shadow-lg shadow-gold/30 hover:bg-gold/90 transition-all duration-300 hover:scale-110 animate-float"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsAppButton;

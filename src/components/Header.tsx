import { Twitter, Facebook, Linkedin } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-hero-bg/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            FIGMA LAND
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-primary-glow transition-colors">
              Home
            </a>
            <a href="#product" className="text-white hover:text-primary-glow transition-colors">
              Product
            </a>
            <a href="#pricing" className="text-white hover:text-primary-glow transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-white hover:text-primary-glow transition-colors">
              About
            </a>
            <a href="#contact" className="text-white hover:text-primary-glow transition-colors">
              Contact
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-primary-glow transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-white hover:text-primary-glow transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-white hover:text-primary-glow transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
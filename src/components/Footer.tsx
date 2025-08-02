import { Twitter, Facebook, Linkedin, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hero-bg text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Pages */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Pages</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a></li>
              <li><a href="#partners" className="text-white/80 hover:text-white transition-colors">Partners</a></li>
              <li><a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Tomothy */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Tomothy</h4>
            <ul className="space-y-4">
              <li><span className="text-white/80">Eleanor Edwards</span></li>
              <li><span className="text-white/80">Ted Robertson</span></li>
              <li><span className="text-white/80">Annette Russell</span></li>
              <li><span className="text-white/80">Jennie Mckinney</span></li>
              <li><span className="text-white/80">Gloria Richards</span></li>
            </ul>
          </div>

          {/* Jane Black */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Jane Black</h4>
            <ul className="space-y-4">
              <li><span className="text-white/80">Philip Jones</span></li>
              <li><span className="text-white/80">Product</span></li>
              <li><span className="text-white/80">Colleen Russell</span></li>
              <li><span className="text-white/80">Marvin Hawkins</span></li>
              <li><span className="text-white/80">Bruce Simmons</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-white/80">7480 Mistwood Hollo</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-white/80">(239) 555-0108</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom border */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            &copy; 2023 FIGMA LAND. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
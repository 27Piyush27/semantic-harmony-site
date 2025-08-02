import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Twitter, Facebook, Linkedin } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Success!
          </h3>
          <p className="text-muted-foreground mb-6">
            Your query sent successfully
          </p>
          <Button onClick={onClose} className="bg-primary hover:bg-primary-hover text-white">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    // Prevent body scroll when modal is open
    document.body.classList.add('body-no-scroll');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    document.body.classList.remove('body-no-scroll');
    setIsModalOpen(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
      <section id="contact" className="py-24 bg-white border-t-4 border-primary">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-muted-foreground">
              Most calendars are designed for teams.
              <br />
              Slate is designed for freelancers
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Contact Us
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 text-lg"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 text-lg"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full p-4 text-lg resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="bg-primary hover:bg-primary-hover text-white px-8 py-4 text-lg font-semibold shadow-button"
                >
                  Send
                </Button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="grid gap-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">
                      6386 Spring St undefined Anchorage,
                    </div>
                    <div className="text-muted-foreground">
                      Georgia 12473 United States
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="w-8 h-8 text-primary" />
                  <div className="font-semibold text-foreground">
                    (843) 555-0130
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="w-8 h-8 text-primary" />
                  <div className="font-semibold text-foreground">
                    willie.jennings@example.com
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="aspect-video rounded-lg overflow-hidden border border-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019284903309!2d-122.419415!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580ae7d3a0767%3A0x5b9b8a9b7c8e8b1!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                />
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-primary-hover transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-primary hover:text-primary-hover transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-primary hover:text-primary-hover transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default ContactSection;
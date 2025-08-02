import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import newsletterIllustration from "@/assets/newsletter-illustration.jpg";
import laptopMockup from "@/assets/laptop-mockup.jpg";

const NewsletterSection = () => {
  return (
    <section className="py-24 bg-newsletter-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Fastest way to organize
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Most calendars are designed for teams. 
                Slate is designed for freelancers
              </p>
              <Button 
                className="bg-primary hover:bg-primary-hover text-white px-6 py-3 shadow-button"
              >
                Try For Free
              </Button>
            </div>
          </div>

          {/* Right content - Laptop mockup */}
          <div className="relative">
            <img 
              src={laptopMockup} 
              alt="Product mockup" 
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>

        {/* Bottom CTA section */}
        <div className="mt-24 border-2 border-primary rounded-lg p-12 bg-white/50 backdrop-blur-sm">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left illustration */}
            <div className="relative">
              <img 
                src={newsletterIllustration} 
                alt="Newsletter illustration" 
                className="w-full max-w-md mx-auto"
              />
            </div>

            {/* Right content */}
            <div className="space-y-6">
              <div className="text-sm text-muted-foreground font-medium">
                At your fingertips
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Lightning fast prototyping
              </h3>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Subscribe to our Newsletter
                </h4>
                <p className="text-muted-foreground mb-4">
                  Available exclusively on Figmaland
                </p>
                <div className="flex gap-3 max-w-md">
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="flex-1"
                  />
                  <Button className="bg-primary hover:bg-primary-hover text-white px-6">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
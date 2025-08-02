import { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      company: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      text: "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.",
      author: "John Doe",
      position: "UI designer"
    },
    {
      company: "Microsoft", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      text: "Slate has revolutionized how we approach project management. The interface is intuitive and the features are exactly what we needed.",
      author: "Jane Smith",
      position: "Product Manager"
    },
    {
      company: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", 
      text: "The simplicity and effectiveness of Slate makes it our go-to tool for planning and organizing our workflow efficiently.",
      author: "Mike Johnson",
      position: "Lead Developer"
    }
  ];

  // Auto-advance testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-24 bg-white border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Testimonials
            </h2>
          </div>

          {/* Testimonial Content */}
          <div className="relative overflow-hidden">
            <div 
              className="testimonial-carousel flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  {/* Company Logo */}
                  <div className="mb-8 flex justify-center">
                    <div className="text-3xl font-bold text-primary">
                      {testimonial.company}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                    {testimonial.text}
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-foreground">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`testimonial-dot ${
                  index === currentSlide ? 'active' : 'inactive'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
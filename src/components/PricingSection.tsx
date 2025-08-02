import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "FREE",
      description: "Organize across all apps by hand",
      price: "0",
      currency: "$",
      period: "Per Month",
      features: [
        "Pricing Feature",
        "Pricing Feature", 
        "Pricing Feature",
        "Pricing Feature",
        "Pricing Feature"
      ],
      buttonText: "Order Now",
      isPopular: false
    },
    {
      name: "STANDARD", 
      description: "Organize across all apps by hand",
      price: "10",
      currency: "$",
      period: "Per Month", 
      features: [
        "Pricing Feature",
        "Pricing Feature",
        "Pricing Feature", 
        "Pricing Feature",
        "Pricing Feature"
      ],
      buttonText: "Order Now",
      isPopular: true
    },
    {
      name: "BUSINESS",
      description: "Organize across all apps by hand", 
      price: "99",
      currency: "$",
      period: "Per Month",
      features: [
        "Pricing Feature",
        "Pricing Feature",
        "Pricing Feature",
        "Pricing Feature", 
        "Pricing Feature"
      ],
      buttonText: "Order Now",
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-hero-bg text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pricing
          </h2>
          <p className="text-xl text-white/80">
            Most calendars are designed for teams.
            <br />
            Slate is designed for freelancers
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative text-center p-8 border-0 transition-all duration-300 hover:-translate-y-2 ${
                plan.isPopular 
                  ? 'bg-primary text-white shadow-button scale-105' 
                  : 'bg-white text-foreground shadow-card'
              }`}
            >
              <CardHeader className="p-0 mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.isPopular ? 'text-white' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.isPopular ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className={`text-6xl font-bold ${plan.isPopular ? 'text-white' : 'text-foreground'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-2xl font-semibold ml-2 ${plan.isPopular ? 'text-white' : 'text-foreground'}`}>
                    {plan.currency}
                  </span>
                  <div className={`text-sm mt-2 ${plan.isPopular ? 'text-white/80' : 'text-muted-foreground'}`}>
                    {plan.period}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center space-x-3">
                      <Check className={`w-5 h-5 ${plan.isPopular ? 'text-white' : 'text-primary'}`} />
                      <span className={plan.isPopular ? 'text-white' : 'text-foreground'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-3 font-semibold transition-all duration-300 ${
                    plan.isPopular
                      ? 'bg-white text-primary hover:bg-white/90'
                      : 'bg-primary text-white hover:bg-primary-hover'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
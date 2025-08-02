import { Type, Database, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Type className="w-12 h-12 text-primary" />,
      title: "OpenType features",
      subtitle: "Variable fonts",
      description: "Slate helps you see how many more days you need to work to reach your financial goal."
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      title: "Design with real data",
      subtitle: "",
      description: "Slate helps you see how many more days you need to work to reach your financial goal."
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Fastest way to",
      subtitle: "take action",
      description: "Slate helps you see how many more days you need to work to reach your financial goal."
    }
  ];

  return (
    <section id="features" className="py-24 bg-section-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Most calendars are designed for teams. 
            <br />
            Slate is designed for freelancers
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-8 border-0 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-card">
              <CardContent className="p-0">
                <div className="mb-6 flex justify-center">
                  {feature.icon}
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  {feature.subtitle && (
                    <h4 className="text-xl font-semibold text-foreground">
                      {feature.subtitle}
                    </h4>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
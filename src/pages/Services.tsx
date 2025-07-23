import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Palette, 
  Monitor, 
  FileText, 
  Shirt, 
  Gift, 
  Megaphone, 
  Users, 
  RotateCcw 
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Brand Strategy Development",
      description: "Strategic brand narratives that define your mission, vision, values, and positioning.",
      features: ["Brand positioning", "Mission & vision development", "Value proposition", "Competitive analysis"]
    },
    {
      icon: Palette,
      title: "Visual Identity Design",
      description: "Timeless logos, color systems, and typography that visually express your brand's character.",
      features: ["Logo design", "Color palette", "Typography system", "Brand guidelines"]
    },
    {
      icon: Monitor,
      title: "Web Design & UX",
      description: "Clean, responsive websites built for both aesthetics and user experience—fully aligned with your brand identity.",
      features: ["Landing page design", "UI/UX design", "Responsive layouts", "Conversion optimization"]
    },
    {
      icon: FileText,
      title: "Printing Services",
      description: "Premium business cards, brochures, banners, and other collateral that leave a lasting impression.",
      features: ["Business cards", "Brochures", "Banners", "Stationery design"]
    },
    {
      icon: Shirt,
      title: "Brand Apparel",
      description: "Custom t-shirts, hats, and other wearable brand pieces that blend fashion with function.",
      features: ["Custom t-shirts", "Branded hats", "Uniforms", "Merchandise design"]
    },
    {
      icon: Gift,
      title: "Promotional Products",
      description: "Branded mugs, tote bags, pens, and more to enhance customer engagement and visibility.",
      features: ["Branded mugs", "Tote bags", "Promotional pens", "Custom gifts"]
    },
    {
      icon: Megaphone,
      title: "Marketing Material Development",
      description: "Cohesive campaign materials—flyers, posters, pitch decks, and social media assets.",
      features: ["Campaign materials", "Social media assets", "Pitch decks", "Advertisement design"]
    },
    {
      icon: Users,
      title: "User Experience Design",
      description: "Consistent and intuitive brand touchpoints—both online and offline.",
      features: ["UX research", "User journey mapping", "Interface design", "Usability testing"]
    },
    {
      icon: RotateCcw,
      title: "Brand Evolution Consulting",
      description: "Guidance through rebrands and brand refreshes, preserving your essence while elevating your image.",
      features: ["Rebrand strategy", "Brand refresh", "Market repositioning", "Legacy preservation"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
            Comprehensive Design Meets Strategic Thinking
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Our work blends clarity, creativity, and consistency across every stage of your brand's evolution.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 animate-fade-in">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-lg mb-6 group-hover:bg-secondary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Build a Timeless Brand?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's work together to create a brand identity that stands the test of time and drives your business forward.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">Book Your Discovery Call</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
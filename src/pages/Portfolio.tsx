import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const categories = ["All", "Logo", "Print", "Web", "Apparel", "Branding"];
  
  const projects = [
    {
      id: 1,
      title: "TechFlow Solutions",
      client: "TechFlow Inc.",
      category: ["Logo", "Branding"],
      description: "Complete brand identity for innovative tech startup",
      services: ["Brand Strategy", "Logo Design", "Visual Identity"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Artisan Coffee Co.",
      client: "Artisan Coffee",
      category: ["Print", "Branding"],
      description: "Packaging and print materials for premium coffee brand",
      services: ["Package Design", "Print Materials", "Brand Guidelines"],
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Wellness Hub",
      client: "Wellness Hub LLC",
      category: ["Web", "Logo"],
      description: "Digital presence and identity for wellness center",
      services: ["Web Design", "Logo Design", "UX Design"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Urban Threads",
      client: "Urban Fashion",
      category: ["Apparel", "Logo"],
      description: "Fashion brand identity and merchandise design",
      services: ["Apparel Design", "Brand Identity", "Merchandise"],
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "EcoGreen Initiative",
      client: "EcoGreen NGO",
      category: ["Print", "Web"],
      description: "Environmental awareness campaign materials",
      services: ["Campaign Design", "Web Design", "Print Materials"],
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Skyline Architecture",
      client: "Skyline Architects",
      category: ["Branding", "Print"],
      description: "Professional services brand transformation",
      services: ["Brand Strategy", "Visual Identity", "Business Materials"],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
            Real Brands. Real Results.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Explore our portfolio of successful brand transformations and see how we help businesses 
            create lasting impressions across every touchpoint.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300 animate-fade-in">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.category.map((cat) => (
                      <Badge key={cat} variant="secondary" className="text-xs">
                        {cat}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.client}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-primary">Services Included:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.services.map((service, index) => (
                        <span key={index} className="text-xs text-muted-foreground">
                          {service}{index < project.services.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </div>
                  </div>
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
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's create something remarkable together. Your brand deserves to stand out and last.
          </p>
          <Button variant="secondary" size="lg">
            Start Your Project Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
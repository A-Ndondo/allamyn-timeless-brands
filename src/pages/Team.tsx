import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Team = () => {
  const teamMembers = [
    {
      name: "Allan Ndondo",
      role: "Founder & Creative Director",
      quote: "Design should feel timeless and honest.",
      bio: "With over 10 years in brand design, Allan leads our creative vision and strategic direction.",
      linkedin: "#",
      email: "allan@allamyn.com",
      initials: "AN"
    },
    {
      name: "Sarah Chen",
      role: "Brand Strategist",
      quote: "Great brands start with great stories.",
      bio: "Sarah helps clients discover their unique brand narrative and positioning strategy.",
      linkedin: "#",
      email: "sarah@allamyn.com",
      initials: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "Visual Designer",
      quote: "Every pixel has a purpose.",
      bio: "Marcus brings visual concepts to life with meticulous attention to detail and craft.",
      linkedin: "#",
      email: "marcus@allamyn.com",
      initials: "MR"
    },
    {
      name: "Priya Patel",
      role: "UX/UI Designer",
      quote: "Design is not just what it looks like—it's how it works.",
      bio: "Priya creates intuitive digital experiences that align perfectly with brand identity.",
      linkedin: "#",
      email: "priya@allamyn.com",
      initials: "PP"
    },
    {
      name: "James Wilson",
      role: "Print Production Specialist",
      quote: "Quality is in the details.",
      bio: "James ensures every printed piece meets our exacting standards for excellence.",
      linkedin: "#",
      email: "james@allamyn.com",
      initials: "JW"
    },
    {
      name: "Emily Foster",
      role: "Account Manager",
      quote: "Client success is our success.",
      bio: "Emily guides clients through every step of their brand journey with care and expertise.",
      linkedin: "#",
      email: "emily@allamyn.com",
      initials: "EF"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
            The Team Behind the Timeless
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            At Allamyn, we believe timeless work comes from collaborative energy. 
            Our team blends design, strategy, and storytelling expertise to deliver branding that lasts.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 animate-fade-in">
                <CardContent className="p-8 text-center">
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-gradient-brand rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto group-hover:scale-105 transition-transform duration-300">
                      {member.initials}
                    </div>
                  </div>
                  
                  {/* Name and Role */}
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-medium mb-4">
                    {member.role}
                  </p>
                  
                  {/* Quote */}
                  <blockquote className="text-muted-foreground italic mb-4 min-h-[48px] flex items-center justify-center">
                    "{member.quote}"
                  </blockquote>
                  
                  {/* Bio */}
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  {/* Contact Links */}
                  <div className="flex items-center justify-center space-x-4">
                    <a 
                      href={member.linkedin}
                      className="text-muted-foreground hover:text-secondary transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-muted-foreground hover:text-secondary transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-brand-neutral">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Our Collaborative Culture
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're more than a team—we're a collective of creative minds united by our passion 
              for timeless design. Every project benefits from our diverse perspectives and 
              collaborative approach.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">10+</div>
                <p className="text-muted-foreground">Years Combined Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">200+</div>
                <p className="text-muted-foreground">Brands Transformed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for 
            timeless design and strategic thinking.
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Work with Our Team?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your brand vision to life with the expertise and 
            passion that defines the Allamyn approach.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
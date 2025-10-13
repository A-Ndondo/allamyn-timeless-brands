import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Target, Lightbulb, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Clock,
      title: "Timelessness",
      description:
        "We create designs that transcend trends and stand the test of time, ensuring your brand remains relevant for years to come.",
    },
    {
      icon: Target,
      title: "Strategy",
      description:
        "Every design decision is backed by strategic thinking, ensuring your brand connects meaningfully with your target audience.",
    },
    {
      icon: Lightbulb,
      title: "Creativity",
      description:
        "We bring fresh perspectives and innovative solutions to every project, making your brand uniquely memorable.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
            Design That Lasts. Stories That Stick.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            At Allamyn, we believe great branding goes beyond aesthetics—it's
            about creating meaningful connections that endure through time.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Philosophy
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                In a world obsessed with the next big thing, we choose to focus
                on what lasts. Allamyn was founded on the belief that truly
                great brands aren't built on trends—they're built on timeless
                principles of clarity, authenticity, and strategic thinking.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We work with visionary entrepreneurs and growing businesses who
                understand that brand identity is more than just a logo—it's the
                foundation of every customer interaction and the cornerstone of
                sustainable growth.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/contact">Start Your Brand Journey</Link>
              </Button>
            </div>

            <div className="relative animate-slide-up">
              <div className="bg-gradient-brand rounded-lg p-8 text-primary-foreground">
                <Quote className="w-12 h-12 text-secondary mb-6" />
                <blockquote className="text-xl font-medium mb-4">
                  "We don't chase trends—we build identities that stand the test
                  of time."
                </blockquote>
                <footer className="text-secondary font-semibold">
                  — Allan Ndondo, Creative Director
                </footer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-brand-neutral">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide every project we take on and every
              relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-elegant transition-all duration-300 animate-fade-in"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-6 mx-auto group-hover:bg-secondary/20 transition-colors">
                    <value.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Meet Allan Ndondo
              </h2>
              <p className="text-xl text-muted-foreground">Creative Director</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-1">
                <div className="aspect-square bg-gradient-brand rounded-lg flex items-center justify-center text-6xl font-bold text-primary-foreground">
                  AN
                </div>
              </div>

              <div className="lg:col-span-2">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  With over a decade of experience in brand design and strategy,
                  Allan leads Allamyn with a clear mission: to help businesses
                  create brand identities that truly last. His background spans
                  across industries, from tech startups to established
                  enterprises, always with a focus on strategic thinking and
                  timeless design.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Allan believes that great branding isn't about following the
                  latest design trends—it's about understanding your audience,
                  clarifying your message, and creating visual systems that
                  communicate with both precision and impact.
                </p>
                <blockquote className="border-l-4 border-secondary pl-6 italic text-lg text-primary">
                  "Every brand has a story worth telling. My job is to help you
                  tell it in a way that resonates today and remains relevant
                  tomorrow."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Build Something Timeless?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's work together to create a brand that stands out today and
            stands the test of time.
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

export default About;

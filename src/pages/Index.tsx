import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Target,
  Palette,
  FileText,
  Shirt,
  ArrowRight,
  CheckCircle,
  Star,
  Quote,
  Monitor,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Index = () => {
  const services = [
    {
      icon: Target,
      title: "Strategy",
      description:
        "Strategic brand narratives that define your mission and positioning.",
    },
    {
      icon: Palette,
      title: "Identity",
      description:
        "Timeless logos and visual systems that express your brand's character.",
    },
    {
      icon: Monitor,
      title: "Web Design",
      description:
        "Clean, responsive websites built for aesthetics and user experience.",
    },
    {
      icon: FileText,
      title: "Print & Apparel",
      description:
        "Premium materials and branded merchandise that leave lasting impressions.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Allamyn transformed our brand from generic to genuinely distinctive. The strategy and design work exceeded all expectations.",
      author: "Alphanette Gemu",
      company: "Gweru City Parking",
      rating: 5,
    },
    {
      quote:
        "Working with Allan and his team was seamless. They understood our vision and brought it to life with incredible attention to detail.",
      author: "Learnmore Nyoni",
      company: "Impact Stories",
      rating: 5,
    },
    {
      quote:
        "The rebrand positioned us perfectly in the market. Our customers immediately noticed the difference and it's driving real results.",
      author: "Tendai Maguwu",
      company: "Hwamanda Communications",
      rating: 5,
    },
  ];

  const features = [
    "Strategic brand positioning",
    "Timeless visual identity",
    "Consistent brand experience",
    "Professional brand guidelines",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center md:bg-center bg-[center_top] bg-no-repeat"
            style={{ backgroundImage: 'url("/BACKDROP BANNER FOR WEB.jpg")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/50 to-background/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <img
                src="/ALLAMYNE XX.png"
                alt="Allamyn"
                className="h-24 md:h-32 lg:h-40 w-auto mx-auto"
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              We Build Brands That{" "}
              <span className="text-secondary">Endure</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
            >
              At Allamyn, we help businesses show up with purpose, polish, and
              presence—across every touchpoint.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link to="/contact" className="flex items-center">
                  Book a Brand Discovery Call
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto"
              >
                <Link to="/portfolio">See Our Work</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive design solutions that blend creativity with
              strategic thinking
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group text-center hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-lg mb-6 mx-auto group-hover:bg-secondary/20 transition-colors">
                      <service.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-brand-neutral">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose Timeless Branding?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                In a world obsessed with trends, we focus on what lasts. Our
                approach creates brand identities that remain relevant and
                impactful for years to come.
              </p>
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <Button size="lg" asChild>
                <Link to="/about">Learn About Our Process</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-brand rounded-lg p-8 text-primary-foreground">
                <Quote className="w-12 h-12 text-secondary mb-6" />
                <blockquote className="text-xl font-medium mb-4">
                  "We don't chase trends—we build identities that stand the test
                  of time."
                </blockquote>
                <footer className="text-secondary font-semibold">
                  — Allan Ndondo, Founder
                </footer>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our clients say about working with Allamyn
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-secondary fill-current"
                        />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <footer>
                      <p className="font-semibold text-primary">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </footer>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-primary py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Build a Timeless Brand?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's work together to create a brand identity that stands out today
            and stands the test of time.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">Book Your Discovery Call</Link>
          </Button>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Index;

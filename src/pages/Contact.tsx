import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Facebook,
  Linkedin,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xovkpdrg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          projectType: formData.projectType,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description:
            "Thank you for reaching out. We'll get back to you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          projectType: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
            Let's Build Something That Lasts
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Whether you're starting fresh or refining your legacy, we're here to
            help you show up clearly and confidently.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Start Your Brand Journey
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Tell us about your project and we'll get back to you with
                    insights and next steps.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="projectType">Project Type</Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("projectType", value)
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="brand-strategy">
                            Brand Strategy
                          </SelectItem>
                          <SelectItem value="visual-identity">
                            Visual Identity
                          </SelectItem>
                          <SelectItem value="web-design">
                            Web Design & UX
                          </SelectItem>
                          <SelectItem value="print-design">
                            Print Design
                          </SelectItem>
                          <SelectItem value="brand-apparel">
                            Brand Apparel
                          </SelectItem>
                          <SelectItem value="full-rebrand">
                            Complete Rebrand
                          </SelectItem>
                          <SelectItem value="consultation">
                            Brand Consultation
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        required
                        rows={6}
                        className="mt-1"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="font-medium text-primary">Email</p>
                      <a
                        href="mailto:hello@allamyn.com"
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        hello@allamyn.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="font-medium text-primary">Phone</p>
                      <a
                        href="tel:+263774519323"
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        +263 774 519 323
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <p className="font-medium text-primary">Address</p>
                      <p className="text-muted-foreground">
                        4 Acacia Avenue
                        <br />
                        Windsor, Gweru
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Discovery Call */}
              <Card className="bg-gradient-brand text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Book a Discovery Call</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-primary-foreground/90">
                    Ready to dive deeper? Schedule a 30-minute discovery call to
                    discuss your brand goals and explore how we can help.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Schedule Call
                  </Button>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    Follow Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/allaminegraphicszw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={24} />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/allamyn/?viewAsMember=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={24} />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Follow our work and get insights into our creative process.
                  </p>
                </CardContent>
              </Card>

              {/* Response Time */}
              <div className="bg-brand-neutral rounded-lg p-6">
                <h3 className="font-semibold text-primary mb-2">
                  Our Commitment
                </h3>
                <p className="text-sm text-muted-foreground">
                  We respond to all inquiries within 24 hours and typically
                  schedule discovery calls within 48 hours of initial contact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

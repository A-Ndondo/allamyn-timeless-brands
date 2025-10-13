import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import Swal from "sweetalert2";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export const EnhancedContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please enter your name",
        confirmButtonColor: "#3085d6",
      });
      return false;
    }

    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please enter a valid email address",
        confirmButtonColor: "#3085d6",
      });
      return false;
    }

    if (!formData.message.trim()) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please enter your message",
        confirmButtonColor: "#3085d6",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      // Here you would typically send the data to your backend
      console.log("Form data:", formData);

      await Swal.fire({
        icon: "success",
        title: "Message Sent Successfully!",
        text: "Thank you for reaching out. We'll get back to you within 24 hours.",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Great!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please try again.",
        confirmButtonColor: "#d33",
        confirmButtonText: "Try Again",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hello@allamyn.com",
      link: "mailto:hello@allamyn.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+263 774 519 323",
      link: "tel:+263774519323",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "4 Acacia Avenue, Windsor, Gweru",
      link: "#",
    },
  ];

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Let's Start a Conversation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to build a timeless brand? Get in touch and let's discuss how
            we can help your business stand out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="mt-2"
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="mt-2"
                        required
                      />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="mt-2"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Label htmlFor="company" className="text-sm font-medium">
                        Company
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Enter your company name"
                        className="mt-2"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project..."
                      className="mt-2 min-h-[120px]"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="pt-4"
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                      ) : (
                        <Send className="w-5 h-5 mr-2" />
                      )}
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Get in Touch
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We're here to help you create a brand that stands the test of
                time. Reach out and let's start building something amazing
                together.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center"
                  >
                    <info.icon className="w-6 h-6 text-secondary" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">
                      {info.title}
                    </h4>
                    <a
                      href={info.link}
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      {info.content}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-lg p-6"
            >
              <h4 className="font-semibold text-primary mb-3">Response Time</h4>
              <p className="text-muted-foreground text-sm">
                We typically respond to all inquiries within 24 hours during
                business days. For urgent matters, please call us directly.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

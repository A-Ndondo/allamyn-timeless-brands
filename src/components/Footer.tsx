import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-primary text-primary-foreground"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/" className="flex items-center space-x-3 mb-4">
                <img
                  src="/ALLAMYNE XX.png"
                  alt="Allamyn"
                  className="h-10 w-auto"
                />
              </Link>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-primary-foreground/80 text-sm leading-relaxed max-w-md"
            >
              We build brands that endure. At Allamyn, we help businesses show
              up with purpose, polish, and presence—across every touchpoint.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 mt-6"
            >
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.facebook.com/allaminegraphicszw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/company/allamyn/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/services", label: "Services" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/about", label: "About" },
                { to: "/team", label: "Team" },
                { to: "/contact", label: "Contact" },
              ].map((link, index) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.to}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              {[
                {
                  icon: Mail,
                  content: (
                    <a
                      href="mailto:hello@allamyn.com"
                      className="hover:text-secondary transition-colors"
                    >
                      hello@allamyn.com
                    </a>
                  ),
                },
                {
                  icon: Phone,
                  content: (
                    <a
                      href="tel:+263774519323"
                      className="hover:text-secondary transition-colors"
                    >
                      +263 774 519 323
                    </a>
                  ),
                },
                {
                  icon: MapPin,
                  content: (
                    <span>
                      4 Acacia Avenue
                      <br />
                      Windsor, Gweru
                    </span>
                  ),
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 text-primary-foreground/80"
                >
                  <item.icon size={16} className="mt-0.5" />
                  {item.content}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 mt-12 pt-8 text-center"
        >
          <p className="text-sm text-primary-foreground/60">
            © 2025 Allamyn. All rights reserved. Timeless branding for lasting
            impact.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import allamynLogo from "@/assets/allamyn-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img 
                src={allamynLogo} 
                alt="Allamyn" 
                className="h-10 w-auto filter brightness-0 invert"
              />
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-md">
              We build brands that endure. At Allamyn, we help businesses show up with purpose, 
              polish, and presence—across every touchpoint.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-secondary transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-primary-foreground/80 hover:text-secondary transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">About</Link></li>
              <li><Link to="/team" className="text-primary-foreground/80 hover:text-secondary transition-colors">Team</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 text-primary-foreground/80">
                <Mail size={16} />
                <a href="mailto:hello@allamyn.com" className="hover:text-secondary transition-colors">
                  hello@allamyn.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-primary-foreground/80">
                <Phone size={16} />
                <a href="tel:+1234567890" className="hover:text-secondary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start space-x-2 text-primary-foreground/80">
                <MapPin size={16} className="mt-0.5" />
                <span>123 Design Street<br />Creative City, CC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Allamyn. All rights reserved. Timeless branding for lasting impact.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
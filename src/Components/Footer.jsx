import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  YoutubeIcon as YouTube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const FooterLink = ({ href, children }) => (
  <a href={href} className="text-gray-600 hover:text-black">{children}</a>
);

const Footer = () => {
  const links = [
    { title: "Shop", items: ["Women", "Men", "New Arrivals", "Sale", "Accessories"] },
    { title: "Help", items: ["Customer Service", "Track Your Order", "Returns & Exchanges", "Shipping Information", "FAQ"] },
    { title: "About", items: ["Our Story", "Careers", "Sustainability", "Press", "Blog"] },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      
      <div className="bg-gray-50 py-10 text-center">
        <h3 className="text-xl font-bold mb-2">Join Our Newsletter</h3>
        <p className="text-gray-600 mb-4">Special offers, giveaways, and deals.</p>
        <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md"
          />
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">Subscribe</button>
        </div>
      </div>

      
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {links.map(({ title, items }) => (
          <div key={title}>
            <h4 className="font-bold text-lg mb-4">{title}</h4>
            <ul className="space-y-2">
              {items.map(item => (
                <li key={item}>
                  <FooterLink href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        ))}

        
        <div>
          <h4 className="font-bold text-lg mb-4">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <MapPin size={18} className="mr-2 text-gray-600" />
              <span className="text-gray-600">123 Fashion Street, New York, NY 10001</span>
            </li>
            <li className="flex items-center">
              <Phone size={18} className="mr-2 text-gray-600" />
              <a href="tel:+1234567890" className="text-gray-600"> (123) 456-7890</a>
            </li>
            <li className="flex items-center">
              <Mail size={18} className="mr-2 text-gray-600" />
              <a href="mailto:info@elegance.com" className="text-gray-600">info@elegance.com</a>
            </li>
          </ul>
          <div className="mt-4">
            <h5 className="font-medium mb-2">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="YouTube"><YouTube size={20} /></a>
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-black text-white py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">ELEGANCE</a>
          <div className="flex space-x-4 text-sm text-gray-400 mb-2 md:mb-0">
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
            <FooterLink href="/accessibility">Accessibility</FooterLink>
          </div>
          <div className="text-sm text-gray-400">&copy; {new Date().getFullYear()} ELEGANCE. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

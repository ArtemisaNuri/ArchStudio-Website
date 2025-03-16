import { Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              ARCH<span className="text-gray-400">STUDIO</span>
            </h3>
            <p className="text-gray-600 mb-4">
              Creating distinctive designs that transform spaces in Tirana.
            </p>
            <div className="flex gap-3">
              {/* Social icons simplified */}
              {["facebook", "instagram", "twitter", "dribbble"].map(
                (platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="h-9 w-9 rounded-full bg-black flex items-center justify-center text-white"
                    aria-label={platform}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {platform === "facebook" && (
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                      )}
                      {platform === "instagram" && (
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      )}
                      {platform === "twitter" && (
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      )}
                      {platform === "dribbble" && (
                        <path d="M19.989 11.572a7.96 7.96 0 0 0-1.573-4.351 9.749 9.749 0 0 0-.92.87 16.08 16.08 0 0 0-3.248 4.795 7.904 7.904 0 0 0 5.741-1.314zM13 7.513c.646 1.33 1.164 2.397 1.68 3.777a13.4 13.4 0 0 1-4.483.753c-.544 0-1.067-.027-1.57-.082a20.25 20.25 0 0 0 4.373-4.448zm-6.866 6.742a7.944 7.944 0 0 0 3.47 3.435 18.502 18.502 0 0 1-1.535-5.245c-.642.151-1.243.345-1.825.59l-.11.022zm12.902-9.88a7.948 7.948 0 0 0-3.477-2.776 10.642 10.642 0 0 1-1.345 2.725c1.622.15 3.184.558 4.822 1.23v-1.18zm-3.602 9.555c-.327.52-.685 1.022-1.063 1.502a7.927 7.927 0 0 0 4.426-2.507 7.874 7.874 0 0 0 1.145-1.984 14.422 14.422 0 0 0-4.508 2.989zm-1.818-8.723a11.95 11.95 0 0 0-2.475-2.647 7.947 7.947 0 0 0-3.807 2.348 13.058 13.058 0 0 1 6.282.3zM6.434 15.403a7.942 7.942 0 0 0 5.492 2.57c.35 0 .698-.027 1.036-.073a19.257 19.257 0 0 0 1.757-2.87 14.209 14.209 0 0 0-8.285.373z" />
                      )}
                    </svg>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                <span className="text-gray-600">
                  Rruga Myslym Shyri, Tirana 1001, Albania
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">+355 69 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">info@archstudio.al</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              {[
                "Projects",
                "Services",
                "About",
                "Contact",
                "Privacy Policy",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-gray-900 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-6 bg-gray-300" />

        <div className="text-sm text-gray-500 text-center">
          <p>© {new Date().getFullYear()} ARCHSTUDIO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

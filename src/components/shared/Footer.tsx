import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "../../contexts/TranslationContext";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold">S</span>
              </div>
              <span className="text-2xl font-bold">SolarStart</span>
            </div>
            <p className="text-slate-400 mb-4">
              {t.footer.aboutText}
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-500 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {[
                t.nav.home,
                t.nav.projects,
                "درباره ما",
                "خدمات",
                t.nav.contact
              ].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`/${
                        item === "Home"
                          ? ""
                          : item.toLowerCase().replace(" ", "-")
                      }`}
                      className="text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">خدمات</h3>
            <ul className="space-y-2">
              {[
                "نور خورشیدی مسکونی",
                "نور خورشیدی تجاری",
                "توسعه مزرعه خورشیدی",
                "نگهداری",
                "ذخیره انرژی",
              ].map((service) => (
                <li
                  key={service}
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.nav.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span className="text-slate-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-slate-400">info@solartstart.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span className="text-slate-400">
                  123 Solar Street, Green City
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
          <p>
            {t.footer.copyright.replace('۲۰۲۴', new Date().getFullYear().toString())}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

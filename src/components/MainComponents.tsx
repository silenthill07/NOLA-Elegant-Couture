
import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { ShoppingBag, Menu, X, Globe, Instagram, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#' },
    { name: t.nav.collection, href: '#collection' },
    { name: t.nav.lookbook, href: '#lookbook' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-brand-beige/80 backdrop-blur-lg py-4 border-b border-brand-olive/10 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col items-center"
        >
          <span className="text-2xl md:text-3xl font-serif font-light tracking-widest text-brand-olive uppercase">
            {t.brandName.split(' ')[0]}
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-sans opacity-60">
            {t.brandName.split(' ').slice(1).join(' ')}
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm uppercase tracking-widest hover:text-brand-olive transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-olive transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-brand-olive transition-all"
          >
            <Globe className="w-4 h-4" />
            <span className="hidden sm:inline">{language === 'en' ? 'العربية' : 'English'}</span>
          </button>
          
          <button className="relative group p-2 rounded-full hover:bg-brand-olive/5 transition-all">
            <ShoppingBag className="w-5 h-5 text-brand-olive" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-olive text-white text-[10px] flex items-center justify-center rounded-full">0</span>
          </button>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-beige border-b border-brand-olive/10 py-10 px-6 md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg uppercase tracking-widest font-serif"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Hero = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Cinematic Visual */}
      <div className="absolute inset-x-0 bottom-0 top-0 z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="w-full h-full relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1539109132381-31a1ecdd2947?auto=format&fit=crop&q=80&w=2000"
            alt="Fashion Couture"
            className="w-full h-full object-cover object-top opacity-30 grayscale-[50%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-beige via-transparent to-brand-beige"></div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid md:grid-cols-2 items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center md:text-start"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block text-xs md:text-sm uppercase tracking-[0.4em] mb-6 font-sans text-brand-olive"
          >
            {t.tagline}
          </motion.span>
          <h1 className="text-5xl md:text-8xl mb-8 leading-[1.1] font-light">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl font-body font-light opacity-80 mb-12 max-w-xl leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="px-10 py-5 bg-brand-olive text-white uppercase tracking-widest text-sm hover:bg-brand-coffee transition-all duration-500 rounded-full luxury-shadow">
              {t.hero.cta}
            </button>
            <a href="#collection" className="text-sm uppercase tracking-widest border-b border-brand-olive/30 pb-1 hover:border-brand-olive transition-all">
               {t.nav.lookbook}
            </a>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9, y: 50 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 1.5 }}
           viewport={{ once: true }}
           className="hidden md:block relative aspect-[4/5] max-w-md mx-auto"
        >
          <div className="absolute inset-0 border border-brand-olive/20 -m-8 rounded-2xl animate-float"></div>
          <img 
             src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
             alt="Couture Detail"
             className="w-full h-full object-cover rounded-2xl shadow-2xl grayscale-[20%]"
          />
          {/* Butterfly SVG element (Decorative) */}
          <div className="absolute -top-12 -right-12 w-24 h-24 text-brand-olive opacity-40 animate-float">
             <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
             </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const LoadingScreen = () => {
    return (
        <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-beige flex flex-col items-center justify-center"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="flex flex-col items-center"
            >
                <h2 className="text-4xl md:text-5xl font-serif text-brand-olive tracking-[0.2em] uppercase">NOLA</h2>
                <div className="w-16 h-[1px] bg-brand-olive mt-4"></div>
            </motion.div>
        </motion.div>
    );
};

export const WhatsAppButton = () => {
    return (
        <motion.a 
            href="https://wa.me/201005509855" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-8 right-8 z-[60] p-4 bg-[#25D366] text-white rounded-full shadow-2xl transition-transform flex items-center justify-center group luxury-shadow"
        >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none"></span>

            <span className="absolute right-full mr-4 px-4 py-2 bg-white text-brand-coffee text-[10px] uppercase tracking-[0.2em] rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-brand-olive/10">
                Talk to our designers
            </span>
        </motion.a>
    );
};

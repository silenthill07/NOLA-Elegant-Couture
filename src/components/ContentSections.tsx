
import React from 'react';
import { useLanguage } from './LanguageContext';
import { motion } from 'motion/react';
import { ArrowRight, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Collection = () => {
    const { t, isRTL } = useLanguage();

    const products = [
        {
            id: 1,
            name: isRTL ? 'فستان زيتوني حرير' : 'Olive Silk Gown',
            price: 'EGP 5,500',
            image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600'
        },
        {
            id: 2,
            name: isRTL ? 'بدلة كلاسيكية بيج' : 'Beige Classic Suit',
            price: 'EGP 4,200',
            image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600'
        },
        {
            id: 3,
            name: isRTL ? 'قفطان ذهبي مطرز' : 'Golden Embroidered Kaftan',
            price: 'EGP 7,800',
            image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=600'
        },
        {
            id: 4,
            name: isRTL ? 'طقم كوتور عصري' : 'Modern Couture Ensemble',
            price: 'EGP 6,100',
            image: 'https://images.unsplash.com/photo-1539109132381-31a1ecdd2947?auto=format&fit=crop&q=80&w=600'
        }
    ];

    return (
        <section id="collection" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <span className="text-xs uppercase tracking-[0.4em] opacity-60 mb-4 block">Haute Couture</span>
                        <h2 className="text-4xl md:text-6xl font-light">{t.collection.title}</h2>
                    </div>
                    <button className="flex items-center gap-4 text-sm uppercase tracking-widest border-b border-brand-olive/30 pb-2 hover:gap-6 transition-all">
                        {t.collection.viewAll}
                        <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6">
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-coffee/0 transition-colors duration-500 group-hover:bg-brand-coffee/20"></div>
                                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full transition-transform duration-500 group-hover:translate-y-0 bg-gradient-to-t from-brand-coffee/80 to-transparent">
                                    <button className="w-full py-3 bg-white text-brand-coffee text-xs uppercase tracking-widest rounded-lg">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <h3 className="text-xl font-serif mb-2">{product.name}</h3>
                            <p className="text-sm font-sans opacity-60 uppercase tracking-widest">{product.price}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const About = () => {
    const { t, isRTL } = useLanguage();
    
    return (
        <section id="about" className="py-32 bg-brand-olive text-white relative overflow-hidden">
             {/* Text Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif opacity-[0.03] select-none whitespace-nowrap pointer-events-none">
                {t.brandName.split(' ')[0]}
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
                <motion.div
                    initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute inset-0 border border-white/20 -m-8 rounded-2xl"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800"
                        alt="Workspace"
                        className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-xs uppercase tracking-[0.4em] mb-6 block text-brand-beige">Luxury Heritage</span>
                    <h2 className="text-5xl md:text-7xl font-light mb-10 leading-tight">
                        {t.brandName}
                    </h2>
                    <p className="text-lg md:text-xl font-body font-light opacity-90 leading-relaxed mb-12">
                        {t.about.content}
                    </p>
                    <div className="grid grid-cols-2 gap-12 border-t border-white/20 pt-12">
                        <div>
                            <h4 className="text-3xl font-serif mb-2">100%</h4>
                            <p className="text-xs uppercase tracking-widest opacity-60">Handmade Quality</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-serif mb-2">Export</h4>
                            <p className="text-xs uppercase tracking-widest opacity-60">Worldwide Shipping</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export const ContactNewsletter = () => {
    const { t, isRTL } = useLanguage();

    return (
        <section id="contact" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-24">
                    {/* Newsletter */}
                    <div className="bg-white p-12 md:p-20 rounded-[48px] luxury-shadow relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-olive/5 rounded-full -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-light mb-6">{t.newsletter.title}</h2>
                            <p className="text-lg font-light opacity-60 mb-10">{t.newsletter.subtitle}</p>
                            <div className="flex gap-4">
                                <input 
                                    type="email" 
                                    placeholder={isRTL ? 'البريد الإلكتروني' : 'Your Email'}
                                    className="flex-1 bg-brand-beige px-6 py-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-olive transition-all"
                                />
                                <button className="px-8 py-4 bg-brand-olive text-white rounded-xl text-sm uppercase tracking-widest hover:bg-brand-coffee transition-all">
                                    {t.newsletter.button}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col justify-center">
                        <span className="text-xs uppercase tracking-[0.4em] mb-6 block opacity-50">Private Concierge</span>
                        <h2 className="text-4xl md:text-6xl font-light mb-12">{t.contact.title}</h2>
                        
                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-white rounded-2xl luxury-shadow">
                                     <Mail className="w-6 h-6 text-brand-olive" />
                                </div>
                                <div>
                                    <h4 className="text-sm uppercase tracking-widest mb-1">Email Support</h4>
                                    <p className="text-lg font-light opacity-70">contact@nolaelegant.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-white rounded-2xl luxury-shadow">
                                     <Phone className="w-6 h-6 text-brand-olive" />
                                </div>
                                <div>
                                    <h4 className="text-sm uppercase tracking-widest mb-1">Phone Line</h4>
                                    <p className="text-lg font-light opacity-70">01005509855</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-white rounded-2xl luxury-shadow">
                                     <Instagram className="w-6 h-6 text-brand-olive" />
                                </div>
                                <div>
                                    <h4 className="text-sm uppercase tracking-widest mb-1">Instagram</h4>
                                    <p className="text-lg font-light opacity-70">@nola.elegant.couture</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Footer = () => {
    const { t } = useLanguage();
    
    return (
        <footer className="bg-brand-beige border-t border-brand-olive/10 py-20 px-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                <h2 className="text-4xl font-serif text-brand-olive mb-6">NOLA</h2>
                <p className="max-w-md text-sm opacity-60 leading-relaxed mb-12">
                    {t.footer.description} {t.tagline}
                </p>
                <div className="flex gap-8 mb-12">
                    <a href="#" className="p-3 bg-white rounded-full hover:bg-brand-olive hover:text-white transition-all luxury-shadow">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 bg-white rounded-full hover:bg-brand-olive hover:text-white transition-all luxury-shadow">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
                <div className="w-full h-px bg-brand-olive/10 mb-8"></div>
                <p className="text-[10px] uppercase tracking-widest opacity-40">
                    © {new Date().getFullYear()} {t.brandName}. {t.footer.rights}
                </p>
            </div>
        </footer>
    );
};

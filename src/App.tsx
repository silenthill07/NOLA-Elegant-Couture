/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './components/LanguageContext';
import { Navbar, Hero, LoadingScreen, WhatsAppButton } from './components/MainComponents';
import { Collection, About, ContactNewsletter, Footer } from './components/ContentSections';
import Luxury3DBackground from './components/Luxury3DBackground';
import { AnimatePresence, motion } from 'motion/react';

const CustomCursor = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 border border-brand-olive rounded-full pointer-events-none z-[9999] hidden md:block"
            animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
            transition={{ type: 'spring', damping: 20, stiffness: 250, restDelta: 0.001 }}
        />
    );
};

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>
      
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative min-h-screen selection:bg-brand-olive/20 selection:text-brand-coffee overflow-hidden"
        >
          <CustomCursor />
          <Luxury3DBackground />
          <Navbar />
          
          <main>
            <Hero />
            <Collection />
            <About />
            <ContactNewsletter />
          </main>

          <Footer />
          <WhatsAppButton />
        </motion.div>
      )}
    </LanguageProvider>
  );
}

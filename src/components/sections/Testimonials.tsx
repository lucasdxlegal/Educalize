import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS_DATA, Testimonial } from "../../types";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000); // Autoplay every 7 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  // Predefined vibrant gradients for stylized teacher avatar background representation
  const gradients = [
    "from-cyan-400 to-blue-500",
    "from-purple-500 to-indigo-600",
    "from-brand-blue to-purple-600",
    "from-blue-600 to-teal-400"
  ];

  return (
    <section id="depoimentos" className="py-24 bg-brand-navy relative overflow-hidden bg-grid-pattern">
      {/* Background glow triggers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3.5 py-1.5 rounded-full border border-brand-cyan/20">
            DEPOIMENTOS DOS PROFESSORES
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Quem Usa, Recomenda Muito!
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base font-light">
            Descubra as histórias reais de profissionais de Educação Física que pouparam dezenas de horas de planejamento semanal e revitalizaram suas aulas lúdicas.
          </p>
        </div>

        {/* Carousel Visual Frame */}
        <div className="max-w-4xl mx-auto relative px-4 md:px-12">
          
          {/* Main testimonial sliding block */}
          <div className="glassmorphism rounded-3xl border border-white/10 p-8 md:p-14 relative overflow-hidden min-h-80 flex flex-col justify-between glow-cyan">
            
            {/* Background design elements */}
            <Quote className="absolute top-8 right-8 w-24 h-24 text-white/5 pointer-events-none" />
            <MessageSquare className="absolute bottom-6 right-8 w-12 h-12 text-brand-cyan/5 pointer-events-none" />

            <div className="relative z-10 text-left">
              
              {/* Star ratings */}
              <div className="flex gap-1 text-brand-gold">
                {[...Array(TESTIMONIALS_DATA[currentIndex].stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* FeedBack Text Content with dynamic key layout for animation triggers */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 40 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 text-gray-200 text-base md:text-xl font-light leading-relaxed italic"
                >
                  "{TESTIMONIALS_DATA[currentIndex].feedback}"
                </motion.p>
              </AnimatePresence>

            </div>

            {/* Author details with transition animation */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-4 text-left"
                >
                  {/* CSS gradient fallback geometric profile photos */}
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${gradients[currentIndex % gradients.length]} flex items-center justify-center text-white font-bold text-sm tracking-wide shadow-md`}>
                    {getInitials(TESTIMONIALS_DATA[currentIndex].name)}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[#f3f4f6]">
                      {TESTIMONIALS_DATA[currentIndex].name}
                    </h4>
                    <p className="text-xs text-brand-cyan mt-0.5">
                      {TESTIMONIALS_DATA[currentIndex].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Button controls inside card */}
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-cyan hover:text-brand-navy text-white transition-all flex items-center justify-center border border-white/5 cursor-pointer active:scale-90"
                  aria-label="Depoimento Anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-cyan hover:text-brand-navy text-white transition-all flex items-center justify-center border border-white/5 cursor-pointer active:scale-90"
                  aria-label="Menu Próximo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-2.5 mt-8">
            {TESTIMONIALS_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === i 
                    ? "bg-brand-cyan w-8 glow-cyan" 
                    : "bg-white/10 hover:bg-white/35"
                }`}
                aria-label={`Ir para depoimento ${i + 1}`}
              ></button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

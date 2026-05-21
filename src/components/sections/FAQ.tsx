import { useState } from "react";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQ_DATA, FAQItem, CTA_LINK } from "../../types";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("f1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-brand-navy relative overflow-hidden bg-grid-pattern">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3.5 py-1.5 rounded-full border border-brand-cyan/20">
            DÚVIDAS FREQUENTES
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base font-light">
            Tem alguma dúvida sobre os materiais de Educação Física Escolar? Consulte as respostas diretas para as principais perguntas dos nossos professores parceiros.
          </p>
        </div>

        {/* FAQs Accordion Stack */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq: FAQItem) => {
            const isOpen = openId === faq.id;
            
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#0b132a] border-brand-cyan/40 shadow-xl shadow-brand-cyan/5"
                    : "bg-white/5 border-white/5 hover:border-white/10"
                }`}
              >
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 flex items-center justify-between text-left cursor-pointer outline-none select-none group"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? "text-brand-cyan" : "text-gray-500 group-hover:text-brand-cyan"}`} />
                    <span className="font-display font-bold text-[#f3f4f6] text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  
                  <div className={`p-1 rounded-full transition-all duration-300 shrink-0 ${isOpen ? "bg-brand-cyan text-brand-navy" : "bg-white/5 text-gray-400"}`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" strokeWidth={2.5} /> : <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />}
                  </div>
                </button>

                {/* Sub Content area */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-white/5">
                        <p className="text-gray-300 font-light text-xs sm:text-sm leading-relaxed pl-9">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support contact conversion trigger */}
        <div className="mt-12 text-center p-6 rounded-2xl glassmorphism border border-white/5 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="font-display font-bold text-white text-base">Ainda tem alguma dúvida específica?</h4>
            <p className="text-xs text-gray-400">Nossa equipe de suporte está online para te ajudar a qualquer momento.</p>
          </div>
          
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-xs font-bold font-display uppercase tracking-wider flex items-center justify-center gap-2 group transition-all"
          >
            Falar pelo Chat
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}

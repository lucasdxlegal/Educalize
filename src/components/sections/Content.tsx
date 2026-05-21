import { useState } from "react";
import { ChevronDown, Plus, Minus, BookOpen, Layers, Check, Download, Bookmark } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CONTENT_ACCORDION_DATA, ContentAccordionItem, CTA_LINK } from "../../types";

export default function Content() {
  const [openId, setOpenId] = useState<string | null>("c1");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="conteudo" className="py-24 bg-brand-luxury relative overflow-hidden">
      {/* Visual glowing effects */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3.5 py-1.5 rounded-full border border-brand-cyan/20">
            CONTEÚDO COMPLETO
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            Explore Todos os Módulos do Nosso Acervo
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base font-light">
            Clique em cada um dos módulos abaixo para revelar em detalhes o que você receberá imediatamente no seu e-mail assim que realizar a inscrição.
          </p>
        </div>

        {/* Content Structure Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Stacked Booklets / Kit Showcase Card */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="p-8 rounded-2xl glassmorphism border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl"></div>
              
              <span className="text-[10px] font-mono font-bold tracking-wider text-brand-cyan uppercase">DENTRO DO KIT</span>
              <h3 className="font-display font-extrabold text-2xl text-white mt-1">Materiais Preparados de Forma Prática</h3>
              <p className="text-xs text-gray-400 mt-2 font-light leading-relaxed">
                Todas as nossas apostilas digitais são editáveis e fáceis de imprimir, garantindo autonomia pedagógica completa.
              </p>

              {/* Graphical Stack representation of the PDF files */}
              <div className="relative mt-8 h-48 select-none flex items-center justify-center">
                
                {/* PDF Stack Card 3 */}
                <div className="absolute w-[80%] aspect-[4/3] rounded-xl bg-[#090d19] border border-white/10 shadow-lg -rotate-6 translate-y-6 scale-90 p-4 text-left flex flex-col justify-between">
                  <span className="text-[8px] text-gray-500 font-mono">PDF 03 • BNCC</span>
                  <p className="font-bold text-white/50 text-[10px] truncate">Modelo Planejamento Escolar</p>
                </div>

                {/* PDF Stack Card 2 */}
                <div className="absolute w-[80%] aspect-[4/3] rounded-xl bg-[#131b33] border border-brand-cyan/20 shadow-xl rotate-3 translate-y-3 scale-95 p-4 text-left flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <span className="text-[8px] text-brand-cyan font-mono font-bold">PDF 02 • COMPLETO</span>
                    <Bookmark className="w-3 h-3 text-brand-cyan" />
                  </div>
                  <p className="font-bold text-white/80 text-xs truncate">Coordenação Motora Prática</p>
                </div>

                {/* PDF Stack Card 1 (Top Layer) */}
                <div className="absolute w-[80%] aspect-[4/3] rounded-xl bg-gradient-to-tr from-brand-blue to-cyan-500 p-5 text-left flex flex-col justify-between shadow-2xl shadow-brand-cyan/20 cursor-pointer hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex justify-between items-start">
                    <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center">
                      <BookOpen className="w-4.5 h-4.5 text-white" />
                    </div>
                    <span className="text-[9px] font-bold text-brand-navy bg-white px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Livre Baixável
                    </span>
                  </div>
                  <div>
                    <span className="text-[8px] font-mono text-cyan-200 uppercase tracking-widest block">Apostila Completa</span>
                    <h4 className="font-display font-extrabold text-sm text-white leading-tight mt-0.5 truncate">
                      320 Jogos Escolares Recreativos
                    </h4>
                  </div>
                </div>

              </div>

              {/* Stack Features List */}
              <div className="space-y-2.5 pt-4 text-left border-t border-white/5 mt-6">
                {[
                  "Arquivos editáveis no Word e PDF",
                  "Diagramação limpa e profissional",
                  "Textos prontos para copiar e colar",
                  "Garantia de atualização vitalícia"
                ].map((txt, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs text-gray-300">
                    <Check className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span className="font-light">{txt}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href={CTA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-brand-blue hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-[0_0_15px_rgba(37,99,235,0.25)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Download className="w-4 h-4 text-white" />
                  Garantir Acesso Completo
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Premium Accordion list */}
          <div className="lg:col-span-7 space-y-4">
            {CONTENT_ACCORDION_DATA.map((accordion: ContentAccordionItem) => {
              const isOpen = openId === accordion.id;
              
              return (
                <div 
                  key={accordion.id}
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? "bg-brand-navy/60 border-brand-cyan/40 shadow-lg shadow-brand-cyan/5" 
                      : "bg-white/5 border-white/5 hover:border-white/10"
                  }`}
                >
                  {/* Trigger head */}
                  <button
                    onClick={() => toggleAccordion(accordion.id)}
                    className="w-full p-5 flex items-center justify-between text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      {/* Small index block */}
                      <span className={`text-xs font-mono font-bold ${isOpen ? "text-brand-cyan" : "text-gray-500"}`}>
                        {accordion.id.replace("c", "MOD ")}
                      </span>

                      <span className="font-display font-extrabold text-[#f3f4f6] text-base md:text-lg tracking-tight group-hover:text-brand-cyan transition-colors">
                        {accordion.title}
                      </span>
                    </div>

                    <div className={`p-1 rounded-full transition-transform duration-300 ${isOpen ? "bg-brand-cyan text-brand-navy rotate-185" : "bg-white/5 text-gray-400"}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Accordion expand block */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-6 pt-1 border-t border-white/5 text-left space-y-4">
                          <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                            {accordion.description}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                            {accordion.items.map((subItem, sIdx) => (
                              <div key={sIdx} className="flex items-start gap-2.5">
                                <div className="w-4 h-4 rounded bg-brand-cyan/15 flex items-center justify-center shrink-0 mt-0.5 border border-brand-cyan/20">
                                  <Check className="w-2.5 h-2.5 text-brand-cyan" strokeWidth={3} />
                                </div>
                                <span className="text-xs text-gray-300 font-light leading-snug">{subItem}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

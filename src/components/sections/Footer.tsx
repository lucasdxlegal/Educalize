import React from "react";
import { GraduationCap, ArrowRight, ShieldCheck, Star } from "lucide-react";
import { CTA_LINK, NAV_LINKS } from "../../types";

export default function Footer() {
  const scrollToTopAndSelect = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer id="final-cta" className="relative bg-brand-luxury overflow-hidden">
      
      {/* 1. CINEMATIC FINAL CTA PANEL */}
      <div className="py-20 relative border-b border-white/5">
        
        {/* Abstract space-age ambient glowing filters */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-br from-brand-blue/15 via-brand-cyan/20 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glassmorphic-light border border-brand-cyan/35 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
            <span className="text-xs font-bold font-display tracking-widest text-brand-cyan uppercase">
              Vagas Com Desconto Limitadas
            </span>
          </div>

          <h3 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight max-w-2xl mx-auto">
            Pronto para Dar a Melhor Aula da Sua Carreira?
          </h3>
          
          <p className="text-gray-300 font-light text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Junte-se a mais de 8.400 professores que transformaram suas rotinas diárias com planos didáticos de alto impacto pedagógico.
          </p>

          {/* Large CTA conversion button */}
          <div className="pt-2">
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-white text-black font-bold font-display text-lg rounded-2xl tracking-wide transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto mx-auto shadow-2xl overflow-hidden hover:scale-[1.02] active:scale-98"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white"></div>
              <span className="relative flex items-center gap-2">
                SIM, QUERO FACILITAR MINHAS AULAS JÁ!
                <ArrowRight className="w-5.5 h-5.5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </span>
            </a>
          </div>

          {/* Social reassurance badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-light text-gray-400">
            <div className="flex items-center gap-1.5 text-brand-gold">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-white font-medium">4.9/5 de Avaliação</span>
            </div>

            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-cyan" />
              <span>Garantia de Reembolso completa de 7 dias</span>
            </div>
          </div>

        </div>
      </div>

      {/* 2. MAIN FOOTER INFORMATION */}
      <div className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Grid section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-between">
            
            {/* Logo area */}
            <div className="md:col-span-5 text-left space-y-4">
              <a href="#" onClick={(e) => scrollToTopAndSelect(e, "#")} className="inline-flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-cyan flex items-center justify-center shadow-md">
                  <GraduationCap className="w-5.5 h-5.5 text-brand-navy" strokeWidth={2.5} />
                </div>
                <div>
                  <span className="font-display font-black text-lg tracking-tight text-white uppercase">
                    EDUCALIZE
                  </span>
                  <p className="text-[9px] tracking-widest text-gray-500 font-medium leading-none">
                    EDUCAÇÃO FÍSICA ESCOLAR
                  </p>
                </div>
              </a>

              <p className="text-xs text-gray-400 font-light leading-relaxed max-w-sm">
                Uma marca focada em trazer materiais práticos de altíssimo nível acadêmico para ajudar professores do ensino fundamental e médio. Sem enrolação pedagógica complicada.
              </p>
            </div>

            {/* Links area */}
            <div className="md:col-span-7 flex flex-wrap gap-x-8 gap-y-4 justify-start md:justify-end text-xs font-medium text-gray-400">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToTopAndSelect(e, link.href)}
                  className="hover:text-brand-cyan transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

          </div>

          {/* Legal notes & Secure Seals */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Copyright block */}
            <div className="text-left text-[11px] text-gray-500 font-light space-y-1">
              <p>© 2026 Educalize. Todos os direitos reservados.</p>
              <p>Os materiais comercializados por este site são direcionados ao aperfeiçoamento pessoal e docente.</p>
            </div>

            {/* Security SSL & Payments mockup seals */}
            <div className="flex flex-wrap items-center gap-4 text-gray-500 text-[10px] uppercase font-mono">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/3 border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
                <span>Pagamento 100% Seguro</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/3 border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>
                <span>Dados Criptografados SSL</span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </footer>
  );
}

import { Check, ShieldCheck, CreditCard, Sparkles, AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import { CTA_LINK } from "../../types";

export default function Offer() {
  const offerInclusions = [
    "Planos de Aula Estruturados (BNCC)",
    "Jogos Educativos Dinâmicos",
    "Atividades Práticas de Alta Integração",
    "Conteúdo Atualizado Continuamente",
    "Acesso Vitalício Garantido",
    "Certificado Válido de 80h Incluso"
  ];

  return (
    <section id="oferta" className="py-24 relative bg-brand-luxury overflow-hidden">
      {/* Background massive lighting visual glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-cyan/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-brand-blue/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#a1a1aa] uppercase bg-white/5 px-4 py-1.5 rounded-full border border-white/5">
            INSCREVA-SE JÁ
          </span>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            Tudo o que você precisa para transformar suas aulas por apenas{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-blue">
              R$ 19,90
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base font-light">
            Tenha acesso imediato ao material completo com certificado válido de 80 horas. Taxa única sem futuras assinaturas abusivas.
          </p>
        </div>

        {/* Pricing Layout Modules */}
        <div className="max-w-xl mx-auto">
          
          <motion.div 
            initial={{ scale: 0.97, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="relative rounded-3xl bg-[#090d1e] border-2 border-brand-cyan/50 p-8 sm:p-12 shadow-2xl shadow-brand-cyan/10 glow-cyan text-left"
          >
            {/* Top Glowing Badges */}
            <div className="absolute -top-4 left-6 right-6 flex justify-between gap-2 pointer-events-none">
              <span className="bg-gradient-to-r from-brand-gold to-yellow-600 text-brand-navy font-black text-[10px] tracking-widest uppercase px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-brand-navy" />
                Oferta Especial
              </span>
              <span className="bg-brand-cyan text-brand-navy font-black text-[10px] tracking-widest uppercase px-3.5 py-1.5 rounded-full shadow-md">
                Acesso Imediato
              </span>
            </div>

            {/* Price Heading */}
            <div className="pb-6 border-b border-white/5 mt-2">
              <span className="text-xs font-mono uppercase tracking-widest text-gray-500 line-through">
                De R$ 97,00
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-base sm:text-xl font-bold text-gray-400">Por apenas</span>
                <span className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight">
                  R$ 19,90
                </span>
                <span className="text-xs text-brand-cyan font-semibold px-2 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/20">
                  Taxa Única
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-2 font-light">
                * Sem pegadinhas, sem mensalidades. Pague uma vez e acesse para sempre.
              </p>
            </div>

            {/* Grid checklist inclusions */}
            <div className="py-8 space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">O QUE VOCÊ VAI RECEBER:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {offerInclusions.map((inc, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-brand-cyan/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-brand-cyan" strokeWidth={3} />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-100">{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* BIG CALL TO ACTION COVERSION BUTTON */}
            <div>
              <a
                href={CTA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full py-5 bg-white text-black font-display font-black text-center text-base sm:text-lg rounded-2xl overflow-hidden transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:scale-[1.02] active:scale-98"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white"></div>
                <span className="relative flex items-center gap-2">
                  QUERO ACESSAR AGORA
                </span>
              </a>
            </div>

            {/* Reassurance seals under CTA button */}
            <div className="pt-6 border-t border-white/5 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-gray-400">
              
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-brand-cyan" />
                <div className="text-left leading-tight">
                  <span className="font-semibold text-white block">Garantia Incondicional</span>
                  <span>7 dias para testar material</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-gray-400" />
                <span>Pix, Cartão de Crédito e Boleto</span>
              </div>

            </div>

          </motion.div>

          {/* Secure Purchase alert banner below card */}
          <div className="mt-6 flex gap-2.5 items-center justify-center text-[11px] text-gray-400 font-light max-w-sm mx-auto bg-white/3 border border-white/5 py-2.5 px-4 rounded-full">
            <AlertCircle className="w-4 h-4 text-[#ffc107]" />
            <span>Compra 100% protegida e criptografada</span>
          </div>

        </div>

      </div>
    </section>
  );
}

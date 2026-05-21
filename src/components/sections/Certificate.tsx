import { Award, CheckCircle, ShieldCheck, Star } from "lucide-react";
import { motion } from "motion/react";
import { CTA_LINK } from "../../types";

export default function Certificate() {
  const highlights = [
    { label: "Válido em todo o Brasil", desc: "Emitido em conformidade com as diretrizes de cursos livres (MEC)." },
    { label: "Carga horária de 80h", desc: "Ideal para preencher horas complementares e progredir em concursos." },
    { label: "Enriquecimento Curricular imediato", desc: "Destaque-se em seleções e processos de contratação de escolas privadas." },
    { label: "Aprovado em concursos públicos", desc: "Use para pontuação em títulos de acordo com as especificações do edital." }
  ];

  return (
    <section id="certificado" className="py-24 bg-brand-navy relative overflow-hidden bg-grid-pattern">
      {/* Premium lighting effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[70%] bg-gradient-to-r from-brand-blue/10 via-brand-cyan/5 to-transparent rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT SIDE: LUXURY PHYSICAL EDUCATION CERTIFICATE MOCKUP */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Elegant light projection behind the certificate */}
            <div className="absolute inset-0 bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none scale-90"></div>

            {/* Simulated Luxury Diploma Container */}
            <motion.div 
              initial={{ rotate: -1, y: 10, opacity: 0 }}
              whileInView={{ rotate: 1, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="w-full max-w-xl aspect-[1.414/1] bg-[#fafaf9] rounded-xl shadow-2xl p-6 sm:p-10 border-[10px] border-[#1e293b] text-brand-navy relative flex flex-col justify-between overflow-hidden"
            >
              {/* Gold Filigree Double Border Inside Certificate */}
              <div className="absolute inset-2 border border-brand-gold/40 rounded-sm pointer-events-none"></div>
              <div className="absolute inset-3.5 border-2 border-brand-gold/60 rounded-sm pointer-events-none"></div>

              {/* Top Crest Banner */}
              <div className="text-center relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border-2 border-brand-gold flex items-center justify-center mb-2 bg-[#fafaf9]">
                  <Award className="w-7 h-7 text-brand-gold" strokeWidth={1.5} />
                </div>
                <h4 className="font-display font-medium tracking-widest text-[#1e293b] text-base md:text-lg">
                  CERTIFICADO DE CONCLUSÃO
                </h4>
                <div className="w-16 h-[1.5px] bg-brand-gold/60 mt-1"></div>
              </div>

              {/* Main Credentials details */}
              <div className="text-center relative z-10 my-4 space-y-3">
                <p className="text-[10px] md:text-xs text-[#6b7280] font-serif uppercase tracking-wider">
                  Certificamos para os devidos fins legais que
                </p>
                
                {/* Student's Custom Name Line Placeholder */}
                <div className="py-1 border-b border-[#d1d5db] max-w-sm mx-auto">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-[#1e293b] tracking-wide py-1 italic">
                    Prof. Educador de Elite
                  </h3>
                </div>

                <p className="text-[9px] md:text-[11px] text-[#4b5563] leading-relaxed max-w-md mx-auto font-sans font-light">
                  concluiu com êxito todas as etapas de leitura e formação do material exclusivo de 
                  <strong className="text-brand-navy font-semibold px-1">Educação Física Escolar - Educalize</strong>, 
                  com total aproveitamento pedagógico curricular técnico e prático.
                </p>
              </div>

              {/* Bottom Metadata & Shiny Gold Seal */}
              <div className="flex justify-between items-end relative z-10 mt-2">
                {/* Signatures simulation */}
                <div className="text-left space-y-1">
                  <div className="w-24 h-[1px] bg-brand-navy/30"></div>
                  <span className="text-[7px] md:text-[8px] text-[#9ca3af] block uppercase tracking-widest leading-none">Educalize Brasil</span>
                  <span className="text-[8px] md:text-[9px] text-[#1e293b] font-serif font-semibold block leading-none">Coordenação Geral</span>
                </div>

                {/* Shiny Gold Seal element */}
                <div className="relative flex items-center justify-center scale-90 sm:scale-105">
                  <div className="absolute w-12 h-12 rounded-full bg-gradient-to-tr from-brand-gold to-yellow-300 animate-spin-slow shadow-lg shadow-brand-gold/30"></div>
                  <div className="absolute w-10.5 h-10.5 rounded-full bg-[#fafaf9] border-2 border-brand-gold flex items-center justify-center font-display font-extrabold text-[10px] text-brand-gold">
                    80h
                  </div>
                  {/* Silk ribbons */}
                  <div className="absolute -bottom-4 right-1 w-2.5 h-6 bg-brand-gold/80 rotate-12 origin-top rounded-b-sm pointer-events-none"></div>
                  <div className="absolute -bottom-4 right-4 w-2.5 h-6 bg-brand-gold/60 -rotate-12 origin-top rounded-b-sm pointer-events-none"></div>
                </div>

                {/* Date & Registry simulation */}
                <div className="text-right space-y-1">
                  <span className="text-[8px] text-[#4b5563] block">Registro de Autenticidade: UB-4091</span>
                  <span className="text-[7px] text-[#9ca3af] font-mono block">MCE/LEI 9.394/96 CNV</span>
                </div>
              </div>

              {/* Corner elegant gold shapes */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-brand-gold/40"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-brand-gold/40"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-brand-gold/40"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-brand-gold/40"></div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: CONVERSION HIGHLIGHTS */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div>
              <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3.5 py-1.5 rounded-full border border-brand-cyan/20">
                PROVADA LEGALIDADE
              </span>
              <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Alavanque sua Carreira e Potencialize seu Currículo
              </h2>
              <p className="mt-4 text-gray-300 text-base font-light leading-relaxed">
                Além de poupar tempo, o material capacita você como professor de referência. Com a conclusão, solicite sua via digital autenticada sem taxas extras adicionais.
              </p>
            </div>

            {/* List of certification benefits */}
            <div className="space-y-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5">
                  <div className="w-10 h-10 rounded-full bg-brand-cyan/10 flex items-center justify-center shrink-0 border border-brand-cyan/20">
                    <CheckCircle className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white text-base">
                      {item.label}
                    </h4>
                    <p className="text-xs text-gray-400 mt-0.5 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Micro warning legal details */}
            <div className="flex gap-3 items-center p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 max-w-lg">
              <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0" />
              <p className="text-[11px] text-gray-300 font-light leading-snug">
                Nossos certificados virtuais seguem rigorosamente as leis brasileiras de cursos de aperfeiçoamento livre (Lei nº 9.394/96 Diretrizes da Educação).
              </p>
            </div>

            {/* Call to action */}
            <div className="pt-2">
              <a
                href={CTA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-blue hover:bg-blue-500 text-white font-bold text-base rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:scale-105 active:scale-95"
              >
                Garantir Material + Certificado
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

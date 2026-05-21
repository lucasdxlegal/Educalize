import { Sparkles, Check, Star, ArrowRight, Play, BookOpen, Trophy, Shield, Layers, FileText } from "lucide-react";
import { motion } from "motion/react";
import { CTA_LINK, LESSONS_DATA } from "../../types";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-brand-navy flex items-center bg-grid-pattern"
    >
      {/* Background glow filters */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-cyan/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/10 w-96 h-96 bg-brand-blue/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: HIGH-CONVERTING COPY */}
          <motion.div 
            id="hero-copy"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glassmorphic-light border border-brand-cyan/25">
              <Sparkles className="w-4 h-4 text-brand-cyan animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-cyan">
                Material completo para professores
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants}
              className="font-display font-extrabold text-4xl sm:text-5xl xl:text-6xl text-white tracking-tight leading-tight"
            >
              Facilite suas Aulas de{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-indigo-300 font-extrabold">
                Educação Física
              </span>{" "}
              Escolar com Materiais Prontos
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              variants={itemVariants}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl font-light"
            >
              Tenha acesso imediato a atividades práticas, planos de aula, jogos escolares e conteúdos organizados para tornar suas aulas mais dinâmicas, profissionais e extremamente engajantes.
            </motion.p>

            {/* Benefits Checklist */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
            >
              {[
                "Atividades prontas para aplicar",
                "Planos de aula organizados (BNCC)",
                "Certificado válido de 80h",
                "Acesso 100% imediato por e-mail",
                "Conteúdo sempre atualizado"
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center border border-brand-blue/30 shrink-0">
                    <Check className="w-3.5 h-3.5 text-brand-blue" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium text-slate-200">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-5 pt-4"
            >
              <a
                href={CTA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-2xl justify-center w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white"></div>
                <span className="relative flex items-center gap-2">
                  Quero Começar Agora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                </span>
              </a>

              <div className="flex flex-col text-left">
                <span className="text-amber-400 font-bold text-2xl tracking-tight">R$ 19,90</span>
                <span className="text-[10px] text-slate-500 line-through uppercase tracking-tighter">De R$ 97,00</span>
              </div>
            </motion.div>

            {/* Micro-Social Proof Real Statistics */}
            <motion.div 
              variants={itemVariants}
              className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <div>
                <dt className="text-sm font-medium text-gray-400">Comunidade</dt>
                <dd className="text-xl font-bold text-white flex items-center gap-1.5 mt-0.5">
                  <span>8.400+</span>
                  <span className="text-xs text-brand-cyan font-medium px-1.5 py-0.5 rounded bg-brand-cyan/10">Professores</span>
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-400">Confiança</dt>
                <dd className="text-xl font-bold text-white flex items-center gap-1.5 mt-0.5">
                  <span>4.9 / 5.0</span>
                  <div className="flex gap-0.5 text-brand-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-gray-400">Profissionalismo</dt>
                <dd className="text-xl font-bold text-white flex items-center gap-1 mt-0.5">
                  <Trophy className="w-5 h-5 text-brand-gold" />
                  <span>Certificado 80h</span>
                </dd>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: PREMIUM CINEMATIC LAPTOP/PLATFORM VISUAL */}
          <motion.div 
            id="hero-visual"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="lg:col-span-6 relative w-full flex justify-center items-center"
          >
            {/* Electric Glow Behind Laptop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-brand-blue/20 via-brand-cyan/15 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative w-full max-w-2xl">
              
              {/* LAPTOP / MEMBERS AREA ENVELOPE */}
              <div className="relative rounded-2xl border border-white/10 bg-[#0c142c] overflow-hidden shadow-2xl p-2 glow-cyan">
                {/* Simulated Macbook Screen Bezel Header */}
                <div className="flex items-center justify-between px-3 py-2 bg-brand-navy/60 border-b border-white/5 rounded-t-xl mb-1">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="text-[10px] text-gray-500 font-mono tracking-wider">
                    app.educalize.com/painel
                  </div>
                  <div className="w-8"></div>
                </div>

                {/* Simulated Platform Dashboard Area inside Laptop */}
                <div className="grid grid-cols-12 gap-2 h-76 md:h-96 overflow-hidden rounded-b-xl bg-[#030712] text-left text-xs text-gray-200">
                  
                  {/* Sidebar */}
                  <div className="col-span-3 bg-[#080d1a] p-3 border-r border-white/5 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-1.5 pb-2 border-b border-white/5">
                        <div className="w-4 h-4 bg-brand-cyan rounded flex items-center justify-center">
                          <span className="text-[9px] text-brand-navy font-bold">E</span>
                        </div>
                        <span className="text-[10px] font-bold tracking-tight text-white hidden sm:block">Educalize</span>
                      </div>
                      
                      <div className="space-y-1">
                        {[
                          { name: "Início", active: false },
                          { name: "Atividades", active: true },
                          { name: "Planos de Aula", active: false },
                          { name: "Jogos Escolares", active: false },
                          { name: "Vídeos", active: false },
                          { name: "Certificado", active: false }
                        ].map((item, index) => (
                          <div 
                            key={index}
                            className={`p-1.5 rounded cursor-pointer transition-colors flex items-center gap-1.5 ${
                              item.active 
                                ? "bg-brand-blue/20 text-brand-cyan font-semibold border-l-2 border-brand-cyan pl-1" 
                                : "text-gray-400 hover:text-white"
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0"></span>
                            <span className="text-[9px] truncate hidden sm:block">{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-1.5 glassmorphic-light rounded-lg border border-white/5 text-[8px] text-gray-400 text-center hidden sm:block">
                      <p className="font-semibold text-white">Taxa Única</p>
                      <p className="mt-0.5 text-brand-cyan">Acesso Vitalício</p>
                    </div>
                  </div>

                  {/* Main Content Pane inside laptop */}
                  <div className="col-span-9 p-3 relative space-y-3 overflow-y-auto">
                    <div className="flex items-center justify-between pb-2 border-b border-white/5">
                      <div>
                        <h4 className="font-bold text-white text-xs sm:text-sm">Painel de Atividades</h4>
                        <p className="text-[8px] sm:text-[10px] text-gray-400">Atividades Práticas de Educação Física Escolar</p>
                      </div>
                      <div className="text-[10px] font-mono font-semibold text-brand-cyan">
                        80h Conteúdo
                      </div>
                    </div>

                    {/* Miniature Dashboard Cards Grid */}
                    <div className="grid grid-cols-2 gap-2">
                      {LESSONS_DATA.map((lesson) => (
                        <div key={lesson.id} className="p-2 rounded bg-white/5 border border-white/5 hover:border-brand-cyan/30 transition-all flex flex-col justify-between h-20 sm:h-24">
                          <div className="flex justify-between items-start">
                            <span className="text-[8px] px-1 py-0.5 rounded bg-brand-blue/30 text-brand-cyan font-bold scale-90 origin-left">
                              {lesson.category}
                            </span>
                            <button className="w-4 h-4 rounded-full bg-brand-cyan text-brand-navy flex items-center justify-center hover:scale-110 transition-transform">
                              <Play className="w-2.5 h-2.5 fill-current" />
                            </button>
                          </div>
                          
                          <div>
                            <p className="font-semibold text-white text-[9px] sm:text-[11px] leading-tight mt-1 truncate">
                              {lesson.title}
                            </p>
                            <span className="text-[7px] sm:text-[9px] text-gray-400 block mt-0.5">
                              {lesson.duration}
                            </span>
                            
                            {/* Small Progress Bar */}
                            <div className="w-full bg-white/10 h-1 rounded-full mt-1.5 overflow-hidden">
                              <div 
                                className="bg-brand-cyan h-1 rounded-full" 
                                style={{ width: `${lesson.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Ambient Glow Mask inside laptop */}
                    <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-brand-navy to-transparent pointer-events-none"></div>
                  </div>

                </div>
              </div>

              {/* FLOATING DECORATIVE GLASS CARD 1 - E-book Mockup */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-8 glassmorphism p-3 rounded-2xl w-36 shadow-2xl border border-white/10 hidden sm:block hover:shadow-brand-cyan/20 cursor-pointer"
              >
                <div className="w-full aspect-[4/5] bg-gradient-to-tr from-brand-blue to-cyan-500 rounded-lg p-2 flex flex-col justify-between text-left">
                  <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center">
                    <BookOpen className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h5 className="text-[9px] font-extrabold text-white tracking-widest leading-none">EDUCAÇÃO</h5>
                    <p className="text-[8px] text-brand-cyan font-mono tracking-tight leading-tight mt-0.5">320 Atividades</p>
                  </div>
                </div>
                <div className="mt-2 text-left">
                  <span className="text-[10px] font-bold text-white block">E-book Prático</span>
                  <span className="text-[8px] text-brand-cyan font-mono">100% Baixável PDF</span>
                </div>
              </motion.div>

              {/* FLOATING DECORATIVE GLASS CARD 2 - Certificate Success Toast */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-8 glassmorphism p-3 rounded-2xl w-44 shadow-2xl border border-white/10 flex items-center gap-3 hover:shadow-brand-gold/10 cursor-pointer text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center shrink-0">
                  <Trophy className="w-5.5 h-5.5 text-brand-gold" />
                </div>
                <div>
                  <span className="text-[8px] font-semibold tracking-wider text-brand-gold/90 uppercase block">Certificado</span>
                  <span className="font-bold text-white text-[11px] block leading-tight">Validade de 80h</span>
                  <span className="text-[7px] text-gray-400 block mt-0.5">Enriquecedor de Currículo</span>
                </div>
              </motion.div>

              {/* FLOATING DECORATIVE GLASS CARD 3 - Live Status/Guarantees */}
              <motion.div 
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-10 right-4 glassmorphism px-3.5 py-2.5 rounded-full shadow-lg border border-white/10 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping"></span>
                <span className="w-2 h-2 rounded-full bg-brand-cyan absolute left-3.5 top-3.5"></span>
                <span className="text-[10px] font-bold text-white tracking-wide">Acesso Imediato Vitalício</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

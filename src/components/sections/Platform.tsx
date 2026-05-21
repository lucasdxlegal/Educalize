import React, { useState } from "react";
import { Download, Monitor, FileText, Check, Search, Filter, PlayCircle, Eye, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CTA_LINK } from "../../types";

type TabType = "dashboard" | "pdfs" | "videos" | "planner";

export default function Platform() {
  const [activeTab, setActiveTab] = useState<TabType>("dashboard");
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const triggerDownloadSimulation = (id: string) => {
    if (downloadingId) return;
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
    }, 2000);
  };

  const tabs: { id: TabType; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: "dashboard", label: "Área de Membros", icon: Monitor },
    { id: "pdfs", label: "PDFs Baixáveis", icon: Download },
    { id: "videos", label: "Videoaulas e Jogos", icon: PlayCircle },
    { id: "planner", label: "Planejador BNCC", icon: FileText }
  ];

  const categoryTags = ["Educação Infantil", "Fundamental I", "Fundamental II", "Inclusão", "Recreação", "BNCC Completo"];

  return (
    <section id="painel" className="py-24 bg-brand-luxury relative overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#a1a1aa] uppercase bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
            PLATAFORMA PREMIUM
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Uma Experiência de Aprendizado de Elite
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base font-light">
            Desenvolvemos um ecossistema 100% digital, rápido e intuitivo. Navegue por categorias de forma fluida, e faça downloads de materiais estruturados de forma organizada.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 border-b border-white/5 pb-6">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-brand-blue to-brand-cyan text-brand-navy shadow-lg shadow-brand-cyan/20 scale-105"
                    : "bg-white/5 text-gray-400 hover:text-white border border-white/5"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-brand-navy" : "text-gray-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Tab Visual Screen */}
        <div className="glassmorphism rounded-2xl border border-white/10 p-4 md:p-8 shadow-2xl relative">
          
          <AnimatePresence mode="wait">
            
            {/* AREA DE MEMBROS (dashboard) */}
            {activeTab === "dashboard" && (
              <motion.div
                key="dashboard-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left"
              >
                <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-brand-cyan/10 border border-brand-cyan/25">
                      <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                      <span className="text-[10px] font-mono font-bold tracking-wide text-brand-cyan uppercase">Área VIP Exclusiva</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white">Ambiente Completo Amigável</h3>
                    <p className="text-gray-300 text-sm font-light leading-relaxed">
                      Assista aos vídeos demonstrativos e acesse o acervo de planos organizados por faixa etária com poucos cliques. Sem complicação ou formulários cansativos.
                    </p>
                    <ul className="space-y-2 text-xs text-gray-400 font-light">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-brand-cyan" /> Suporte humanizado para dúvidas
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-brand-cyan" /> Painel leve otimizado para celulares
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-brand-cyan" /> Atualizações de novas gincanas automotivas
                      </li>
                    </ul>
                  </div>

                  <a
                    href={CTA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full justify-center px-6 py-3.5 bg-brand-blue hover:bg-blue-500 text-white rounded-xl text-xs font-bold font-display uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.25)] hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Entrar na Área de Membros
                  </a>
                </div>

                {/* Dashboard Showcase Mockup Screen */}
                <div className="lg:col-span-8 bg-[#040815] rounded-xl border border-white/5 p-4 relative overflow-hidden min-h-76 flex flex-col justify-between">
                  
                  {/* Top search & Filter bar simulations */}
                  <div className="flex flex-col sm:flex-row justify-between gap-3 border-b border-white/5 pb-4">
                    <div className="relative flex-1">
                      <Search className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                      <input 
                        type="text" 
                        placeholder="Pesquisar por BNCC, circuito, futsal, recreação..." 
                        disabled
                        className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/5 rounded-lg text-xs text-white" 
                      />
                    </div>
                    
                    <div className="flex gap-2 shrink-0">
                      <div className="px-3 py-2 bg-white/5 border border-white/5 rounded-lg flex items-center gap-1.5 text-[11px] text-gray-400">
                        <Filter className="w-3 h-3 text-brand-cyan" /> Filtrar
                      </div>
                    </div>
                  </div>

                  {/* Filter tags preview */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {categoryTags.map((tag, idx) => (
                      <span key={idx} className={`text-[10px] font-medium px-2 py-1 rounded-full ${idx === 0 ? "bg-brand-cyan/20 text-brand-cyan font-bold" : "bg-white/5 text-gray-400"}`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Body Items list */}
                  <div className="space-y-2 mt-4 flex-1">
                    {[
                      { title: "Plano Bimestral Completo - Educação Infantil", format: "PDF Completo", size: "12.4 MB" },
                      { title: "Circuito de Equilíbrio e Psicomotricidade", format: "Guia + Vídeo", size: "8.2 MB" },
                      { title: "Gincanas Cooperativas de Alta Integração", format: "PDF • BNCC", size: "4.5 MB" }
                    ].map((item, idx) => (
                      <div key={idx} className="p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/5 flex items-center justify-between text-xs transition-transform duration-200 hover:scale-[1.01]">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-brand-cyan/15 flex items-center justify-center border border-brand-cyan/20">
                            <FileText className="w-4.5 h-4.5 text-brand-cyan" />
                          </div>
                          <div>
                            <p className="font-semibold text-white leading-snug">{item.title}</p>
                            <span className="text-[10px] text-gray-400 mt-0.5 block">{item.format} • {item.size}</span>
                          </div>
                        </div>

                        <button 
                          onClick={() => triggerDownloadSimulation(`d-${idx}`)}
                          className={`px-3 py-1.5 rounded-md text-[10px] font-bold tracking-wide transition-all ${
                            downloadingId === `d-${idx}`
                              ? "bg-green-500/20 text-green-400 border border-green-500/30"
                              : "bg-white/5 hover:bg-brand-cyan hover:text-brand-navy text-gray-200"
                          }`}
                        >
                          {downloadingId === `d-${idx}` ? "Baixado !" : "Baixar"}
                        </button>
                      </div>
                    ))}
                  </div>
                  
                </div>
              </motion.div>
            )}

            {/* PDFs DOWNLOAD (pdfs) */}
            {activeTab === "pdfs" && (
              <motion.div
                key="pdfs-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left"
              >
                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-brand-gold/10 border border-brand-gold/25">
                    <FileText className="w-3.5 h-3.5 text-brand-gold" />
                    <span className="text-[10px] font-mono font-bold tracking-wide text-brand-gold uppercase">Materiais Impressos</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">Baixe e Imprima com Facilidade</h3>
                  <p className="text-gray-300 text-sm font-light leading-relaxed">
                    Nossos arquivos estão todos diagramados em tamanhos prontos para folhas A4. Imprima as atividades lúdicas ou envie o manual no celular da equipe de recreação.
                  </p>
                  <p className="text-gray-400 text-xs font-light">
                    O material é estruturado com textos em tamanho legível e imagens didáticas explicativas que facilitam a aplicação mesmo para quem nunca deu aula de recreação.
                  </p>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-cyan/20 text-brand-cyan flex justify-center items-center shrink-0">
                      <Check className="w-3 h-3 text-brand-cyan" strokeWidth={3} />
                    </div>
                    <p className="text-xs text-gray-300 font-light">Os arquivos vêm formatados em alta definição para evitar distorções nas impressoras comuns.</p>
                  </div>
                </div>

                {/* PDF Cards Simulation list */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "30 Gincanas Clássicas", pages: "45 Páginas", desc: "Competições organizadas com pontuações estruturadas." },
                    { name: "Circuito Psicomotor Infantil", pages: "32 Páginas", desc: "Apostila com desenhos didáticos de linhas de cones." },
                    { name: "Modelo de Relatório BNCC", pages: "15 Páginas", desc: "Modelos editáveis com parecer descritivo de rendimento." },
                    { name: "Regras de Esportes Adaptados", pages: "28 Páginas", desc: "Ideal para ensinar inclusão prática de forma cooperativa." }
                  ].map((card, i) => (
                    <div key={i} className="p-5 rounded-xl bg-white/5 border border-white/5 hover:border-brand-cyan/30 transition-all flex flex-col justify-between group">
                      <div className="flex justify-between items-start mb-3">
                        <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-brand-cyan border border-white/5 group-hover:scale-105 transition-transform">
                          <FileText className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded font-bold">
                          {card.pages}
                        </span>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-white text-sm group-hover:text-brand-cyan transition-colors">{card.name}</h4>
                        <p className="text-xs text-gray-400 mt-1 font-light leading-relaxed">{card.desc}</p>
                      </div>

                      <button 
                        onClick={() => triggerDownloadSimulation(`pdf-${i}`)}
                        className={`w-full mt-4 py-2 rounded-lg text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all ${
                          downloadingId === `pdf-${i}`
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : "bg-brand-blue hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.2)]"
                        }`}
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>{downloadingId === `pdf-${i}` ? "Download Concluído!" : "Baixar PDF Completo"}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* VIDEOAULAS (videos) */}
            {activeTab === "videos" && (
              <motion.div
                key="videos-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left"
              >
                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-brand-cyan/10 border border-brand-cyan/25">
                    <PlayCircle className="w-3.5 h-3.5 text-brand-cyan" />
                    <span className="text-[10px] font-mono font-bold tracking-wide text-brand-cyan uppercase">Demonstrações Didáticas</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">Videoaulas Ilustrativas</h3>
                  <p className="text-gray-300 text-sm font-light leading-relaxed">
                    Aprenda a aplicar as atividades lúdicas assistindo à dinâmica na prática. Nossos professores demonstram a correta divisão de espaço em quadra e a distribuição dos grupos de alunos.
                  </p>
                  <p className="text-gray-400 text-xs font-light">
                    Essas demonstrações curtas cortam caminhos: em vez de ler páginas e páginas de teoria complexa, você assiste à mecânica do jogo em 2 minutos.
                  </p>
                </div>

                {/* Simulated Video Player UI with big placeholder cover */}
                <div className="lg:col-span-7">
                  <div className="relative aspect-video rounded-xl overflow-hidden group border border-white/10 glow-cyan">
                    {/* Dark gradient blur over image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#020617] via-slate-900/60 to-transparent z-10"></div>
                    
                    {/* Simulated screen background elements */}
                    <div className="absolute inset-0 bg-indigo-950 flex flex-col justify-between p-6 z-0">
                      <div className="flex justify-between items-start">
                        <span className="bg-brand-cyan text-brand-navy font-bold text-[10px] px-2 py-1 rounded-full uppercase tracking-wider">
                          MÓDULO: BRINCADEIRAS LÚDICAS
                        </span>
                        <div className="text-xs text-gray-400 font-mono">03:45</div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-display font-extrabold text-xl text-white leading-tight">
                          Brincadeira do "Tubarão na Quadra" Adaptada
                        </h4>
                        <p className="text-xs text-gray-300 font-light max-w-sm">
                          Ideal para desenvolvimento reflexo, lateralidade, focado em turmas de 05 a 12 anos de idade.
                        </p>
                      </div>
                    </div>

                    {/* Central Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-20 group-hover:scale-105 transition-transform duration-300">
                      <div className="w-16 h-16 rounded-full bg-brand-cyan text-brand-navy flex items-center justify-center shadow-lg shadow-brand-cyan/40 cursor-pointer">
                        <PlayCircle className="w-10 h-10 fill-current ml-0.5" />
                      </div>
                    </div>

                    {/* Miniature Controls Bar */}
                    <div className="absolute bottom-0 left-0 w-full p-3 bg-black/80 backdrop-blur-sm flex items-center justify-between text-[11px] text-gray-300 z-20 border-t border-white/5">
                      <div className="flex items-center gap-3">
                        <PlayCircle className="w-4 h-4 text-brand-cyan" />
                        <span>Mecânica de Jogo</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
                        <span className="text-[10px] text-brand-cyan font-mono font-bold uppercase tracking-wider">Altíssima Definição</span>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            )}

            {/* PLANEJADOR BNCC (planner) */}
            {activeTab === "planner" && (
              <motion.div
                key="planner-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left"
              >
                <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#f59e0b]/10 border border-[#f59e0b]/25">
                      <FileText className="w-3.5 h-3.5 text-[#f59e0b]" />
                      <span className="text-[10px] font-mono font-bold tracking-wide text-[#f59e0b] uppercase">Conformidade Pedagógica</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white">Planejamento 100% de Acordo com a BNCC</h3>
                    <p className="text-gray-300 text-sm font-light leading-relaxed">
                      Chega de dores de cabeça relacionando códigos curriculares. Nossos planos de aula vêm com todos os códigos necessários da BNCC (ex: EF12EF01, EF35EF02).
                    </p>
                    <ul className="space-y-2 text-xs text-gray-400 font-light">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#f59e0b]" /> Objetivos de aprendizagem claros
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#f59e0b]" /> Habilidades contempladas detalhadas
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#f59e0b]" /> Metodologia e propostas de avaliação
                      </li>
                    </ul>
                  </div>

                  <a
                    href={CTA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-3.5 bg-brand-blue hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-[0_0_15px_rgba(37,99,235,0.2)] hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Baixar Modelos de Planejamento
                  </a>
                </div>

                {/* Simulated BNCC Planner Sheet preview */}
                <div className="lg:col-span-8 bg-[#040815] rounded-xl border border-white/5 p-5 flex flex-col justify-between text-xs text-gray-200">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-white/5">
                      <span className="text-sm font-bold text-white font-display">FICHA TÉCNICA PEDAGÓGICA</span>
                      <span className="text-[10px] bg-brand-blue/30 text-brand-cyan font-bold px-2 py-0.5 rounded font-mono uppercase">Modelo Padrão</span>
                    </div>

                    <div className="grid grid-cols-3 gap-3 text-[11px] text-gray-400">
                      <div>
                        <span className="block text-[10px] uppercase font-bold text-gray-500">Unidade Temática</span>
                        <span className="text-white font-medium mt-0.5 block">Brincadeiras e Jogos</span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase font-bold text-gray-500">Ano Letivo</span>
                        <span className="text-white font-medium mt-0.5 block">1º e 2º Ano (EF)</span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase font-bold text-gray-500">Metodologia Principal</span>
                        <span className="text-white font-medium mt-0.5 block">Ludicidade Cooperativa</span>
                      </div>
                    </div>

                    <div className="p-3 bg-white/5 rounded-lg border border-white/5 mt-4">
                      <p className="font-bold text-brand-cyan mb-1 font-mono tracking-wide text-[10px]">CÓDIGO BNCC CONTEMPLADO: EF12EF01</p>
                      <p className="text-gray-300 font-light text-[11px] leading-relaxed">
                        “Experimentar, usufruir e recriar brinquedos e brincadeiras lúdicas de matriz indígena e popular, valorizando o patrimônio e a convivência saudável.”
                      </p>
                    </div>

                    <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                      <p className="font-bold text-brand-gold mb-1 text-[10px] uppercase">Avaliação de Desempenho</p>
                      <p className="text-gray-300 font-light text-[11px] leading-relaxed">
                        Observação direta sobre o nível de inclusão nas atividades cooperativas, foco no progresso da espacialidade corporal e agilidade de reação coletiva.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
          
        </div>

      </div>
    </section>
  );
}

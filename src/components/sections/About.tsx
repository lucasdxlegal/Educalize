import { GraduationCap, ArrowRight, CheckCircle2, ChevronRight, UserCheck, Key, ArrowDownToLine, Award } from "lucide-react";
import { motion } from "motion/react";
import { CTA_LINK } from "../../types";

export default function About() {
  const targetAudiences = [
    {
      title: "Recém-formados em Ed. Física",
      desc: "Comece sua trajetória docente com total segurança pedagógica, portando portfólios completos estruturados conforme as normas nacionais."
    },
    {
      title: "Professores veteranos sem tempo",
      desc: "Recupere seus preciosos domingos de folga. Tenha sempre um repertório inédito, criativo e ágil para qualquer turma."
    },
    {
      title: "Coordenadores e Diretores",
      desc: "Padronize a qualidade técnica da escola com planos pedagógicos transparentes que geram relatórios precisos."
    },
    {
      title: "Profissionais de Recreação",
      desc: "Rico acervo focado em esportes, gincanas ativas, atividades psicomotoras e de socialização."
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      icon: Key,
      title: "Inscrição Imediata",
      desc: "Adquira o acesso em menos de 1 minuto clicando em qualquer link desta página. O acesso é enviado por e-mail instantaneamente."
    },
    {
      step: "02",
      icon: ArrowDownToLine,
      title: "Explore e Baixe",
      desc: "Entre no nosso painel exclusivo. Filtre por faixa etária ou tema da BNCC e faça o download do material editável ou em PDF."
    },
    {
      step: "03",
      icon: GraduationCap,
      title: "Aplique nas Quadras",
      desc: "Todas as atividades são acompanhadas de manuais diretos, facilitando na hora de organizar a turma ou dividir equipamentos."
    },
    {
      step: "04",
      icon: Award,
      title: "Gere seu Certificado",
      desc: "Com o progresso de leitura, solicite a emissão do seu diploma de 80 horas válidas para enriquecer seu currículo."
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-brand-navy relative overflow-hidden bg-grid-pattern">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Panel: Narrative explaining who it is for */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#a1a1aa] uppercase">
              SOBRE A NOSSA MISSÃO
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Ajudar educadores a lecionarem com criatividade e praticidade
            </h2>
            <p className="text-gray-300 leading-relaxed font-light">
              Sabemos que a realidade do professor de Educação Física é desafiadora. Muitas vezes falta infraestrutura, materiais de apoio e sobram cobranças burocráticas para organizar os diários curriculares.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              O <strong>Educalize</strong> nasceu com o propósito de empoderar o docente. Nosso material oferece o equilíbrio ideal de ludicidade pedagógica com rigor técnico, otimizando o seu tempo e promovendo o desenvolvimento motor saudável dos seus alunos.
            </p>

            {/* Target Checklist Card */}
            <div className="p-6 rounded-2xl glassmorphism border border-white/5 space-y-4">
              <h4 className="text-white font-bold text-base font-display">Para quem é este material?</h4>
              <div className="space-y-3">
                {targetAudiences.map((audience, i) => (
                  <div key={i} className="flex gap-3 text-left">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-sm font-semibold text-white">{audience.title}</h5>
                      <p className="text-xs text-gray-400 mt-0.5 font-light leading-relaxed">{audience.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Interactive Workflow Step Deck */}
          <div className="lg:col-span-7 space-y-8">
            <div className="text-left">
              <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
                PASSO A PASSO
              </span>
              <h3 className="mt-4 font-display font-bold text-2xl sm:text-3xl text-white">
                Como funciona a nossa plataforma de estudos?
              </h3>
              <p className="mt-2 text-gray-400 text-sm font-light">
                Quatro passos simples separam você de um acervo completo, otimizado e focado em alta conversão de engajamento escolar.
              </p>
            </div>

            {/* Workflow steps grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {workflowSteps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div 
                    key={idx}
                    className="p-6 rounded-2xl glassmorphism border border-white/5 hover:border-brand-blue/30 hover:bg-brand-luxury/80 transition-all duration-300 relative group"
                  >
                    {/* Top step index floating indicator */}
                    <div className="absolute top-4 right-4 font-mono font-bold text-3xl text-white/5 group-hover:text-brand-blue/20 transition-colors">
                      {step.step}
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center border border-white/5 group-hover:bg-brand-blue/20 transition-all">
                      <IconComponent className="w-5 h-5 text-brand-cyan" />
                    </div>

                    <h4 className="mt-4 font-display font-bold text-base text-white group-hover:text-brand-cyan transition-colors">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-xs text-gray-400 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Micro banner conversion trigger */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-6 justify-between p-6 rounded-2xl bg-brand-blue/10 border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 to-transparent pointer-events-none"></div>
              <div className="text-left space-y-1 relative z-10">
                <p className="text-sm font-extrabold text-white">Pronto para assumir o controle total das suas aulas?</p>
                <p className="text-xs text-slate-400">Entre na comunidade nacional de professores de elite.</p>
              </div>
              <a
                href={CTA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-brand-blue hover:bg-blue-500 text-white font-bold text-xs font-display tracking-wide uppercase rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:scale-[1.03] active:scale-[0.97] relative z-10"
              >
                Matricular-se Agora
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

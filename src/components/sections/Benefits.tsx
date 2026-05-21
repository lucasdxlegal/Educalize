import React from "react";
import { FileCheck, Zap, Clock, Sparkles, Award, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { BENEFITS_DATA, Benefit } from "../../types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileCheck: FileCheck,
  Zap: Zap,
  Clock: Clock,
  Sparkles: Sparkles,
  Award: Award,
  ShieldCheck: ShieldCheck
};

export default function Benefits() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  return (
    <section 
      id="beneficios" 
      className="py-24 relative bg-brand-luxury overflow-hidden"
    >
      {/* Background visual graphics */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3.5 py-1.5 rounded-full border border-brand-cyan/20">
            DIFERENCIAIS EXCLUSIVOS
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            Por que os melhores professores de Educação Física usam o{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-blue font-extrabold">
              Educalize
            </span>
            ?
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg font-light leading-relaxed">
            Nós transformamos a complexidade de planejar aulas e gincanas em arquivos organizados, interativos e prontos para uso em menos de 10 minutos.
          </p>
        </div>

        {/* Benefits Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {BENEFITS_DATA.map((benefit: Benefit) => {
            const IconComponent = iconMap[benefit.iconName] || FileCheck;
            
            return (
              <motion.div
                key={benefit.id}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl glassmorphism p-8 hover:bg-brand-navy/60 transition-all duration-300 border border-white/5 hover:border-brand-cyan/30 flex flex-col justify-between"
              >
                {/* Glow Overlay effect on Hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-brand-cyan/5 via-brand-blue/5 to-transparent transition-opacity duration-300 pointer-events-none"></div>

                <div>
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-blue/20 to-brand-cyan/20 flex items-center justify-center border border-white/10 group-hover:from-brand-cyan group-hover:to-brand-blue transition-all duration-500 shadow-inner group-hover:glow-cyan shrink-0">
                    <IconComponent className="w-6 h-6 text-brand-cyan group-hover:text-brand-navy transition-colors duration-300" />
                  </div>

                  <h3 className="mt-6 font-display font-bold text-lg md:text-xl text-white group-hover:text-brand-cyan transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>

                {/* Card Indicator */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 group-hover:text-brand-cyan transition-colors">
                  <span className="font-mono text-[10px] tracking-widest uppercase">Garantido</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan/30 group-hover:bg-brand-cyan transition-all"></span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  );
}

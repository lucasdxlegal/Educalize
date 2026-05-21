export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Lesson {
  id: string;
  title: string;
  category: string;
  duration: string;
  progress: number;
}

export interface ContentAccordionItem {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  feedback: string;
  stars: number;
  avatarSeed: string; // Used to generate safe visual representations/avatars without broken images
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// PREMIUM PORTUGUESE COPYWRITING FOR EDUCALIZE
export const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Painel", href: "#painel" },
  { label: "Certificado", href: "#certificado" },
  { label: "Conteúdo", href: "#conteudo" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" }
];

export const CTA_LINK = "https://pay.wiapy.com/A1SqD3glTi";

export const LESSONS_DATA: Lesson[] = [
  { id: "1", title: "Coordenação Motora Eficiente", category: "Educação Infantil", duration: "12 aulas • Materiais e Planos", progress: 100 },
  { id: "2", title: "Jogos Recreativos Dinâmicos", category: "Fundamental I", duration: "8 planos de aula prontos", progress: 85 },
  { id: "3", title: "Futsal Escolar Cooperativo", category: "Fundamental II", duration: "15 vídeos passo a passo", progress: 60 },
  { id: "4", title: "Voleibol Escolar Adaptado", category: "Fundamental", duration: "10 dinâmicas de quadra", progress: 40 },
  { id: "5", title: "Psicomotricidade e Jogos", category: "Infantil", duration: "E-book completo + Apoio", progress: 90 },
  { id: "6", title: "Jogos Recreativos e de Inclusão", category: "Inclusão Social", duration: "Guias adaptativos", progress: 75 }
];

export const BENEFITS_DATA: Benefit[] = [
  {
    id: "b1",
    title: "Material pronto para aplicar",
    description: "Chega de passar horas planejando no domingo à noite. Baixe planos estruturados, PDF's e dinâmicas prontas para o dia a dia.",
    iconName: "FileCheck"
  },
  {
    id: "b2",
    title: "Aulas muito mais dinâmicas",
    description: "Engaje e conquiste a atenção dos seus alunos com brincadeiras lúdicas, jogos cooperativos e metodologias ativas inovadoras.",
    iconName: "Zap"
  },
  {
    id: "b3",
    title: "Economia enorme de tempo",
    description: "Tenha um acervo completo na palma da sua mão. Escolha a atividade desejada por tema escolar e aplique na mesma hora.",
    iconName: "Clock"
  },
  {
    id: "b4",
    title: "Conteúdo 100% atualizado",
    description: "Aulas e planejamentos alinhados às diretrizes nacionais vigentes (BNCC), garantindo total conformidade pedagógica.",
    iconName: "Sparkles"
  },
  {
    id: "b5",
    title: "Certificado válido de 80h",
    description: "Potencialize sua carreira com um certificado abrangente, ideal para extensão universitária, concursos ou progressão funcional.",
    iconName: "Award"
  },
  {
    id: "b6",
    title: "Acesso vitalício e seguro",
    description: "Pague apenas uma vez por inscrição e aproveite todas as atualizações futuras sem cobranças adicionais ocultas.",
    iconName: "ShieldCheck"
  }
];

export const CONTENT_ACCORDION_DATA: ContentAccordionItem[] = [
  {
    id: "c1",
    title: "Jogos Escolares Modernos",
    description: "Uma rica seleção de jogos que ensinam cooperação, reflexos rápidos e integração entre as diferentes idades.",
    items: [
      "Jogos populares adaptados",
      "Brincadeiras cooperativas e gincanas",
      "Jogos de tabuleiro gigantes para quadra",
      "Atividades práticas com materiais recicláveis"
    ]
  },
  {
    id: "c2",
    title: "Desenvolvimento da Coordenação Motora",
    description: "Planos focados na evolução das habilidades motoras finas e amplas para alunos de todas as categorias.",
    items: [
      "Psicomotricidade na infância",
      "Circuitos motores com cordas, cones e bambolês",
      "Exercícios de lateralidade, equilíbrio e ritmo",
      "Planilhas de acompanhamento do desenvolvimento motor"
    ]
  },
  {
    id: "c3",
    title: "Planejamento Semanal e Anual Pronto",
    description: "Sua rotina escolar planejada de ponta a ponta, totalmente de acordo com as normas da BNCC.",
    items: [
      "Planos de aula bimestrais prontos para baixar",
      "Atividades detalhadas com objetivos específicos",
      "Métodos de avaliação simples e práticos",
      "Modelos de relatórios pedagógicos prontos"
    ]
  },
  {
    id: "c4",
    title: "Recreação Infantil e Ludicidade",
    description: "Como prender a atenção das crianças de maneira leve, estimulando a imaginação e a socialização ativa.",
    items: [
      "Contação de histórias com movimento físico",
      "Cantigas de roda e jogos rítmicos divertidos",
      "Atividades de relaxamento e volta à calma",
      "Desafios lúdicos com bexigas e brincadeiras tradicionais"
    ]
  },
  {
    id: "c5",
    title: "Inclusão Escolar nas Aulas de Educação Física",
    description: "Aprenda como adaptar qualquer jogo ou atividade para integrar alunos com deficiência com sensibilidade e respeito.",
    items: [
      "Guia completo de jogos sensoriais e adaptados",
      "Como instruir a turma sobre empatia e colaboração",
      "Sugestões de materiais modulares ergonômicos",
      "Estudos de caso reais de sucesso inclusivo na escola"
    ]
  },
  {
    id: "c6",
    title: "Dinâmicas Práticas e Gincanas Ativas",
    description: "Grandes circuitos competitivos e gincanas solidárias que agitam a comunidade escolar.",
    items: [
      "Dinâmicas de entrosamento em equipes",
      "Guia passo a passo para competições saudáveis",
      "Modelos de premiações simbólicas e diplomacia esportiva",
      "Planos de contingência para dias de chuva (aulas teóricas dinâmicas)"
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Profª Ana Paula Silva",
    role: "Educação Infantil & Fundamental I (São Paulo)",
    feedback: "O Educalize salvou meus finais de semana! Antes eu perdia horas montando planos de aula pela BNCC, agora abro a plataforma, escolho as atividades em 5 minutos e corro pra quadra. Meus alunos estão amando a variedade das aulas recreativas!",
    stars: 5,
    avatarSeed: "teacher-1"
  },
  {
    id: "t2",
    name: "Prof. Marcos Vinícius",
    role: "Colegiado de Ed. Física & Recreação (Belo Horizonte)",
    feedback: "Material de altíssimo nível. A seção de inclusão escolar é simplesmente impecável. Consegui integrar perfeitamente um aluno cadeirante que costumava ficar assistindo, agora ele participa ativamente de todas as gincanas. Recomendo muito!",
    stars: 5,
    avatarSeed: "teacher-2"
  },
  {
    id: "t3",
    name: "Profª Letícia Ramos",
    role: "Rede Pública de Ensino (Curitiba)",
    feedback: "Por apenas R$19,90 eu não esperava que fosse tão completo! Os PDFs são super bem organizados, fáceis de imprimir e o certificado de 80h já foi aprovado na minha secretaria de educação para progressão funcional de carreira. Vale cada centavo.",
    stars: 5,
    avatarSeed: "teacher-3"
  },
  {
    id: "t4",
    name: "Prof. Diego Santos",
    role: "Treinamento Esportivo e Escolar (Salvador)",
    feedback: "Os jogos escolares e planos de futsal e vôlei são excelentes. Dá pra ver que foi feito por educadores que conhecem a realidade de uma quadra de escola, sem teorias mirabolantes. Prático, objetivo e muito atrativo para os jovens.",
    stars: 5,
    avatarSeed: "teacher-4"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "f1",
    question: "Como eu recebo o acesso ao material?",
    answer: "O envio é 100% automático. Assim que a sua inscrição for confirmada (o Pix e cartão aprovam em segundos), você recebe imediatamente no seu e-mail cadastrado os dados de acesso exclusivos à nossa área de membros premium."
  },
  {
    id: "f2",
    question: "Como funciona a emissão do certificado de 80 horas?",
    answer: "Após consultar os materiais indispensáveis na nossa plataforma, você poderá solicitar o seu certificado de 80 horas diretamente pelo seu painel de aluno. O certificado conta com assinatura pedagógica oficial e é válido em todo o território nacional."
  },
  {
    id: "f3",
    question: "O material está de acordo com a BNCC?",
    answer: "Sim! Absolutamente todos os planos de aula, propostas pedagógicas e avaliações estão rigorosamente em conformidade com as diretrizes curriculares nacionais atuais (Base Nacional Comum Curricular)."
  },
  {
    id: "f4",
    question: "Preciso pagar mensalidade pelo acesso?",
    answer: "Não! O pagamento de R$19,90 é taxa única obrigatória para liberação. Sem assinaturas, sem cobranças mensais, sem surpresas na fatura. E você ainda conta com acesso vitalício da nossa plataforma."
  },
  {
    id: "f5",
    question: "Quais são as atividades exclusivas oferecidas?",
    answer: "O acervo compreende jogos recreativos lúdicos, atividades de desenvolvimento de coordenação motora infantil, desafios de raciocínio lógico, iniciação ao futsal/voleibol, planos de aula adaptados para inclusão e modelos de avaliações rápidas em PDF."
  },
  {
    id: "f6",
    question: "Não tenho familiaridade com computador, vou conseguir acessar?",
    answer: "Com certeza. A nossa plataforma é extremamente leve, limpa e pensada para celular, tablet ou computador. Você consegue baixar e imprimir todos os arquivos PDFs com um único toque."
  }
];
